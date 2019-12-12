import { Component, OnInit } from '@angular/core';

// import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
// import { NgxTypeaheadModule } from 'ngx-typeahead';
// import { NgbdTypeaheadBasic } from '../typeahead-basic/typeahead-basic';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { RegularSeasonActivePlayers2017Service } from '../../model/regular-season-active-players-2017.service';
import { Player } from '../../model/Player';
import { TeamService } from '../../model/team.service';
import { Team } from '../../model/Team';
import { Roster } from '../../model/roster';
import { PlayerStats } from '../../model/PlayerStats';
import { Scoreboard } from '../../model/Scoreboard';
import { Game } from '../../model/Game';
import { RegularSeasonGames2017Service } from '../../model/regular-season-games-2017.service';
import { GameBoxScore } from '../../model/GameBoxScore';
import { GameBoxScoreService } from '../../model/game-box-score.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {
  // Creating lineup properties
  activePlayers: Array<Player> = [];
  myLineupIds: Set<Number>;
  myTeam: Array<Player> = [];
  theirTeam: Array<Player> = [];
  myRoster: Roster;
  theirRoster: Roster;
  selectedPlayer: Player;
  // Creating scoreboard properties
  games: Game[];
  playersWatchedThisWeekStats: Array<PlayerStats> = [];
  scoreboard: Scoreboard;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.activePlayers.filter(p => p.fullName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: { fullName: string }) => x.fullName;

  constructor(private activePlayersService: RegularSeasonActivePlayers2017Service, private teamService: TeamService,
    private gamesService: RegularSeasonGames2017Service, private gameBoxScoreService: GameBoxScoreService) {
  }

  ngOnInit() {
    this.loadPlayerArray();
    // if (localStorage.getItem('myTeam')) {
    //   const myTeamJson = JSON.parse(localStorage.getItem('myTeam'));
    //   myTeamJson.forEach(element => {
    //     const player = new Player(element);
    //     this.myTeam.push(player);
    //   });
    // }
    if (localStorage.getItem('myRoster')) {
      const myRosterJson = localStorage.getItem('myRoster');
      this.myRoster = new Roster(myRosterJson);
    } else {
      this.myRoster = new Roster();
    }
    // if (localStorage.getItem('theirTeam')) {
    //   const theirTeamJson = JSON.parse(localStorage.getItem('theirTeam'));
    //   theirTeamJson.forEach(element => {
    //     const player = new Player(element);
    //     this.theirTeam.push(player);
    //   });
    // }
    if (localStorage.getItem('theirRoster')) {
      const theirRosterJson = localStorage.getItem('theirRoster');
      this.theirRoster = new Roster(theirRosterJson);
    } else {
      this.theirRoster = new Roster();
    }
    this.loadWatchedBoxScores();
    this.scoreboard = new Scoreboard(this.myRoster, this.theirRoster, this.playersWatchedThisWeekStats);
  }

  loadPlayerArray() {
    // console.log('loadPlayerArray');
    this.activePlayers.length = 0; // empty the array without making a new array
    // create a local variable because this.players can't be referenced inside the observable subscription
    this.activePlayersService.getActivePlayersFromAPI().subscribe(result => {
      const playerArray = result;
      for (let i = 0; i < playerArray.length; i++) {
        this.activePlayers.push(playerArray[i]);
      }
      const allTeams: Team[] = this.teamService.getTeams();
      const activePlayersRef = this.activePlayers;
      allTeams.forEach(function (team) {
        const teamPlayer = new Player();
        teamPlayer.firstName = team.City;
        teamPlayer.lastName = team.Name;
        teamPlayer.position = 'DST';
        teamPlayer.officialImageSrc = team.officialImageSrc;
        activePlayersRef.push(teamPlayer);
      });
    });
  }

  loadWatchedBoxScores() {
    console.log('loadWatchedBoxScores');
    this.playersWatchedThisWeekStats = [];
    const selectedWeek: number = Number(localStorage.getItem('selectedWeek'));
    console.log('selectedWeek: ' + selectedWeek);
    if (selectedWeek > 0) {
      this.games = this.gamesService.getGamesByWeek(selectedWeek);
      console.log('this.games.length: ' + this.games.length);
    } else {
      this.games = null;
    }

    this.games.forEach(g => {
      if (g.watched) {
        const box: GameBoxScore = this.getBoxScore(g.gameid);
        box.awayPlayerStatsSet.forEach(playerStats => {
          if (playerStats.fantasyPoints > 0) {
            switch (playerStats.player.position) {
              case 'QB':
                this.playersWatchedThisWeekStats.push(playerStats);
                break;
              case 'RB':
              case 'FB':
                this.playersWatchedThisWeekStats.push(playerStats);
                break;
              case 'WR':
                this.playersWatchedThisWeekStats.push(playerStats);
                break;
              case 'TE':
                this.playersWatchedThisWeekStats.push(playerStats);
                break;
            }
          }
        });
        box.homePlayerStatsSet.forEach(playerStats => {
          if (playerStats.fantasyPoints > 0) {
            switch (playerStats.player.position) {
              case 'QB':
                this.playersWatchedThisWeekStats.push(playerStats);
                break;
              case 'RB':
              case 'FB':
                this.playersWatchedThisWeekStats.push(playerStats);
                break;
              case 'WR':
                this.playersWatchedThisWeekStats.push(playerStats);
                break;
              case 'TE':
                this.playersWatchedThisWeekStats.push(playerStats);
                break;
            }
          }
        });
      }
    });
  }

  getBoxScore(gameid): GameBoxScore {
    if (localStorage.getItem('boxscore-' + gameid)) {
      return this.gameBoxScoreService.getBoxScoreFromLocal(gameid);
    } else {
      this.gameBoxScoreService.getBoxScoreFromAPI(gameid).subscribe(result => {
        localStorage.setItem('boxscore-' + gameid, JSON.stringify(result));
        return this.gameBoxScoreService.getBoxScoreFromLocal(gameid);
      });
    }
  }

  get myTeamQB(): Player {
    const myQBs: Player[] = [];
    this.myTeam.forEach(player => {
      if (player.position === 'QB') {
        myQBs.push(player);
      }
    });
    return myQBs[0];
  }

  get theirTeamQB(): Player {
    const theirQBs: Player[] = [];
    this.theirTeam.forEach(player => {
      if (player.position === 'QB') {
        theirQBs.push(player);
      }
    });
    return theirQBs[0];
  }

  get myTeamRBs(): Player[] {
    const myRBs: Player[] = [];
    this.myTeam.forEach(player => {
      if (player.position === 'RB' || player.position === 'FB') {
        myRBs.push(player);
      }
    });
    return myRBs;
  }

  get theirTeamRBs(): Player[] {
    const theirRBs: Player[] = [];
    this.theirTeam.forEach(player => {
      if (player.position === 'RB' || player.position === 'FB') {
        theirRBs.push(player);
      }
    });
    return theirRBs;
  }

  get myTeamWRs(): Player[] {
    const myWRs: Player[] = [];
    this.myTeam.forEach(player => {
      if (player.position === 'WR') {
        myWRs.push(player);
      }
    });
    return myWRs;
  }

  get theirTeamWRs(): Player[] {
    const theirWRs: Player[] = [];
    this.theirTeam.forEach(player => {
      if (player.position === 'WR') {
        theirWRs.push(player);
      }
    });
    return theirWRs;
  }

  get myTeamTE(): Player {
    const myTEs: Player[] = [];
    this.myTeam.forEach(player => {
      if (player.position === 'TE') {
        myTEs.push(player);
      }
    });
    return myTEs[0];
  }

  get theirTeamTE(): Player {
    const theirTEs: Player[] = [];
    this.theirTeam.forEach(player => {
      if (player.position === 'TE') {
        theirTEs.push(player);
      }
    });
    return theirTEs[0];
  }

  get myTeamK(): Player {
    const myKs: Player[] = [];
    this.myTeam.forEach(player => {
      if (player.position === 'K') {
        myKs.push(player);
      }
    });
    return myKs[0];
  }

  get theirTeamK(): Player {
    const theirKs: Player[] = [];
    this.theirTeam.forEach(player => {
      if (player.position === 'K') {
        theirKs.push(player);
      }
    });
    return theirKs[0];
  }

  get myTeamDST(): Player {
    const myDSTs: Player[] = [];
    this.myTeam.forEach(player => {
      if (player.position === 'DST') {
        myDSTs.push(player);
      }
    });
    return myDSTs[0];
  }

  get theirTeamDST(): Player {
    const theirDSTs: Player[] = [];
    this.theirTeam.forEach(player => {
      if (player.position === 'DST') {
        theirDSTs.push(player);
      }
    });
    return theirDSTs[0];
  }

  addToMyTeam() {
    this.myTeam.push(this.selectedPlayer);
    localStorage.setItem('myTeam', JSON.stringify(this.myTeam));
    this.myRoster.addPlayer(this.selectedPlayer);
    localStorage.setItem('myRoster', JSON.stringify(this.myRoster));
    // this.myRoster.players.push(this.selectedPlayer);
  }

  addToTheirTeam() {
    this.theirTeam.push(this.selectedPlayer);
    localStorage.setItem('theirTeam', JSON.stringify(this.theirTeam));
    this.theirRoster.addPlayer(this.selectedPlayer);
    localStorage.setItem('theirRoster', JSON.stringify(this.theirRoster));
  }

}
