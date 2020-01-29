import { Player } from './Player';
import { PlayerStats } from './PlayerStats';
import { Roster } from './roster';
// import { PlayersStats } from './PlayersStats';

export class Scoreboard {

    // playersWatchedThisWeekStats: PlayerStats[];

    constructor(private myRoster: Roster, private theirRoster: Roster, private playersWatchedThisWeekStats: PlayerStats[]) {}

    onNgInit() {

    }

    get myQBScore(): number {
        console.log('myQBScore');
        console.log(JSON.stringify(this.myRoster.startingQB));
        const qbStats = this.findPlayerStats(this.myRoster.startingQB);
        console.log(JSON.stringify(qbStats));
        return qbStats.fantasyPoints;
    }

    get theirQBScore(): number {
        const qbStats = this.findPlayerStats(this.theirRoster.startingQB);
        return qbStats.fantasyPoints;
    }

    findPlayerStats(player: Player): PlayerStats {
        console.log('findPlayerStats');
        console.log(this.playersWatchedThisWeekStats.length);
        let playerStats: PlayerStats;
        this.playersWatchedThisWeekStats.forEach(ps => {
            if (ps.player.id === player.id) {
                playerStats = ps;
                return;
            }
        });
        return playerStats;
    }

}
