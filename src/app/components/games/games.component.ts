import { Component, OnInit, DefaultIterableDiffer } from '@angular/core'; // , ChangeDetectorRef
import { RegularSeasonGames2017Service } from '../../model/regular-season-games-2017.service';
import { RegularSeasonPlays2017Service } from '../../model/regular-season-plays-2017.service';
import { RegularSeasonActivePlayers2017Service } from '../../model/regular-season-active-players-2017.service';
import { TeamService } from '../../model/team.service';
import { GameBoxScoreService } from '../../model/game-box-score.service';

import { Season } from '../../model/Season';
import { Game } from '../../model/Game';
import { Team } from '../../model/Team';
import { Play, PlayType } from '../../model/Play';
import { Player } from '../../model/Player';
import { GameBoxScore } from '../../model/GameBoxScore';

import { Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PlayerStats } from '../../model/PlayerStats';
import { PlayersStats } from '../../model/PlayersStats';
import { $ } from 'protractor';
import { jsonpFactory } from '@angular/http/src/http_module';
import { debug } from 'util';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  animations: [
    trigger('flyInOut', [
      // this is for making the plays appear to be moving up and down
      // it makes the order more apparent
      transition('void => backward', [
        style({ transform: 'translateY(50%)', opacity: 0.0, zIndex: 2 }),
        animate('400ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1.0, zIndex: 2 }))
      ]),
      transition('void => forward', [
        style({ transform: 'translateY(-50%)', opacity: 0.0, zIndex: 2 }),
        animate('400ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1.0, zIndex: 2 }))
      ])
    ])
  ]
})
export class GamesComponent implements OnInit {
  // private changeDetectorRef: ChangeDetectorRef;
  // selectedSeason: string; // future enhancement
  private _selectedWeek: number;
  private _selectedGame: Game;
  private _currentPlay: Play;
  weeks: Set<number>;
  games: Array<Game>;
  plays: Array<Play> = [];
  players: Array<Player> = [];
  currentPlayIndex = -1;
  direction: string;
  playersStats: PlayersStats;
  boxScore: GameBoxScore;
  updated: boolean;
  _goToValue: string;

  constructor(private gamesService: RegularSeasonGames2017Service,
    private playsService: RegularSeasonPlays2017Service,
    private activePlayersService: RegularSeasonActivePlayers2017Service,
    private teamService: TeamService,
    private gameBoxScoreService: GameBoxScoreService) { // , changeDetectorRef: ChangeDetectorRef
    // this.changeDetectorRef = changeDetectorRef;
    // this was from some testing for Angular animations. May still need this in the future
    this.direction = 'none';
    this._goToValue = 'GoTo';
  }

  ngOnInit() {
    this.loadSchedule();
    this.loadPlayers();
  }

  loadSchedule() {
    if (localStorage.getItem('fullgameschedule')) {
      this.weeks = this.gamesService.getWeeks();
    } else {
      this.gamesService.getScheduleFromAPI().subscribe(result => {
        this.weeks = this.gamesService.getWeeks();
      });
    }
  }

  loadPlayers() {
    // if (!localStorage.getItem('activeplayers')) {
    //   this.activePlayersService.getActivePlayersFromAPI().subscribe(result => result);
    // }
  }

  get doneLoadingSchedule(): boolean {
    return (localStorage.getItem('fullgameschedule') !== null);
  }

  set selectedWeek(weekNumber: number) {
    if (this._selectedWeek !== weekNumber) {
      this.selectedGame = null;
      // this updates the original array so the reference is not lost per
      // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
      this.plays.length = 0;
    }
    if (weekNumber > 0) {
      // const tempGames: Game[] = new Array<Game>();
      // this.gamesService.getGamesByWeek(weekNumber).forEach(g => tempGames.push(new Game(g.json)));
      // this.games = tempGames;
      this.games = this.gamesService.getGamesByWeek(weekNumber);
    } else {
      this.games = null;
    }
    this._selectedWeek = weekNumber;
  }

  get selectedWeek() {
    return this._selectedWeek;
  }

  set selectedGame(value: Game) {
    if (this._selectedGame !== value) {
      // this updates the original array so the reference is not lost per
      // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
      this._selectedGame = value;
      this.currentPlayIndex = -1;
      if (value !== null) {
        this.loadPlayerArray();
        this.loadPlayArray();
        this.loadBoxScore();
      }
    }
    if (this._selectedGame) {
      const team: Team = this.awayTeamObject;
    }
  }

  set selectedGameId(id: number) {
    // console.log('selectedGameId ' + id);
    if (!this._selectedGame || (this._selectedGame.id !== id)) {
      // Clean out old games from LocalStorage
      if (!this.offlineMode) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i).substring(0, 4) === 'game' || localStorage.key(i).substring(0, 13) === 'activeplayers') {
            localStorage.removeItem(localStorage.key(i));
          }
        }
      }
      // this updates the original array so the reference is not lost per
      // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
      this._selectedGame = new Game(this.gamesService.getGame(id));
      this.currentPlayIndex = -1;
      if (id !== null) {
        this.loadPlayerArray();
        this.loadPlayArray();
        this.loadBoxScore();
      }
    }
    if (this._selectedGame) {
      const team: Team = this.awayTeamObject;
    }
  }

  get selectedGame(): Game {
    return this._selectedGame;
  }

  get selectedGameId(): number {
    if (this._selectedGame) {
      return this._selectedGame.id;
    }
    return 0;
  }

  setGame(id: number) {
    // Don't bother doing this work if the button clicked was already selected
    if (this.selectedGame && this.selectedGame.id !== id) {
      // Browsers have storage limits so clear out the data from last game
      // Iterate over localStorage and remove items that start with 'watched'
      if (!this.offlineMode) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i).substring(0, 4) === 'game' || localStorage.key(i).substring(0, 13) === 'activeplayers') {
            localStorage.removeItem(localStorage.key(i));
          }
        }
      }
      this.selectedGame = new Game(this.gamesService.getGame(id));
    } else if (!this.selectedGame) {
      this.selectedGame = new Game(this.gamesService.getGame(id));
    }
  }

  get awayTeamObject(): Team {
    if (this._selectedGame) {
      const team: Team = this.teamService.getTeam(this.selectedGame.awayTeam.ID);
      return team;
    } else {
      return null;
    }
  }

  get homeTeamObject(): Team {
    return this.teamService.getTeam(this.selectedGame.homeTeam.ID);
  }

  loadPlayerArray() {
    // console.log('loadPlayerArray');
    this.players.length = 0; // empty the array without making a new array
    // create a local variable because this.players can't be referenced inside
    // the observable subscription
    if (this.offlineMode) {
      // console.log(this.offlineMode);
      const playerArray = JSON.parse(localStorage.getItem(
        'activeplayers' + this.awayTeamObject.Abbreviation + '-' + this.homeTeamObject.Abbreviation));
      // console.log(JSON.stringify(playerArray));
      for (let i = 0; i < playerArray.length; i++) {
        const player = new Player(playerArray[i]);
        this.players.push(player);
      }
    } else {
      // console.log('should not run offline');
      this.activePlayersService.getActivePlayersByTeamsFromAPI(
        this.selectedGame.awayTeam.Abbreviation, this.selectedGame.homeTeam.Abbreviation).subscribe(result => {
          const playerArray = result;
          // console.log(JSON.stringify(playerArray));
          for (let i = 0; i < playerArray.length; i++) {
            this.players.push(playerArray[i]);
          }
        });
    }

  }

  getPlayer(id: number): Player {
    for (let i = 0; i < this.players.length; i++) {
      // console.log(JSON.stringify(this.players[i]));
      if (this.players[i].id === id) {
        return this.players[i];
      }
    }
    return null;
  }

  loadPlayArray() {
    this.plays.length = 0; // empty the array without making a new array
    // create a local variable because this.plays can't be referenced inside
    // the observable subscription
    if (localStorage.getItem('game' + this.selectedGame.gameid)) {
      // console.log('get plays local');
      const jsonPlays = this.playsService.getPlaysFromLocal('game' + this.selectedGame.gameid);
      jsonPlays.forEach(function (jsonPlay, i) {
        const play = new Play(jsonPlay, i);
        // I want this array in reverse order and unshift pushes to the front of the array
        // https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
        this.plays.unshift(play);
      }, this); // Not sure I really like adding this reference here. It works but hard to follow.
    } else {
      // console.log('getting plays from service');
      this.playsService.getPlaysFromAPI(this.selectedGame.gameid).subscribe(result => {
        localStorage.setItem('game' + this.selectedGame.gameid, JSON.stringify(result));
        const jsonPlays = this.playsService.getPlaysFromLocal('game' + this.selectedGame.gameid);
        jsonPlays.forEach(function (jsonPlay, i) {
          const play = new Play(jsonPlay, i);
          // I want this array in revers order and unshift pushes to the front of the array
          // https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
          this.plays.unshift(play);
        }, this);
      });
    }
  }

  loadBoxScore() {
    if (localStorage.getItem('game' + this.selectedGame.gameid)) {
      this.boxScore = this.gameBoxScoreService.getBoxScoreFromLocal(this.selectedGame.gameid);
    } else {
      this.gameBoxScoreService.getBoxScoreFromAPI(this.selectedGame.gameid).subscribe(result => {
        localStorage.setItem('boxscore-' + this.selectedGame.gameid, JSON.stringify(result));
        this.boxScore = this.gameBoxScoreService.getBoxScoreFromLocal(this.selectedGame.gameid);
      });
    }

  }

  get playList(): Array<Play> {
    return this.plays;
  }

  get showPlays(): boolean {
    return (this.plays.length > 0);
  }

  get loadingPlays(): boolean {
    return (this.selectedGame && this.plays.length === 0);
  }

  get currentPlay(): Play {
    if (this._currentPlay !== undefined) {
      return this._currentPlay;
    }
    this._currentPlay = this.plays[this.plays.length - this.currentPlayIndex - 1];
    if (this._currentPlay) {
      switch (this._currentPlay.playType) {
        case PlayType.KickingPlay:
          const kickingPlayer = this.getPlayer(this._currentPlay.json.kickingPlay.kickingPlayer.ID);
          this._currentPlay.kickingPlay.kickingPlayer = kickingPlayer;
          break;
        case PlayType.RushingPlay:
          const rushingPlayer = this.getPlayer(this._currentPlay.json.rushingPlay.rushingPlayer.ID);
          this._currentPlay.rushingPlay.rushingPlayer = rushingPlayer;
          break;
        case PlayType.PassingPlay:
          const passingPlayer = this.getPlayer(this._currentPlay.json.passingPlay.passingPlayer.ID);
          this._currentPlay.passingPlay.passingPlayer = passingPlayer;
          if (this._currentPlay.json.passingPlay.receivingPlayer) {
            const receivingPlayer = this.getPlayer(this._currentPlay.json.passingPlay.receivingPlayer.ID);
            this._currentPlay.passingPlay.receivingPlayer = receivingPlayer;
          }
          break;
        case PlayType.KickAttempt:
          const kicker = this.getPlayer(this._currentPlay.json.kickAttempt.kickingPlayer.ID);
          this._currentPlay.kickAttempt.kickingPlayer = kicker;
          break;
        case PlayType.LateralPass:
          const lateralPassingPlayer = this.getPlayer(this._currentPlay.json.passingPlay.passingPlayer.ID);
          this._currentPlay.lateralPass.passingPlayer = passingPlayer;
          if (this._currentPlay.json.passingPlay.receivingPlayer) {
            const lateralReceivingPlayer = this.getPlayer(this._currentPlay.json.passingPlay.receivingPlayer.ID);
            this._currentPlay.lateralPass.receivingPlayer = lateralReceivingPlayer;
          }
          break;
      }
    }

    return this._currentPlay;
  }

  get playsToShow(): Array<Play> {
    return this.plays.slice(this.plays.length - this.currentPlayIndex, this.plays.length - this.currentPlayIndex + 4);
  }

  get currentPlayersStats(): PlayersStats {
    if (this.currentPlayIndex >= 0) {
      const playsWatched = this.plays.slice(this.plays.length - this.currentPlayIndex - 1, this.plays.length);
      return new PlayersStats(playsWatched, this.selectedGame.awayTeam.Abbreviation, this.selectedGame.homeTeam.Abbreviation);
    }
    return null;
  }

  get hasPlayersStats(): boolean {
    return (this.currentPlayIndex >= 0); // (this.currentPlayersStats != null);
  }

  get onePlayAhead(): Play {
    return this.plays[this.plays.length - this.currentPlayIndex - 2];
  }

  get onePlayAgo(): Play {
    return this.plays[this.plays.length - this.currentPlayIndex];
  }

  get twoPlaysAgo(): Play {
    return this.plays[this.plays.length - this.currentPlayIndex + 1];
  }

  get threePlaysAgo(): Play {
    return this.plays[this.plays.length - this.currentPlayIndex + 2];
  }

  get fourPlaysAgo(): Play {
    return this.plays[this.plays.length - this.currentPlayIndex + 3];
  }

  nextPlay() {
    // this.direction = 'backward';
    // this.changeDetectorRef.detectChanges();
    this.direction = 'forward';
    // this.changeDetectorRef.detectChanges();
    this._currentPlay = undefined;
    this.currentPlayIndex++;
    // this.changeDetectorRef.detectChanges();
    // this.direction = 'none';
    this._goToValue = 'GoTo';
  }

  previousPlay() {
    // Left commented code to show work

    // this.direction = 'forward';
    // this.changeDetectorRef.detectChanges();
    this.direction = 'backward';
    // this.changeDetectorRef.detectChanges();
    this._currentPlay = undefined;
    this.currentPlayIndex--;
    // this.changeDetectorRef.detectChanges();
    // this.direction = 'none';
    this._goToValue = 'GoTo';
  }

  // This is for a hidden button to speed up testing how the final plays of the game appears
  goToLastPlay() {
    this.direction = 'forward';
    this._currentPlay = undefined;
    this.currentPlayIndex = this.plays.length - 1;
  }

  goTo(quarter) {
    this._currentPlay = undefined;
    if (quarter === 'End') {
      this.currentPlayIndex = this.plays.length - 1;
    } else {
      for (let i = this.plays.length - 1; i > -1; i--) {
        if (this.plays[i].quarter === quarter) {
          this.currentPlayIndex = this.plays.length - i - 1;
          break;
        }
      }
    }
  }

  set goToValue(location) {
    if (location !== 'GoTo') {
      this._currentPlay = undefined;
      if (location === 'End') {
        this.currentPlayIndex = this.plays.length - 1;
      } else {
        for (let i = this.plays.length - 1; i > -1; i--) {
          if (this.plays[i].quarter.toString() === location) {
            this.currentPlayIndex = this.plays.length - i - 1;
            break;
          }
        }
      }
      location = 'GoTo';
      this._goToValue = 'GoTo';
    }
  }

  get goToValue() {
    return this._goToValue;
  }

  markGameAsWatched() {
    this.selectedGame.watched = !this.selectedGame.watched;
    this.updated = true;
  }

  get offlineMode() {
    return (localStorage.getItem('offlineMode') === 'true');
  }

  get selectGameAPIURL() {
    return 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/game_playbyplay.json?gameid=' + this._selectedGame.gameid;
  }
}
