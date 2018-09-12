import { Player } from './Player';
import { PlayerStats } from './PlayerStats';
import { PlayType } from './Play';

export class PlayersStats {
    playersStats: Set<PlayerStats>;
    awayTeamAbbreviation: string;
    homeTeamAbbreviation: string;

    static findPlayerStats(player: Player, teamAbbr: string, playerStatsSet: Set<PlayerStats>): PlayerStats {
        if (player == null) {
            return null;
        }
        // Find player in set
        // const test = Math.floor(Math.random() * Math.floor(100));
        let newPlayerStats: PlayerStats;
        if (playerStatsSet.size > 0) {
            playerStatsSet.forEach(function (ps: PlayerStats) {
                if (ps.player.id === player.id) {
                    newPlayerStats = ps;
                    return ps;
                }
            });
        }
        if (newPlayerStats != null) {
            return newPlayerStats;
        }
        // Add player to set if not found
        newPlayerStats = new PlayerStats(player, teamAbbr);
        playerStatsSet.add(newPlayerStats);
        return newPlayerStats;
    }

    constructor(playsWatched, awayTeamAbbr: string, homeTeamAbbr: string) {
        const tempPlayersStats = new Set<PlayerStats>();
        this.awayTeamAbbreviation = awayTeamAbbr;
        this.homeTeamAbbreviation = homeTeamAbbr;        // console.log(tempPlayersStats.size);
        let currentPlayerStats: PlayerStats;
        playsWatched.forEach(function (p) {
            if (!p.isCancelsPlay) {
                switch (p.playType) {
                    case PlayType.PassingPlay:
                        // Passing player
                        if (p.passingPlay.isCompleted) {
                            currentPlayerStats = PlayersStats.findPlayerStats(
                                p.passingPlay.passingPlayer, p.passingPlay.teamAbbreviation, tempPlayersStats);
                            currentPlayerStats.passingYards += +p.passingPlay.totalYardsGained;
                            // Receiving player
                            if (p.passingPlay.receivingPlayer != null) {
                                // console.log('add receiver');
                                currentPlayerStats = PlayersStats.findPlayerStats(
                                    p.passingPlay.receivingPlayer, p.passingPlay.teamAbbreviation, tempPlayersStats);
                                currentPlayerStats.receivingYards += +p.passingPlay.totalYardsGained;
                            }
                        }
                        break;
                    case PlayType.RushingPlay:
                        // Rushing player
                        // console.log('add rusher');
                        currentPlayerStats = PlayersStats.findPlayerStats(
                            p.rushingPlay.rushingPlayer, p.rushingPlay.teamAbbreviation, tempPlayersStats);
                        currentPlayerStats.rushingYards += +p.rushingPlay.yardsRushed;
                        break;
                }
            }
        });
        this.playersStats = tempPlayersStats;
    }

    get sortedPlayersStats(): PlayerStats[] {
        // const nonSortedArray: PlayerStats[] = new Array<PlayerStats>();
        // this.playersStats.forEach((ps) => nonSortedArray.push(ps));
        const nonSortedArray: PlayerStats[] = Array.from(this.playersStats);
        const sortedArray = nonSortedArray.sort((ps1, ps2) => {
            if (ps1.passingYards < ps2.passingYards) {
                return 1;
            }
            if (ps1.passingYards > ps2.passingYards) {
                return -1;
            }
            if (ps1.rushingYards < ps2.rushingYards) {
                return 1;
            }
            if (ps1.rushingYards > ps2.rushingYards) {
                return -1;
            }
            if (ps1.receivingYards < ps2.receivingYards) {
                return 1;
            }
            if (ps1.receivingYards > ps2.receivingYards) {
                return -1;
            }
            return 0;
        });
        return sortedArray;
    }

    get awayTeamPlayersStats(): PlayerStats[] {
        return this.getTeamPlayersStats(this.awayTeamAbbreviation);
    }

    get homeTeamPlayersStats(): PlayerStats[] {
        return this.getTeamPlayersStats(this.homeTeamAbbreviation);
    }

    get awayTeamQBsStats(): PlayerStats[] {
        return this.awayTeamPlayersStats.filter((ps) => ps.player.position === 'QB');
    }

    get homeTeamQBsStats(): PlayerStats[] {
        return this.homeTeamPlayersStats.filter((ps) => ps.player.position === 'QB');
    }

    get awayTeamRBsStats(): PlayerStats[] {
        return this.awayTeamPlayersStats.filter((ps) => ps.player.position === 'RB');
    }

    get homeTeamRBsStats(): PlayerStats[] {
        return this.homeTeamPlayersStats.filter((ps) => ps.player.position === 'RB');
    }

    get awayTeamWRsStats(): PlayerStats[] {
        return this.awayTeamPlayersStats.filter((ps) => ps.player.position === 'WR');
    }

    get homeTeamWRsStats(): PlayerStats[] {
        return this.homeTeamPlayersStats.filter((ps) => ps.player.position === 'WR');
    }

    get awayTeamTEsStats(): PlayerStats[] {
        return this.awayTeamPlayersStats.filter((ps) => ps.player.position === 'TE');
    }

    get homeTeamTEsStats(): PlayerStats[] {
        return this.homeTeamPlayersStats.filter((ps) => ps.player.position === 'TE');
    }

    getTeamPlayersStats(teamAbbr: string) {
        const filteredArray: PlayerStats[] = new Array<PlayerStats>();
        // const homeTeamAbbr = this.homeTeamAbbreviation;
        this.playersStats.forEach((ps) => {
            if (ps.teamAbbreviation === teamAbbr) {
                filteredArray.push(ps);
            }
        });
        const sortedArray = filteredArray.sort((ps1, ps2) => {
            if (ps1.passingYards < ps2.passingYards) {
                return 1;
            }
            if (ps1.passingYards > ps2.passingYards) {
                return -1;
            }
            if (ps1.rushingYards < ps2.rushingYards) {
                return 1;
            }
            if (ps1.rushingYards > ps2.rushingYards) {
                return -1;
            }
            if (ps1.receivingYards < ps2.receivingYards) {
                return 1;
            }
            if (ps1.receivingYards > ps2.receivingYards) {
                return -1;
            }
            return 0;
        });
        return sortedArray;
        // return filteredArray;
    }

}




