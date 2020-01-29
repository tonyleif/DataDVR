import { Player } from './Player';
import { PlayersStats } from './PlayersStats';
// import { RosterPlayer } from './RosterPlayer';

export class Roster {
    json: any;
    // players: Player[] = [];
    // rosterPlayers: RosterPlayer[] = [];
    startingQB: Player;
    startingRB1: Player;
    startingRB2: Player;
    startingWR1: Player;
    startingWR2: Player;
    startingTE: Player;
    startingK: Player;
    startingDST: Player;
    reserves: Player[];

    constructor(json: any = null) {
        this.json = json;
        if (json !== null) {
            const jsonObject: any = JSON.parse(json);
            this.startingQB = jsonObject.startingQB;
            this.startingRB1 = jsonObject.startingRB1;
            this.startingRB2 = jsonObject.startingRB2;
            this.startingWR1 = jsonObject.startingWR1;
            this.startingWR2 = jsonObject.startingWR2;
            this.startingTE = jsonObject.startingTE;
            this.startingK = jsonObject.startingK;
            this.startingDST = jsonObject.startingDST;
            this.reserves = jsonObject.reserves;
        }
    }

    // loadWatchedBoxScores() {
    //     this.qbsWatchedThisWeekStats = [];
    //     this.rbsWatchedThisWeekStats = [];
    //     this.wrsWatchedThisWeekStats = [];
    //     this.tesWatchedThisWeekStats = [];
    //     this.games.forEach(g => {
    //       if (g.watched) {
    //         const box: GameBoxScore = this.getBoxScore(g.gameid);
    //         box.awayPlayerStatsSet.forEach(playerStats => {
    //           if (playerStats.fantasyPoints > 0) {
    //             switch (playerStats.player.position) {
    //               case 'QB':
    //                 this.qbsWatchedThisWeekStats.push(playerStats);
    //                 break;
    //               case 'RB':
    //               case 'FB':
    //                 this.rbsWatchedThisWeekStats.push(playerStats);
    //                 break;
    //               case 'WR':
    //                 this.wrsWatchedThisWeekStats.push(playerStats);
    //                 break;
    //               case 'TE':
    //                 this.tesWatchedThisWeekStats.push(playerStats);
    //                 break;
    //             }
    //           }
    //         });
    //         box.homePlayerStatsSet.forEach(playerStats => {
    //           if (playerStats.fantasyPoints > 0) {
    //             switch (playerStats.player.position) {
    //               case 'QB':
    //                 this.qbsWatchedThisWeekStats.push(playerStats);
    //                 break;
    //               case 'RB':
    //               case 'FB':
    //                 this.rbsWatchedThisWeekStats.push(playerStats);
    //                 break;
    //               case 'WR':
    //                 this.wrsWatchedThisWeekStats.push(playerStats);
    //                 break;
    //               case 'TE':
    //                 this.tesWatchedThisWeekStats.push(playerStats);
    //                 break;
    //             }
    //           }
    //         });
    //       }
    //     });
    //     GamesComponent.sortByFantasyPoints(this.qbsWatchedThisWeekStats);
    //     GamesComponent.sortByFantasyPoints(this.rbsWatchedThisWeekStats);
    //     GamesComponent.sortByFantasyPoints(this.wrsWatchedThisWeekStats);
    //     GamesComponent.sortByFantasyPoints(this.tesWatchedThisWeekStats);
    //     GamesComponent.sortByFantasyPoints(this.seasonPlayersStats.playersStats);
    //   }

    addPlayer(newPlayer: Player) {
        switch (newPlayer.position) {
            case 'QB':
                if (!this.startingQB) {
                    this.startingQB = newPlayer;
                } else {
                    this.reserves.push(newPlayer);
                }
                break;
            case 'RB':
            case 'FB':
                if (!this.startingRB1) {
                    this.startingRB1 = newPlayer;
                } else {
                    if (!this.startingRB2) {
                        this.startingRB2 = newPlayer;
                    } else {
                        this.reserves.push(newPlayer);
                    }
                }
                break;
            case 'WR':
                if (!this.startingWR1) {
                    this.startingWR1 = newPlayer;
                } else {
                    if (!this.startingWR2) {
                        this.startingWR2 = newPlayer;
                    } else {
                        this.reserves.push(newPlayer);
                    }
                }
                break;
            case 'TE':
                if (!this.startingTE) {
                    this.startingTE = newPlayer;
                } else {
                    this.reserves.push(newPlayer);
                }
                break;
            case 'K':
                if (!this.startingK) {
                    this.startingK = newPlayer;
                } else {
                    this.reserves.push(newPlayer);
                }
                break;
            case 'DST':
                if (!this.startingDST) {
                    this.startingDST = newPlayer;
                } else {
                    this.reserves.push(newPlayer);
                }
                break;
        }
    }
}
