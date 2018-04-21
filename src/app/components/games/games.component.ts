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
  private _gamesOfSelectedWeek;
  private _selectedGame: Game;
  weeks: Set<number>;
  // gamesJSON: string;
  // gameJSON: string;
  // playsJSON: string;
  plays: Array<string>;
  playArray: Array<Play> = [];
  currentPlayId: number;

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
    // console.log('set selectedWeek ' + weekNumber);
    if (this._selectedWeek !== weekNumber) {
      this.selectedGame = null;
      // this updates the original array so the reference is not lost per
      // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
      this.playArray.length = 0;
    }
    if (weekNumber > 0) {
      this.games = this.gamesService.getGamesByWeek(weekNumber);
    } else {
      // console.log('no weekNumber');
      this.games = null;
    }
    this._selectedWeek = weekNumber;
  }

  set selectedGame (value: Game) {
    // console.log('set selectedGame ' + JSON.stringify(value));
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
    console.log('setGame ' + id);
    // this.selectedGameId = id;
    this.selectedGame = new Game(this.gamesService.getGame(id));
  }

  loadPlayArray () {
    console.log('loadPlayArray');
    this.playArray.length = 0;
    const localPlayArray: Array<Play> = this.playArray;
    if (localStorage.getItem(this.selectedGame.gameid)) {
      this.plays = this.playsService.getPlaysFromLocal(this.selectedGame.gameid);
      this.plays.forEach(function(jsonPlay, i) {
        const play = new Play(jsonPlay, i);
        localPlayArray.push(play);
      });
    } else {
      this.playsService.getPlaysFromAPI(this.selectedGame.gameid).subscribe(result => {
        // console.log(result);
        localStorage.setItem(this.selectedGame.gameid, JSON.stringify(result));
        this.plays = this.playsService.getPlaysFromLocal(this.selectedGame.gameid);
        this.plays.forEach(function(jsonPlay, i) {
          const play = new Play(jsonPlay, i);
          localPlayArray.push(play);
        });
      });
    }
    // this.plays.forEach(function(jsonPlay, i) {
    //   const play = new Play(jsonPlay, i);
    //   tempPlayArray.push(play);
    // });
    // return tempPlayArray;
  }

  set games(value: Array<Game>) {
    // console.log('set games');
    // this.selectedGame = null;
    this._gamesOfSelectedWeek = value;
    // return this.gamesService.getGamesByWeek(this.selectedWeek);
  }

  get games(): Array<Game> {
    // console.log('get games');
    // this.selectedGame = null;
    // return this.gamesService.getGamesByWeek(this.selectedWeek);
    return this._gamesOfSelectedWeek;
  }

  get selectedWeek() {
    // console.log('get selectedWeek ' + this._selectedWeek);
    return this._selectedWeek;
  }

  get playList(): Array<Play> {
    // console.log('playList');
    // this.selectedGame = null;
    // return this.fillPlayArray();
    return this.playArray;
  }

  // fillPlayArray() {
  //   console.log('fillPlayArray');
  //   this.plays = this.playsService.getPlaysById(this.selectedGame.gameid);
  //   // this.plays = this.playsService.getPlaysById(gameid);
  //   const tempPlayArray: Array<Play> = [];
  //   this.plays.forEach(function(jsonPlay, i) {
  //     // console.log('index: ' + i);
  //     // console.log(jsonPlay);
  //     const play = new Play(jsonPlay, i);
  //     // console.log(play);
  //     tempPlayArray.push(play);
  //   });
  //   return tempPlayArray;
  // }

  // getPlaysJSON(dateWithHyphens: string, awayAbbr: string, homeAbbr: string): string {
  //   // const dateNoHyphens: string = dateWithHyphens.replace('-', '');
  //   const dateNoHyphens: string =  dateWithHyphens.split('-').join('');
  //   const gameid: string = dateNoHyphens + '-' + awayAbbr + '-' + homeAbbr;
  //   if (!localStorage.getItem(gameid)) {
  //     this.playsJSON = 'Loading...';
  //     // console.log('getPlaysJSON: Getting plays for ' + gameid + ' from API');
  //     // localStorage.fullgameschedule = JSON.stringify(this.getGamesFromAPI().subscribe());
  //     this.playsService.getPlaysFromAPI(gameid).subscribe(result => {
  //       // console.log(result);
  //       localStorage.setItem(gameid, JSON.stringify(result));
  //       this.playsJSON = JSON.stringify(result);
  //     });
  //   } else {
  //     // console.log('getPlaysJSON: Got it from local storage');
  //   }
  //   // console.log('getPlaysJSON: this should be LAST');
  //   return localStorage.getItem(gameid);
  // }

  get showPlays(): boolean {
    return (this.playArray.length > 0);
  }

  get loadingPlays(): boolean {
    return (this.selectedGame && this.playArray.length === 0);
  }

}
