import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegularSeasonPlays2017Service {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('tonyleif:00password'));
  }

  getPlaysJSON(dateWithHyphens: string, awayAbbr: string, homeAbbr: string): string {
    // const dateNoHyphens: string = dateWithHyphens.replace('-', '');
    const dateNoHyphens: string =  dateWithHyphens.split('-').join('');
    const gameid: string = dateNoHyphens + '-' + awayAbbr + '-' + homeAbbr;
    if (!localStorage.getItem(gameid)) {
      // console.log('getPlaysJSON: Getting plays for ' + gameid + ' from API');
      // localStorage.fullgameschedule = JSON.stringify(this.getGamesFromAPI().subscribe());
      this.getPlaysFromAPI(gameid).subscribe(result => {
        // console.log(result);
        localStorage.setItem(gameid, JSON.stringify(result));
      });
    } else {
      // console.log('getPlaysJSON: Got it from local storage');
    }
    // console.log('getPlaysJSON: this should be LAST');
    return localStorage.getItem(gameid);
  }

  getPlaysJSONById(gameid: string): string {
    // console.log('getPlaysJSONById');
    if (!localStorage.getItem(gameid)) {
      // console.log('getPlaysJSON: Getting plays for ' + gameid + ' from API');
      // localStorage.fullgameschedule = JSON.stringify(this.getGamesFromAPI().subscribe());
      this.getPlaysFromAPI(gameid).subscribe(result => {
        // console.log(result);
        localStorage.setItem(gameid, JSON.stringify(result));
      });
    } else {
      // console.log('getPlaysJSON: Got it from local storage');
    }
    // console.log('getPlaysJSON: this should be LAST');
    return localStorage.getItem(gameid);
  }

  getPlaysFromAPI(gameid: string): Observable<string> {
    const getUrl: string = 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/game_playbyplay.json?gameid=' + gameid;
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http
      .get(getUrl, {headers: headers})
      .map((res: Response) => res.json());
  }

  getPlays(dateWithHyphens: string, awayAbbr: string, homeAbbr: string): Array<any> {
    // console.log('getPlays');
    const jsonObject: any = JSON.parse(this.getPlaysJSON(dateWithHyphens, awayAbbr, homeAbbr));
    // console.log('jsonObject.gameplaybyplay.plays string: ' + JSON.stringify(jsonObject.gameplaybyplay.plays));
    const allPlays: Array<string> = jsonObject.gameplaybyplay.plays.play;
    const plays: Array<string> = new Array<string>();
    allPlays.forEach(play => {
      // console.log(play);
      plays.push(play);
    });
    return plays;
  }

  getPlaysById(gameid: string): Array<any> {
    // console.log('getPlaysById');
    const jsonObject: any = JSON.parse(this.getPlaysJSONById(gameid));
    // console.log('jsonObject.gameplaybyplay.plays string: ' + JSON.stringify(jsonObject.gameplaybyplay.plays));
    // console.log(jsonObject);
    const allPlays: Array<string> = jsonObject.gameplaybyplay.plays.play;
    const plays: Array<string> = new Array<string>();
    allPlays.forEach(play => {
      // console.log(play);
      plays.push(play);
    });
    return plays;
  }

  getPlaysFromLocal(gameid: string): Array<any> {
    // console.log('getPlaysFromLocal');
    const jsonObject: any = JSON.parse(localStorage.getItem(gameid));
    // console.log('jsonObject.gameplaybyplay.plays string: ' + JSON.stringify(jsonObject.gameplaybyplay.plays));
    const allPlays: Array<string> = jsonObject.gameplaybyplay.plays.play;
    const plays: Array<string> = new Array<string>();
    allPlays.forEach(play => {
      // console.log(play);
      plays.push(play);
    });
    return plays;
  }

}
