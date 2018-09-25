import { Player } from './Player';
import { PlayerStats } from './PlayerStats';
import { PlayType, SackingPlay } from './Play';
import { DefenseSepecialTeamsStats } from './DefenseSpecialTeamsStats';

export class PlayersStats {
    playersStats: Set<PlayerStats>;
    awayDSTStats: DefenseSepecialTeamsStats;
    homeDSTStats: DefenseSepecialTeamsStats;
    awayTeamAbbreviation: string;
    homeTeamAbbreviation: string;

    static findPlayerStats(player: Player, teamAbbr: string, playerStatsSet: Set<PlayerStats>): PlayerStats {
        if (player == null) {
            return null;
        }
        // Find player in set
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
        this.awayDSTStats = new DefenseSepecialTeamsStats(awayTeamAbbr);
        const awayDSTStatsLocal = this.awayDSTStats;
        this.homeDSTStats = new DefenseSepecialTeamsStats(homeTeamAbbr);
        const homeDSTStatsLocal = this.homeDSTStats;
        this.awayTeamAbbreviation = awayTeamAbbr;
        this.homeTeamAbbreviation = homeTeamAbbr;
        let currentPlayerStats: PlayerStats;
        playsWatched.forEach(function (p, idx, array) {
            if (!p.isCancelsPlay) {
                switch (p.playType) {
                    case PlayType.PassingPlay:
                        if (!p.passingPlay.isNoPlay) {
                            if (p.passingPlay.isCompleted) {
                                // Passing player
                                currentPlayerStats = PlayersStats.findPlayerStats(
                                    p.passingPlay.passingPlayer, p.passingPlay.teamAbbreviation, tempPlayersStats);
                                currentPlayerStats.passingYards += +p.passingPlay.totalYardsGained;
                                if (p.passingPlay.isEndedWithTouchdown) {
                                    currentPlayerStats.passingTouchdowns++;
                                }
                                if (idx === 0) {
                                    currentPlayerStats.accruedStatsOnLastPlay = true;
                                }
                                // Receiving player
                                if (p.passingPlay.receivingPlayer != null) {
                                    currentPlayerStats = PlayersStats.findPlayerStats(
                                        p.passingPlay.receivingPlayer, p.passingPlay.teamAbbreviation, tempPlayersStats);
                                    currentPlayerStats.receivingYards += +p.passingPlay.totalYardsGained;
                                    if (p.passingPlay.isEndedWithTouchdown) {
                                        currentPlayerStats.touchdowns++;
                                    }
                                    if (idx === 0) {
                                        currentPlayerStats.accruedStatsOnLastPlay = true;
                                    }
                                }
                            } else {
                                // DST
                                if (p.passingPlay.intercepted) {
                                    // Passing player
                                    currentPlayerStats = PlayersStats.findPlayerStats(
                                        p.passingPlay.passingPlayer, p.passingPlay.teamAbbreviation, tempPlayersStats);
                                    currentPlayerStats.interceptions += 1;
                                    // console.log('this.awayDSTStats.teamAbbreviation: ' + awayDSTStatsLocal.teamAbbreviation);
                                    // console.log('this.awayDSTStats.interceptions: ' + awayDSTStatsLocal.interceptions);
                                    if (p.passingPlay.teamAbbreviation === awayTeamAbbr) {
                                        homeDSTStatsLocal.interceptions += 1;
                                        // console.log(p.passingPlay.isEndedWithTouchdown);
                                        // console.log(('p.passingPlay.isEndedWithTouchdown === "true": '
                                        //     + p.passingPlay.isEndedWithTouchdown === 'true'));
                                        if (p.passingPlay.isEndedWithTouchdown === true) {
                                            homeDSTStatsLocal.touchDowns += 1;
                                            // console.log(homeDSTStatsLocal.touchDowns);
                                        }
                                        if (idx === 0) {
                                            homeDSTStatsLocal.accruedStatsOnLastPlay = true;
                                        }
                                    } else {
                                        awayDSTStatsLocal.interceptions += 1;
                                        // console.log(p.passingPlay.isEndedWithTouchdown);
                                        // console.log(('p.passingPlay.isEndedWithTouchdown == "true": '
                                        //     + p.passingPlay.isEndedWithTouchdown === 'true'));
                                        if (p.passingPlay.isEndedWithTouchdown === true) {
                                            awayDSTStatsLocal.touchDowns += 1;
                                            // console.log(homeDSTStatsLocal.touchDowns);
                                        }
                                        if (idx === 0) {
                                            awayDSTStatsLocal.accruedStatsOnLastPlay = true;
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    case PlayType.RushingPlay:
                        // Rushing player
                        if (!(p.rushingPlay.isNoPlay === 'true')) {
                            currentPlayerStats = PlayersStats.findPlayerStats(
                                p.rushingPlay.rushingPlayer, p.rushingPlay.teamAbbreviation, tempPlayersStats);
                            currentPlayerStats.rushingYards += +p.rushingPlay.yardsRushed;
                            if (p.rushingPlay.isEndedWithTouchdown) {
                                currentPlayerStats.touchdowns++;
                            }
                            if (idx === 0) {
                                currentPlayerStats.accruedStatsOnLastPlay = true;
                            }
                        }
                        break;
                    case PlayType.KickAttempt:
                        // Kicking player
                        if (!(p.kickAttempt.isNoPlay === 'true')) {
                            currentPlayerStats = PlayersStats.findPlayerStats(
                                p.kickAttempt.kickingPlayer, p.kickAttempt.teamAbbreviation, tempPlayersStats);
                            if (p.kickAttempt.isGood) {
                                if (p.kickAttempt.isExtraPoint) {
                                    currentPlayerStats.extraPoints += 1;
                                } else {
                                    if (p.kickAttempt.isFieldGoal) {
                                        currentPlayerStats.fieldGoals += 1;
                                        if (p.kickAttempt.fieldGoal50Plus) {
                                            currentPlayerStats.fieldGoals50Plus += 1;
                                        }
                                    }
                                }
                            }
                            if (idx === 0) {
                                currentPlayerStats.accruedStatsOnLastPlay = true;
                            }
                        }
                        break;
                    case PlayType.KickingPlay:
                        if (!(p.kickingPlay.isNoPlay === 'true')) {
                            // DST
                            if (p.kickingPlay.isBlocked === 'true') {
                                if (p.kickingPlay.teamAbbreviation === awayTeamAbbr) {
                                    homeDSTStatsLocal.blockedKicks += 1;
                                    if (p.kickingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                        if (p.kickingPlay.fumbleSubPlay.recoveringTeamAbbreviation === awayTeamAbbr) {
                                            awayDSTStatsLocal.touchDowns += 1;
                                        } else {
                                            homeDSTStatsLocal.touchDowns += 1;
                                        }
                                    }
                                    if (idx === 0) {
                                        homeDSTStatsLocal.accruedStatsOnLastPlay = true;
                                    }
                                } else {
                                    awayDSTStatsLocal.blockedKicks += 1;
                                    if (p.kickingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                        if (p.kickingPlay.fumbleSubPlay.recoveringTeamAbbreviation === awayTeamAbbr) {
                                            awayDSTStatsLocal.touchDowns += 1;
                                        } else {
                                            homeDSTStatsLocal.touchDowns += 1;
                                        }
                                    }
                                    if (idx === 0) {
                                        awayDSTStatsLocal.accruedStatsOnLastPlay = true;
                                    }
                                }
                            }
                        }
                        break;
                    case PlayType.SackingPlay:
                        const sackingPlay: SackingPlay = new SackingPlay(p.sackingPlay);
                        if (!(sackingPlay.isNoPlay)) {
                            let sackingTeamStats: DefenseSepecialTeamsStats;
                            if (sackingPlay.teamAbbreviation === awayTeamAbbr) {
                                sackingTeamStats = homeDSTStatsLocal;
                            } else {
                                sackingTeamStats = awayDSTStatsLocal;
                            }
                            sackingTeamStats.sacks += 1;
                            console.log('Fix fumble recoveries');
                            if (sackingPlay.fumbleSubPlay != null) {
                                console.log('fumble');
                                if (sackingPlay.fumbleSubPlay.recoveredByOtherTeam) {
                                    console.log('recoveredByOtherTeam');
                                    sackingTeamStats.fumblesRecovered += 1;
                                    if (sackingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                        sackingTeamStats.touchDowns += 1;
                                    }
                                }
                            }
                            if (idx === 0) {
                                sackingTeamStats.accruedStatsOnLastPlay = true;
                            }
                        }
                        break;
                }
            }
        });
        this.playersStats = tempPlayersStats;
    }

    get sortedPlayersStats(): PlayerStats[] {
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

    get awayTeamKsStats(): PlayerStats[] {
        return this.awayTeamPlayersStats.filter((ps) => ps.player.position === 'K');
    }

    get homeTeamKsStats(): PlayerStats[] {
        return this.homeTeamPlayersStats.filter((ps) => ps.player.position === 'K');
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




