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

  getGamesJSON(): string {
    if (!localStorage.fullgameschedule) {
      console.log('Getting fullgameschedule from API');
      // localStorage.fullgameschedule = JSON.stringify(this.getGamesFromAPI().subscribe());
      this.getGamesFromAPI().subscribe(result => {
        console.log(result);
        localStorage.fullgameschedule = JSON.stringify(result);
      });
    } else {
      console.log('fullgameschedule was already in localStorage');
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
