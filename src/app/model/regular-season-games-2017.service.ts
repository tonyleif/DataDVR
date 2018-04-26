import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegularSeasonGames2017Service {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('tonyleif:00password'));
  }

  getWeeks(): Set<number> {
    // console.log('getWeeks');
    const weekSet: Set<number> = new Set<number>();
    const games: any = this.getGames();
    games.forEach((game) => {
      weekSet.add(game.week);
    });
    return weekSet;
  }

  getGames(): Array<string> {
    // console.log('getGames');
    const jsonObject: any = JSON.parse(localStorage.fullgameschedule); // JSON.parse(this.getGamesJSON());
    const games: Array<string> = jsonObject.fullgameschedule.gameentry;
    return games;
  }

  // getGamesJSON(): string {
  //   console.log('getGamesJSON here');
  //   if (!localStorage.fullgameschedule) {
  //     // console.log('Getting fullgameschedule from API');
  //     // localStorage.fullgameschedule = JSON.stringify(this.getGamesFromAPI().subscribe());
  //     this.getScheduleFromAPI().subscribe(result => {
  //       // console.log(result);
  //       localStorage.fullgameschedule = JSON.stringify(result);
  //       // console.log('getGamesJSON localStorage loaded');
  //     });
  //   }
  //   // console.log('getGamesJSON return');
  //   return localStorage.fullgameschedule;
  // }

  getGamesByWeek(week: number): Array<any> {
    const jsonObject: any = JSON.parse(localStorage.fullgameschedule); // JSON.parse(this.getGamesJSON());
    const allGames: Array<string> = jsonObject.fullgameschedule.gameentry;
    const games: Array<string> = new Array<string>();
    allGames.forEach(game => {
      // console.log(game);
      const gameObject: any = game;
      if (gameObject.week === week) {
        games.push(gameObject);
      }
    });
    return games;
  }

  getScheduleFromAPI(): Observable<string> {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    // A future enhancement for allowing user to select any season is needed here.
    // Generally speaking, users will only want the most recent season but
    // I'd like to give them the option
    return this.http
      .get('https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/full_game_schedule.json', {headers: headers})
      .map((res: Response) => {
        localStorage.fullgameschedule = JSON.stringify(res.json());
        return res.json();
      });
     
  }

  getGame(id: number): any {
    // console.log('getGame(' + id + ')');
    const jsonObject: any = JSON.parse(localStorage.fullgameschedule); // JSON.parse(this.getGamesJSON());
    const allGames: Array<string> = jsonObject.fullgameschedule.gameentry;
    // const game: string;
    let gameObject: any;
    // allGames.forEach(game => {
    //   console.log(game);
    //   gameObject = game;
    //   if (gameObject.id === id) {
    //     console.log(gameObject.id);
    //     return gameObject;
    //   }
    //   console.log('Should never see this');
    // });
    for (let i = 0; i < allGames.length; i++) {
      gameObject = allGames[i];
      if (gameObject.id === id) {
        console.log(gameObject.id);
        return gameObject;
      }
    }
    return null;
  }

}
