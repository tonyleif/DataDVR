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
    // console.log('getActivePlayersFromAPI');
    const headers = new Headers();
    // console.log('getActivePlayersFromAPI: headers initialized');
    this.createAuthorizationHeader(headers);
    // console.log('getActivePlayersFromAPI: headers created');
    return this.http
      .get('https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/active_players.json', { headers: headers })
      .map((res: Response) => {
        // console.log('got response from active players api');
        // console.log(res.json());
        localStorage.activeplayers = JSON.stringify(res.json());
        const allPlayers: Array<string> = res.json().activeplayers.playerentry;
        let playerObject: any;
        for (let i = 0; i < allPlayers.length; i++) {
          playerObject = allPlayers[i];
          localStorage.setItem(playerObject.player.ID + 'ap', JSON.stringify(playerObject.player));
        }
        // console.log(localStorage.activeplayers);
        return res.json();
      });
  }

  getPlayer(id: number): Player {
    // console.log('getPlayer(' + id + ')');
    // console.log(localStorage.activeplayers);
    const jsonObject: any = JSON.parse(localStorage.activeplayers); // JSON.parse(this.getGamesJSON());
    const allPlayers: Array<string> = jsonObject.activeplayers.playerentry;
    // console.log(allPlayers[0]);
    // console.log(allPlayers[0].player.ID);
    // console.log('allPlayers.length: ' + allPlayers.length);
    let playerObject: any;
    // playerObject = JSON.parse(JSON.stringify(allPlayers[0]));
    // playerObject = allPlayers[0];
    // console.log(playerObject.player.ID);
    // console.log(localStorage.getItem(id + 'ap'));
    playerObject = new Player(JSON.parse(localStorage.getItem(id + 'ap')));
    return playerObject;

    // for (let i = 0; i < allPlayers.length; i++) {
    //   playerObject = allPlayers[i];
    //   // console.log(playerObject.ID);
    //   if (playerObject.player.ID === id) {
    //     // console.log('found him');
    //     // console.log('in here' + playerObject);
    //     return new Player(playerObject.player);
    //   }
    // }
    // return null;
  }

}
