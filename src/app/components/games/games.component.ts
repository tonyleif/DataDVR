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
  selectedGameId = 0;
  // selectedGameQuerystringId: string;
  private _selectedGame: Game;
  weeks: Set<number>;
  gamesJSON: string;
  // games: Array<string>;
  gameJSON: string;
  playsJSON: string;
  plays: Array<string>;
  playArray: Array<Play> = [];
  currentPlayId: number;

  constructor(private gamesService: RegularSeasonGames2017Service,
              private playsService: RegularSeasonPlays2017Service) { }

  ngOnInit() {
    this.weeks = this.gamesService.getWeeks();
    console.log(this.weeks);
    // this.gamesJSON = this.gamesService.getGamesJSON();
    // if (this.selectedGame) {
    //   this.playsJSON = 'Loading...';
    //   // this.playsJSON = JSON.stringify(this.playsService.getPlaysJSON(
    //   //   this.selectedGame.date, this.selectedGame.awayTeam.Abbreviation, this.selectedGame.homeTeam.Abbreviation));
    // }
  }

  // setWeek(week: number) {
  //   console.log('week ' + week);
  //   this.selectedGame = null;
  //   this.selectedWeek = week;
  //   this.games = this.gamesService.getGamesByWeek(this.selectedWeek);
  // }

  set selectedWeek (weekNumber: number) {
    // console.log('set selectedWeek ' + weekNumber);
    if (this._selectedWeek !== weekNumber) {
      this.selectedGame = null;
      // this.playArray = null;
    }
    if (weekNumber > 0) {
      this.games = this.gamesService.getGamesByWeek(weekNumber);
    } else {
      // console.log('no weekNumber');
      this.games = null;
    }
    this._selectedWeek = weekNumber;
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

  set selectedGame (value: Game) {
    // console.log('set selectedGame ' + JSON.stringify(value));
    // if (value !== null) {
    //   this.playArray = this.fillPlayArray(value.gameid);
    //   console.log(this.playArray);
    // } else {
    //   this.playArray = null;
    // }
    this._selectedGame = value;
  }

  get selectedGame (): Game {
    return this._selectedGame;
  }

  get playList(): Array<Play> {
    // console.log('playList');
    // this.selectedGame = null;
    // return this.fillPlayArray();
    return this.playArray;
  }

  setGame(id: number) {
    console.log('setGame ' + id);
    this.selectedGameId = id;
    this.selectedGame = new Game(this.gamesService.getGame(id));
    // this.gameJSON = JSON.stringify(this.selectedGame);
    // this.playsJSON = 'Loading...';
    // this.playsJSON = JSON.stringify(this.getPlaysJSON(
    //   this.selectedGame.date, this.selectedGame.awayTeam.Abbreviation, this.selectedGame.homeTeam.Abbreviation));
      // console.log(this.playsJSON);
    // this.plays = this.playsService.getPlays(
    //   this.selectedGame.date, this.selectedGame.awayTeam.Abbreviation, this.selectedGame.homeTeam.Abbreviation);
    this.playArray = this.fillPlayArray();
    // console.log(this.playArray);
  }

  fillPlayArray() {
    console.log('fillPlayArray');
    this.plays = this.playsService.getPlaysById(this.selectedGame.gameid);
    // this.plays = this.playsService.getPlaysById(gameid);
    const tempPlayArray: Array<Play> = [];
    this.plays.forEach(function(jsonPlay, i) {
      // console.log('index: ' + i);
      // console.log(jsonPlay);
      const play = new Play(jsonPlay, i);
      // console.log(play);
      tempPlayArray.push(play);
    });
    return tempPlayArray;
  }

  getPlaysJSON(dateWithHyphens: string, awayAbbr: string, homeAbbr: string): string {
    // const dateNoHyphens: string = dateWithHyphens.replace('-', '');
    const dateNoHyphens: string =  dateWithHyphens.split('-').join('');
    const gameid: string = dateNoHyphens + '-' + awayAbbr + '-' + homeAbbr;
    if (!localStorage.getItem(gameid)) {
      this.playsJSON = 'Loading...';
      // console.log('getPlaysJSON: Getting plays for ' + gameid + ' from API');
      // localStorage.fullgameschedule = JSON.stringify(this.getGamesFromAPI().subscribe());
      this.playsService.getPlaysFromAPI(gameid).subscribe(result => {
        // console.log(result);
        localStorage.setItem(gameid, JSON.stringify(result));
        this.playsJSON = JSON.stringify(result);
      });
    } else {
      // console.log('getPlaysJSON: Got it from local storage');
    }
    // console.log('getPlaysJSON: this should be LAST');
    return localStorage.getItem(gameid);
  }

  get showPlays(): boolean {
    // if (!this.playsJSON || this.playsJSON.length < 5) {
    //   // console.log('DO NOT show plays');
    //   return false;
    // } else {
    //   // console.log('show plays');
    //   return true;
    // }
    return (this.playArray.length > 0);
  }

  get loadingPlays(): boolean {
    return (this.selectedGame && this.playArray.length === 0);
  }

getSchedule() {
  
}

}
