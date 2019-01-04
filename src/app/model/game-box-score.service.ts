import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GameBoxScore } from './GameBoxScore';

@Injectable()
export class GameBoxScoreService {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('tonyleif:00password'));
  }

  getBoxScoreFromAPI(gameid: string): Observable<string> {
    const getUrl: string = 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/game_boxscore.json?' +
    'playerstats=Att,Yds,TD,Int,Fum,Fumbles,Lost,OppRec&' +
    'gameid=' + gameid;
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http
      .get(getUrl, {headers: headers})
      .map((res: Response) => res.json());
  }

  getBoxScoreFromLocal(gameid: string): GameBoxScore {
    const jsonObject: any = JSON.parse(localStorage.getItem('boxscore-' + gameid));
    const box: GameBoxScore = new GameBoxScore(jsonObject);
    return box;
  }

}
