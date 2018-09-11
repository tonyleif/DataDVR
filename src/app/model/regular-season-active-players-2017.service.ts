import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Player } from './Player';
import { Play } from './Play';

@Injectable()
export class RegularSeasonActivePlayers2017Service {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('tonyleif:00password'));
  }

  getActivePlayersFromAPI(): Observable<string> {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http
      .get('https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/active_players.json', { headers: headers })
      .map((res: Response) => {
        localStorage.activeplayers = JSON.stringify(res.json());
        const allPlayers: Array<string> = res.json().activeplayers.playerentry;
        let playerObject: any;
        for (let i = 0; i < allPlayers.length; i++) {
          playerObject = allPlayers[i];
          localStorage.setItem(playerObject.player.ID + 'ap', JSON.stringify(playerObject.player));
        }
        return res.json();
      });
  }

  getPlayer(id: number): Player {
    // Commented out but left to show work. This way was slow
    // const jsonObject: any = JSON.parse(localStorage.activeplayers);
    // const allPlayers: Array<string> = jsonObject.activeplayers.playerentry;
    // let playerObject: any;
    const playerObject = new Player(JSON.parse(localStorage.getItem(id + 'ap')));
    return playerObject;
  }

}
