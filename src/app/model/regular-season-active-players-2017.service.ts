import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Player } from './Player';
import { Play } from './Play';

@Injectable({
  providedIn: 'root'
})
export class RegularSeasonActivePlayers2017Service {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('tonyleif:00password'));
  }

  // getActivePlayersFromAPI(): Observable<string> {
  //   const headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //   return this.http
  //     .get('https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/active_players.json', { headers: headers })
  //     .map((res: Response) => {
  //       localStorage.activeplayers = JSON.stringify(res.json());
  //       const allPlayers: Array<string> = res.json().activeplayers.playerentry;
  //       let playerObject: any;
  //       for (let i = 0; i < allPlayers.length; i++) {
  //         playerObject = allPlayers[i];
  //         localStorage.setItem(playerObject.player.ID + 'ap', JSON.stringify(playerObject.player));
  //       }
  //       return res.json();
  //     });
  // }

  getActivePlayersFromAPI(): Observable<Player[]> {
    const headers = new Headers();
    this.createAuthorizationHeader(headers); // &position=qb,rb,fb,wr,te,k,p
    return this.http
      .get('https://api.mysportsfeeds.com/v1.2/pull/nfl/latest/active_players.json?position=qb,rb,fb,wr,te,k', { headers: headers })
      .map((res: Response) => {
        const playerArray: Player[] = new Array<Player>();
        const allPlayers: Array<string> = res.json().activeplayers.playerentry;
        let playerObject: any;
        for (let i = 0; i < allPlayers.length; i++) {
          playerObject = allPlayers[i];
          const player = new Player(playerObject.player);
          playerArray.push(player);
        }
        return playerArray;
      });
  }

  getActivePlayersByTeamsFromAPI(awayTeam: string, homeTeam: string
    ): Observable<Player[]> {
    // console.log('getActivePlayersByTeamsFromAPI');
    const headers = new Headers();
    this.createAuthorizationHeader(headers); // &position=qb,rb,fb,wr,te,k,p
    return this.http
      .get('https://api.mysportsfeeds.com/v1.2/pull/nfl/latest/active_players.json?team=' + awayTeam + ',' + homeTeam, { headers: headers })
      .map((res: Response) => {
        // localStorage.activeplayers = JSON.stringify(res.json());
        localStorage.setItem('activeplayers' + awayTeam + '-' + homeTeam, JSON.stringify(res.json()));
        // console.log(res.json().activeplayers.playerentry);
        const playerArray: Player[] = new Array<Player>();
        const allPlayers: Array<string> = res.json().activeplayers.playerentry;
        let playerObject: any;
        for (let i = 0; i < allPlayers.length; i++) {
          playerObject = allPlayers[i];
          const player = new Player(playerObject.player);
          // console.log(player.lastName + ': ' + player.officialImageSrc);
          // console.log( player.noImageUrl);
          playerArray.push(player);
        }
        // return res.json();
        // console.log(playerArray);
        return playerArray;
      });
  }

  getPlayer(id: number): Player {
    const playerObject = new Player(JSON.parse(localStorage.getItem(id + 'ap')));
    return playerObject;
  }

}
