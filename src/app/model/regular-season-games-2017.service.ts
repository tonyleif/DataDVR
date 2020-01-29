import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Game } from './Game';

@Injectable({
  providedIn: 'root'
})
export class RegularSeasonGames2017Service {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    // Is there a way to secure this information better?
    headers.append('Authorization', 'Basic ' +
      btoa('tonyleif:00password'));
  }

  getWeeks(): Set<number> {
    // I get the weeks from the schedule because even though the season has 17 weeks,
    // I only want to show the weeks that are in the data. So if we've just completed
    // week 10, only show 10 weeks.
    const weekSet: Set<number> = new Set<number>();
    const games: any = this.getGames();
    games.forEach((game) => {
      weekSet.add(game.week);
    });
    return weekSet;
  }

  getGames(): Array<string> {
    const jsonObject: any = JSON.parse(localStorage.fullgameschedule); // JSON.parse(this.getGamesJSON());
    const games: Array<string> = jsonObject.fullgameschedule.gameentry;
    return games;
  }

  getGamesByWeek(week: number): Array<any> {
    // console.log('getGamesByWeek');
    const jsonObject: any = JSON.parse(localStorage.getItem('fullgameschedule')); // JSON.parse(this.getGamesJSON());
    // console.log(jsonObject);
    const allGames: Array<string> = jsonObject.fullgameschedule.gameentry;
    const games: Game[] = new Array<Game>();
    allGames.forEach(game => {
      // console.log(game);
      const gameObject: Game = new Game(game);
      // console.log(gameObject.week + '===' + week + ': ' + (gameObject.week == week));
      // console.log(gameObject.watched);
      if (gameObject.week == week) {
        // console.log('pushing');
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
      .get('https://api.mysportsfeeds.com/v1.2/pull/nfl/2019-regular/full_game_schedule.json', {headers: headers})
      .map((res: Response) => {
        localStorage.fullgameschedule = JSON.stringify(res.json());
        return res.json();
      });
  }

  getGame(id: number): any {
    const jsonObject: any = JSON.parse(localStorage.fullgameschedule); // JSON.parse(this.getGamesJSON());
    const allGames: Array<string> = jsonObject.fullgameschedule.gameentry;
    let gameObject: any;
    for (let i = 0; i < allGames.length; i++) {
      gameObject = allGames[i];
      if (gameObject.id === id) {
        return gameObject;
      }
    }
    return null;
  }

}
