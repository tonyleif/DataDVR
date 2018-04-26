import { Component, OnInit, DefaultIterableDiffer} from '@angular/core'; // , ChangeDetectorRef
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

  constructor(private gamesService: RegularSeasonGames2017Service,
    private playsService: RegularSeasonPlays2017Service,
    private activePlayersService: RegularSeasonActivePlayers2017Service,
    private teamService: TeamService) { // , changeDetectorRef: ChangeDetectorRef
    // this.changeDetectorRef = changeDetectorRef;
    // this was from some testing for Angular animations. May still need this in the future
    this.direction = 'none';
  }

  ngOnInit() {
    this.loadSchedule();
    this.loadPlayers();
  }

  loadSchedule() {
    if (localStorage.fullgameschedule) {
      this.weeks = this.gamesService.getWeeks();
    } else {
      this.gamesService.getScheduleFromAPI().subscribe(result => {
        this.weeks = this.gamesService.getWeeks();
      });
    }
  }

  loadPlayers() {
    if (!localStorage.activeplayers) {
      this.activePlayersService.getActivePlayersFromAPI().subscribe(result => result);
    }
  }

  get doneLoadingSchedule(): boolean {
    return (localStorage.fullgameschedule);
  }

  set selectedWeek(weekNumber: number) {
    if (this._selectedWeek !== weekNumber) {
      this.selectedGame = null;
      // this updates the original array so the reference is not lost per
      // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
      this.plays.length = 0;
    }
    if (weekNumber > 0) {
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
    if (this.selectedGame && this.selectedGame.id != id) {
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
        // Left this here just to show what I tried and failed
        // this made the page load slowly

        // switch (play.playType) {
        //   case PlayType.KickingPlay:
        //     // console.log(jsonPlay.kickingPlay.kickingPlayer.ID);
        //     const kickingPlayer = this.activePlayersService.getPlayer(jsonPlay.kickingPlay.kickingPlayer.ID);
        //     // console.log(kickingPlayer);
        //     play.kickingPlay.kickingPlayer = kickingPlayer;
        //     break;
        //   case PlayType.RushingPlay:
        //     const rushingPlayer = this.activePlayersService.getPlayer(jsonPlay.rushingPlay.rushingPlayer.ID);
        //     play.rushingPlay.rushingPlayer = rushingPlayer;
        //     break;
        //   case PlayType.PassingPlay:
        //     const passingPlayer = this.activePlayersService.getPlayer(jsonPlay.passingPlay.passingPlayer.ID);
        //     play.passingPlay.passingPlayer = passingPlayer;
        //     if (jsonPlay.passingPlay.receivingPlayer) {
        //       const receivingPlayer = this.activePlayersService.getPlayer(jsonPlay.passingPlay.receivingPlayer.ID);
        //       play.passingPlay.receivingPlayer = receivingPlayer;
        //     }
        //     break;
        //   case PlayType.KickAttempt:
        //     const kicker = this.activePlayersService.getPlayer(jsonPlay.kickAttempt.kickingPlayer.ID);
        //     play.kickAttempt.kickingPlayer = kicker;
        //     break;
        //   case PlayType.SackingPlay:
        //     // const sackingPlayer = this.activePlayersService.getPlayer(jsonPlay.sackingPlay.sackingPlayer.ID);
        //     // play.sackingPlay.sackingPlayer = sackingPlayer;
        //     break;
        //   case PlayType.LateralPass:
        //     const lateralPassingPlayer = this.activePlayersService.getPlayer(jsonPlay.passingPlay.passingPlayer.ID);
        //     play.lateralPass.passingPlayer = passingPlayer;
        //     if (jsonPlay.passingPlay.receivingPlayer) {
        //       const lateralReceivingPlayer = this.activePlayersService.getPlayer(jsonPlay.passingPlay.receivingPlayer.ID);
        //       play.lateralPass.receivingPlayer = lateralReceivingPlayer;
        //     }
        //     break;
        // }

        // localPlayArray.push(play);
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
    // Left commented code to show work

    // this.direction = 'backward';
    // this.changeDetectorRef.detectChanges();
    this.direction = 'forward';
    // this.changeDetectorRef.detectChanges();
    this._currentPlay = undefined;
    this.currentPlayIndex++;
    // this.changeDetectorRef.detectChanges();
    // this.direction = 'none';
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
  }

  // This is for a hidden button to speed up testing how the final plays of the game appears
  goToLastPlay() {
    this._currentPlay = undefined;
    this.currentPlayIndex = this.plays.length - 1;
  }

}
