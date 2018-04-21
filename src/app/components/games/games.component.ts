import { Component, OnInit } from '@angular/core';
import { RegularSeasonGames2017Service } from '../../model/regular-season-games-2017.service';
import { RegularSeasonPlays2017Service } from '../../model/regular-season-plays-2017.service';
import { Game } from '../../model/game';
import { Play } from '../../model/play';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  private _selectedWeek;
  private _selectedGame: Game;
  weeks: Set<number>;
  games: Array<Game>;
  plays: Array<Play> = [];
  currentPlayIndex = -1;

  constructor(private gamesService: RegularSeasonGames2017Service,
              private playsService: RegularSeasonPlays2017Service) { }

  ngOnInit() {
    this.loadSchedule();
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

  get doneLoadingSchedule(): boolean {
    return (localStorage.fullgameschedule);
  }

  set selectedWeek (weekNumber: number) {
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

  set selectedGame (value: Game) {
    if (this._selectedGame !== value) {
      // this updates the original array so the reference is not lost per
      // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
      this._selectedGame = value;
      if (value !== null) {
        this.loadPlayArray();
      }
    }
  }

  get selectedGame (): Game {
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

  loadPlayArray () {
    // console.log('loadPlayArray');
    this.plays.length = 0; // empty the array without making a new array
    // const localPlayArray: Array<Play> = this.playArray;
    // create a local variable because this.plays can't be referenced inside
    // the observable subscription
    // const localPlayArray: Array<Play> = this.plays;
    if (localStorage.getItem(this.selectedGame.gameid)) {
      const jsonPlays = this.playsService.getPlaysFromLocal(this.selectedGame.gameid);
      jsonPlays.forEach(function(jsonPlay, i) {
        const play = new Play(jsonPlay, i);
        // localPlayArray.push(play);
        // I want this array in revers order and unshift pushes to the front of the array
        // https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
        this.plays.unshift(play);
      }, this); // Not sure I really like adding this reference here. It works but hard to follow.
    } else {
      this.playsService.getPlaysFromAPI(this.selectedGame.gameid).subscribe(result => {
        localStorage.setItem(this.selectedGame.gameid, JSON.stringify(result));
        const jsonPlays = this.playsService.getPlaysFromLocal(this.selectedGame.gameid);
        jsonPlays.forEach(function(jsonPlay, i) {
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
    return this.plays[this.plays.length - this.currentPlayIndex - 1];
  }

  get playsToShow(): Array<Play> {
    return this.plays.slice(this.plays.length - this.currentPlayIndex, this.plays.length);
  }

  nextPlay() {
    this.currentPlayIndex++;
  }

  lastPlay() {
    this.currentPlayIndex--;
  }

}
