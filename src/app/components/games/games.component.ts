import { Component, OnInit } from '@angular/core';
import { RegularSeasonGames2017Service } from '../../model/regular-season-games-2017.service';
import { RegularSeasonPlays2017Service } from '../../model/regular-season-plays-2017.service';
import { Play } from '../../model/play';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  selectedWeek = 0;
  selectedGameId = 0;
  // selectedGameQuerystringId: string;
  selectedGame: any = null;
  weeks: Set<number>;
  gamesJSON: string;
  games: Array<string>;
  gameJSON: string;
  playsJSON: string;
  plays: Array<string>;
  playArray: Array<Play> = [];

  constructor(private gamesService: RegularSeasonGames2017Service,
              private playsService: RegularSeasonPlays2017Service) { }

  ngOnInit() {
    this.weeks = this.gamesService.getWeeks();
    this.gamesJSON = this.gamesService.getGamesJSON();
    this.games = this.gamesService.getGamesByWeek(this.selectedWeek);
    if (this.selectedGame) {
      this.playsJSON = 'Loading...';
      this.playsJSON = JSON.stringify(this.playsService.getPlaysJSON(
        this.selectedGame.date, this.selectedGame.awayTeam.Abbreviation, this.selectedGame.homeTeam.Abbreviation));
    }
  }

  setWeek(week: number) {
    this.selectedGame = null;
    this.selectedWeek = week;
    this.games = this.gamesService.getGamesByWeek(this.selectedWeek);
  }

  setGame(id: number) {
    // console.log('setGame ' + id);
    this.selectedGameId = id;
    this.selectedGame = this.gamesService.getGame(id);
    this.gameJSON = JSON.stringify(this.selectedGame);
    this.playsJSON = 'Loading...';
    this.playsJSON = JSON.stringify(this.getPlaysJSON(
      this.selectedGame.date, this.selectedGame.awayTeam.Abbreviation, this.selectedGame.homeTeam.Abbreviation));
      // console.log(this.playsJSON);
    this.plays = this.playsService.getPlays(
      this.selectedGame.date, this.selectedGame.awayTeam.Abbreviation, this.selectedGame.homeTeam.Abbreviation);
    this.playArray = this.fillPlayArray();
    console.log(this.playArray);
  }

  fillPlayArray() {
    console.log('fillPlayArray');
    const tempPlayArray: Array<Play> = [];
    this.plays.forEach(function(jsonPlay, i) {
      // console.log('index: ' + i);
      console.log(jsonPlay);
      const play = new Play(jsonPlay, i);
      console.log(play);
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
    // console.log('showPlays:' + this.playsJSON);
    // console.log('typeof this.playsJSON' + typeof this.playsJSON);
    // console.log('!this.playsJSON ' + !this.playsJSON);
    // if (this.playsJSON) {
    //   console.log('this.playsJSON.length ' + this.playsJSON.length);
    // }
    if (!this.playsJSON || this.playsJSON.length < 5) {
      // console.log('DO NOT show plays');
      return false;
    } else {
      // console.log('show plays');
      return true;
    }
    // if (this.playsJSON !== '' && this.playsJSON !== null && this.playsJSON.length > 0) {
    //   console.log('show plays');
    //   return true;
    // } else {
    //   console.log('DO NOT show plays');
    //   return false;
    // }
  }

}
