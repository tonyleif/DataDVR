import { Component, OnInit, DefaultIterableDiffer } from '@angular/core'; // , ChangeDetectorRef
import { RegularSeasonGames2017Service } from '../../model/regular-season-games-2017.service';
import { RegularSeasonPlays2017Service } from '../../model/regular-season-plays-2017.service';
import { RegularSeasonActivePlayers2017Service } from '../../model/regular-season-active-players-2017.service';
import { Season } from '../../model/Season';
import { TeamService } from '../../model/team.service';
import { Game } from '../../model/Game';
import { Team } from '../../model/Team';
import { Play, PlayType } from '../../model/Play';
import { Player } from '../../model/Player';

import { Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PlayerStats } from '../../model/PlayerStats';
import { PlayersStats } from '../../model/PlayersStats';
import { $ } from 'protractor';

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
  private _selectedWeek;
  private _selectedGame: Game;
  private _currentPlay: Play;
  weeks: Set<number>;
  games: Array<Game>;
  plays: Array<Play> = [];
  currentPlayIndex = -1;
  direction: string;
  // playersStats: Set<PlayerStats> = new Set<PlayerStats>();
  // passingPlayersStats: Set<PlayerStats> = new Set<PlayerStats>();
  playersStats: PlayersStats;
  updated: boolean;
  _goToValue: string;

  constructor(private gamesService: RegularSeasonGames2017Service,
    private playsService: RegularSeasonPlays2017Service,
    private activePlayersService: RegularSeasonActivePlayers2017Service,
    private teamService: TeamService) { // , changeDetectorRef: ChangeDetectorRef
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
    if (!localStorage.getItem('activeplayers')) {
      this.activePlayersService.getActivePlayersFromAPI().subscribe(result => result);
    }
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
        this.loadPlayArray();
      }
    }
    if (this._selectedGame) {
      // console.log('selectedGame trying to get awayTeam');
      const team: Team = this.awayTeamObject;
      // console.log(JSON.stringify(team));
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
      localStorage.removeItem(this.selectedGame.gameid);
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

  loadPlayArray() {
    this.plays.length = 0; // empty the array without making a new array
    // create a local variable because this.plays can't be referenced inside
    // the observable subscription
    if (localStorage.getItem(this.selectedGame.gameid)) {
      const jsonPlays = this.playsService.getPlaysFromLocal(this.selectedGame.gameid);
      jsonPlays.forEach(function (jsonPlay, i) {
        const play = new Play(jsonPlay, i);
        // I want this array in reverse order and unshift pushes to the front of the array
        // https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
        this.plays.unshift(play);
      }, this); // Not sure I really like adding this reference here. It works but hard to follow.
    } else {
      this.playsService.getPlaysFromAPI(this.selectedGame.gameid).subscribe(result => {
        localStorage.setItem(this.selectedGame.gameid, JSON.stringify(result));
        const jsonPlays = this.playsService.getPlaysFromLocal(this.selectedGame.gameid);
        jsonPlays.forEach(function (jsonPlay, i) {
          const play = new Play(jsonPlay, i);
          // I want this array in revers order and unshift pushes to the front of the array
          // https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
          this.plays.unshift(play);
        }, this);
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
    // console.log('this.currentPlayIndex ' + this.currentPlayIndex);
    if (this._currentPlay !== undefined) {
      return this._currentPlay;
    }
    this._currentPlay = this.plays[this.plays.length - this.currentPlayIndex - 1];
    if (this._currentPlay) {
      switch (this._currentPlay.playType) {
        case PlayType.KickingPlay:
          const kickingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.kickingPlay.kickingPlayer.ID);
          this._currentPlay.kickingPlay.kickingPlayer = kickingPlayer;
          break;
        case PlayType.RushingPlay:
          const rushingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.rushingPlay.rushingPlayer.ID);
          this._currentPlay.rushingPlay.rushingPlayer = rushingPlayer;
          break;
        case PlayType.PassingPlay:
          const passingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.passingPlay.passingPlayer.ID);
          this._currentPlay.passingPlay.passingPlayer = passingPlayer;
          // // Find player in set
          // let existingPlayerStats: PlayerStats;
          // this.playersStats.forEach(function(ps: PlayerStats) {
          //       if (ps.player.id === passingPlayer.id) {
          //         existingPlayerStats = ps;
          //       }
          //     }
          //   );
          // // Add player to set if not found
          // if (existingPlayerStats === undefined) {
          //   existingPlayerStats = new PlayerStats(passingPlayer);
          //   this.playersStats.add(existingPlayerStats);
          // }
          // // Update stats

          // if (this.direction === 'forward') {
          //   existingPlayerStats.passingYards += +this._currentPlay.passingPlay.totalYardsGained;
          // } else {
          //   if (this.direction === 'backward') {
          //     // console.log(this.plays[this.plays.length - this.currentPlayIndex - 2].passingPlay.totalYardsGained);
          //     console.log(this.onePlayAhead.playType);
          //     if (this.onePlayAhead.playType === PlayType.PassingPlay) {
          //       console.log(this.onePlayAhead.passingPlay.totalYardsGained);
          //       existingPlayerStats.passingYards -= +this.onePlayAhead.passingPlay.totalYardsGained;
          //     }
          //   }
          // }
          if (this._currentPlay.json.passingPlay.receivingPlayer) {
            const receivingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.passingPlay.receivingPlayer.ID);
            this._currentPlay.passingPlay.receivingPlayer = receivingPlayer;
          }
          break;
        case PlayType.KickAttempt:
          const kicker = this.activePlayersService.getPlayer(this._currentPlay.json.kickAttempt.kickingPlayer.ID);
          this._currentPlay.kickAttempt.kickingPlayer = kicker;
          break;
        case PlayType.LateralPass:
          const lateralPassingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.passingPlay.passingPlayer.ID);
          this._currentPlay.lateralPass.passingPlayer = passingPlayer;
          if (this._currentPlay.json.passingPlay.receivingPlayer) {
            const lateralReceivingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.passingPlay.receivingPlayer.ID);
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
    // console.log('nextPlay');
    // Left commented code to show work

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
    // console.log('this.goToValue = ' + this.goToValue);
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
    // this.goToValue = 'GoTo';
    // quarter = 'GoTo';
    // console.log('this.goToValue = ' + this.goToValue);
    // $('#quarter').val(false);
    // document.getElementById('quarter').selected
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
    console.log(this._goToValue);
    return this._goToValue;
  }

  markGameAsWatched() {
    this.selectedGame.watched = !this.selectedGame.watched;
    this.updated = true;
  }

}
