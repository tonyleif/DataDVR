import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import { RegularSeasonGames2017Service } from '../../model/regular-season-games-2017.service';
import { RegularSeasonPlays2017Service } from '../../model/regular-season-plays-2017.service';
import { RegularSeasonActivePlayers2017Service } from '../../model/regular-season-active-players-2017.service';
import { Game } from '../../model/Game';
import { Play, PlayType } from '../../model/Play';
import { Player } from '../../model/Player';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  private _selectedWeek;
  private _selectedGame: Game;
  private _currentPlay: Play;
  weeks: Set<number>;
  games: Array<Game>;
  plays: Array<Play> = [];
  currentPlayIndex = -1;

  constructor(private gamesService: RegularSeasonGames2017Service,
    private playsService: RegularSeasonPlays2017Service,
    private activePlayersService: RegularSeasonActivePlayers2017Service) { }

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
    // console.log('loadPlayers');
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
    // console.log('setGame ' + id);
    this.selectedGame = new Game(this.gamesService.getGame(id));
  }

  loadPlayArray() {
    // console.log('loadPlayArray');
    this.plays.length = 0; // empty the array without making a new array
    // const localPlayArray: Array<Play> = this.playArray;
    // create a local variable because this.plays can't be referenced inside
    // the observable subscription
    // const localPlayArray: Array<Play> = this.plays;
    if (localStorage.getItem(this.selectedGame.gameid)) {
      const jsonPlays = this.playsService.getPlaysFromLocal(this.selectedGame.gameid);
      jsonPlays.forEach(function (jsonPlay, i) {
        const play = new Play(jsonPlay, i);
        // console.log(play.playType);
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
        // I want this array in revers order and unshift pushes to the front of the array
        // https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
        this.plays.unshift(play);
      }, this); // Not sure I really like adding this reference here. It works but hard to follow.
    } else {
      this.playsService.getPlaysFromAPI(this.selectedGame.gameid).subscribe(result => {
        localStorage.setItem(this.selectedGame.gameid, JSON.stringify(result));
        const jsonPlays = this.playsService.getPlaysFromLocal(this.selectedGame.gameid);
        jsonPlays.forEach(function (jsonPlay, i) {
          const play = new Play(jsonPlay, i);
          // localPlayArray.push(play);
          // I want this array in revers order and unshift pushes to the front of the array
          // https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
          this.plays.unshift(play);
        }, this);
      });
    }
    // console.log(localPlayArray);
    // console.log(this.plays);
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
    switch (this._currentPlay.playType) {
      case PlayType.KickingPlay:
        const kickingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.kickingPlay.kickingPlayer.ID);
        this._currentPlay.kickingPlay.kickingPlayer = kickingPlayer;
        break;
      case PlayType.RushingPlay:
        console.log('get rushing player');
        const rushingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.rushingPlay.rushingPlayer.ID);
        this._currentPlay.rushingPlay.rushingPlayer = rushingPlayer;
        console.log('got rushing player');
        break;
      case PlayType.PassingPlay:
        console.log('get passing players');
        const passingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.passingPlay.passingPlayer.ID);
        this._currentPlay.passingPlay.passingPlayer = passingPlayer;
        if (this._currentPlay.json.passingPlay.receivingPlayer) {
          const receivingPlayer = this.activePlayersService.getPlayer(this._currentPlay.json.passingPlay.receivingPlayer.ID);
          this._currentPlay.passingPlay.receivingPlayer = receivingPlayer;
        }
        console.log('got passing players');
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
    return this._currentPlay;
  }

  // return this.plays[this.plays.length - this.currentPlayIndex - 1];
  //   }

  get playsToShow(): Array<Play> {
    return this.plays.slice(this.plays.length - this.currentPlayIndex, this.plays.length - this.currentPlayIndex + 4);
  }

  nextPlay() {
    this._currentPlay = undefined;
    this.currentPlayIndex++;
  }

  lastPlay() {
    this._currentPlay = undefined;
    this.currentPlayIndex--;
  }

}
