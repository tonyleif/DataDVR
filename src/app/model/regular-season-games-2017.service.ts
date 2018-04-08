import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegularSeasonGames2017Service {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('tonyleif:00bone11'));
  }

  getWeeks(): Set<number> {
    const weekSet: Set<number> = new Set<number>();
    const games: any = this.getGames();
    games.forEach((game) => {
      weekSet.add(game.week);
    });
    return weekSet;
  }

  getGames(): Array<string> {
    const jsonObject: any = JSON.parse(this.getGamesJSON());
    const games: Array<string> = jsonObject.fullgameschedule.gameentry;
    return games;
  }

  getGamesByWeek(week: number): Array<any> {
    const jsonObject: any = JSON.parse(this.getGamesJSON());
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

  getGamesJSON(): string {
    if (!localStorage.fullgameschedule) {
      console.log('Getting fullgameschedule from API');
      // localStorage.fullgameschedule = JSON.stringify(this.getGamesFromAPI().subscribe());
      this.getGamesFromAPI().subscribe(result => {
        console.log(result);
        localStorage.fullgameschedule = JSON.stringify(result);
      });
    }
    return localStorage.fullgameschedule;
  }

  getGamesFromAPI(): Observable<string> {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http
      .get('https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/full_game_schedule.json', {headers: headers})
      .map((res: Response) => res.json());
  }

}
