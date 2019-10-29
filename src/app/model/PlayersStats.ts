import { Player } from './Player';
import { PlayerStats } from './PlayerStats';
import { PlayType, PassingPlay, RushingPlay, SackingPlay, KickingPlay } from './Play';
import { DefenseSepecialTeamsStats } from './DefenseSpecialTeamsStats';
import { GameBoxScore } from './GameBoxScore';

export class PlayersStats {
    playersStats: Set<PlayerStats>;
    awayDSTStats: DefenseSepecialTeamsStats;
    homeDSTStats: DefenseSepecialTeamsStats;
    awayTeamAbbreviation: string;
    homeTeamAbbreviation: string;
    lastPlayPlayerStats: Set<PlayerStats>;

    static findPlayerStats(player: Player, teamAbbr: string, playerStatsSet?: Set<PlayerStats>): PlayerStats {
        if (player == null) {
            return null;
        }
        // Find player in set
        let newPlayerStats: PlayerStats;
        if (playerStatsSet && playerStatsSet.size > 0) {
            playerStatsSet.forEach(function (ps: PlayerStats) {
                if (ps.player.id === player.id) {
                    newPlayerStats = ps;
                    ps.newToSet = false;
                    return ps;
                }
            });
        }
        if (newPlayerStats != null) {
            newPlayerStats.newToSet = false;
            return newPlayerStats;
        }
        // Add player to set if not found
        newPlayerStats = new PlayerStats(player, teamAbbr);
        newPlayerStats.newToSet = true;
        playerStatsSet.add(newPlayerStats);
        return newPlayerStats;
    }

    static findPlayerStatsInArray(player: Player, teamAbbr: string, playerStatsSet?: Array<PlayerStats>): PlayerStats {
        if (player == null) {
            return null;
        }
        // Find player in set
        let newPlayerStats: PlayerStats;
        if (playerStatsSet && playerStatsSet.length > 0) {
            playerStatsSet.forEach(function (ps: PlayerStats) {
                if (ps.player.id === player.id) {
                    newPlayerStats = ps;
                    ps.newToSet = false;
                    return ps;
                }
            });
        }
        if (newPlayerStats != null) {
            newPlayerStats.newToSet = false;
            return newPlayerStats;
        }
        // Add player to set if not found
        newPlayerStats = new PlayerStats(player, teamAbbr);
        newPlayerStats.newToSet = true;
        playerStatsSet.push(newPlayerStats);
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
        const tempLastPlayPlayerStats = new Set<PlayerStats>();
        let currentPlayerStats: PlayerStats;
        playsWatched.forEach(function (p, idx, array) {
            const mostRecentPlay = (idx === 0);
            if (!p.isCancelsPlay) {
                switch (p.playType) {
                    case PlayType.PassingPlay:
                        const passingPlay = new PassingPlay(p.json.passingPlay, p.lineOfScrimmage);
                        if (!passingPlay.isNoPlay) {
                            // Passing player
                            const passingPlayerPlayerStats = PlayersStats.findPlayerStats(
                                passingPlay.passingPlayer, passingPlay.teamAbbreviation, tempPlayersStats);
                            passingPlayerPlayerStats.passAttempts++;
                            // Receiving player
                            let receivingPlayerPlayerStats: PlayerStats;
                            if (passingPlay.receivingPlayer != null) {
                                receivingPlayerPlayerStats = PlayersStats.findPlayerStats(
                                    passingPlay.receivingPlayer, passingPlay.teamAbbreviation, tempPlayersStats);
                                receivingPlayerPlayerStats.targets++;
                            }
                            if (passingPlay.isCompleted) {
                                if (passingPlay.isTwoPointConversion) {
                                    if (passingPlay.isEndedWithTouchdown) {
                                        passingPlayerPlayerStats.twoPointConversions++;
                                        if (receivingPlayerPlayerStats) {
                                            receivingPlayerPlayerStats.twoPointConversions++;
                                        }
                                    }
                                } else {
                                    // Regular completion, not a 2 pt conversion
                                    passingPlayerPlayerStats.passCompletions++;
                                    passingPlayerPlayerStats.passingYards += +passingPlay.statYards;
                                    if (passingPlay.isEndedWithTouchdown) {
                                        passingPlayerPlayerStats.passingTouchdowns++;
                                    }
                                    if (mostRecentPlay) {
                                        passingPlayerPlayerStats.accruedStatsOnLastPlay = true;
                                        tempLastPlayPlayerStats.add(passingPlayerPlayerStats);
                                    }
                                    if (receivingPlayerPlayerStats) {
                                        receivingPlayerPlayerStats.receptions++;
                                        receivingPlayerPlayerStats.receivingYards += +passingPlay.statYards;
                                        if (passingPlay.isEndedWithTouchdown) {
                                            receivingPlayerPlayerStats.touchdowns++;
                                        }
                                        if (mostRecentPlay) {
                                            receivingPlayerPlayerStats.accruedStatsOnLastPlay = true;
                                            tempLastPlayPlayerStats.add(receivingPlayerPlayerStats);
                                        }
                                    }
                                }
                                // DST
                                if (passingPlay.fumbleSubPlay !== undefined) {
                                    if (passingPlay.fumbleSubPlay.recoveredByOtherTeam) {
                                        let defenseTeamStats: DefenseSepecialTeamsStats;
                                        if (passingPlay.teamAbbreviation === awayTeamAbbr) {
                                            defenseTeamStats = homeDSTStatsLocal;
                                        } else {
                                            defenseTeamStats = awayDSTStatsLocal;
                                        }
                                        defenseTeamStats.fumblesRecovered += 1;
                                        if (passingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                            defenseTeamStats.touchDowns += 1;
                                        }
                                        // Fumbling player
                                        if (passingPlay.fumbleSubPlay.fumblingPlayer.id === passingPlay.passingPlayer.id) {
                                            passingPlayerPlayerStats.fumblesLost++;
                                            passingPlayerPlayerStats.accruedStatsOnLastPlay = mostRecentPlay;
                                        } else {
                                            if (passingPlay.receivingPlayer) {
                                                if (passingPlay.fumbleSubPlay.fumblingPlayer.id === passingPlay.receivingPlayer.id) {
                                                    receivingPlayerPlayerStats.fumblesLost++;
                                                    receivingPlayerPlayerStats.accruedStatsOnLastPlay = mostRecentPlay;
                                                }
                                            }
                                        }
                                        if (idx === 0) {
                                            defenseTeamStats.accruedStatsOnLastPlay = true;
                                        }
                                    }
                                }
                            } else {
                                // DST
                                if (passingPlay.intercepted) {
                                    // Passing player
                                    passingPlayerPlayerStats.passingInterceptions++;
                                    if (passingPlay.teamAbbreviation === awayTeamAbbr) {
                                        homeDSTStatsLocal.interceptions += 1;
                                        if (passingPlay.isEndedWithTouchdown === true) {
                                            homeDSTStatsLocal.touchDowns += 1;
                                        }
                                        if (idx === 0) {
                                            homeDSTStatsLocal.accruedStatsOnLastPlay = true;
                                        }
                                    } else {
                                        awayDSTStatsLocal.interceptions += 1;
                                        if (passingPlay.isEndedWithTouchdown === true) {
                                            awayDSTStatsLocal.touchDowns += 1;
                                        }
                                        if (idx === 0) {
                                            awayDSTStatsLocal.accruedStatsOnLastPlay = true;
                                        }
                                    }
                                }
                            }
                            if (passingPlay.stoppedAtPosition && passingPlay.stoppedAtPosition.yardLine === 0
                                && p.description.search('SAFETY')) {
                                let defenseTeamStats: DefenseSepecialTeamsStats;
                                if (passingPlay.teamAbbreviation === awayTeamAbbr) {
                                    defenseTeamStats = homeDSTStatsLocal;
                                } else {
                                    defenseTeamStats = awayDSTStatsLocal;
                                }
                                defenseTeamStats.safeties++;
                            }
                        }
                        break;
                    case PlayType.RushingPlay:
                        const rushingPlay: RushingPlay = new RushingPlay(p.json.rushingPlay, p.lineOfScrimmage);
                        if (!(rushingPlay.isNoPlay)) {
                            currentPlayerStats = PlayersStats.findPlayerStats(
                                rushingPlay.rushingPlayer, rushingPlay.teamAbbreviation, tempPlayersStats);
                            if (rushingPlay.isTwoPointConversion) {
                                if (rushingPlay.isEndedWithTouchdown) {
                                    currentPlayerStats.twoPointConversions++;
                                }
                            } else {
                                currentPlayerStats.rushAttempts++;
                                if (!(rushingPlay.hasPassingSubPlay)) {
                                    currentPlayerStats.rushingYards += +rushingPlay.yardsRushed;
                                }
                                if (rushingPlay.isEndedWithTouchdown) {
                                    currentPlayerStats.touchdowns++;
                                }
                                if (rushingPlay.fumbleSubPlay != null) {
                                    if (rushingPlay.fumbleSubPlay.recoveredByOtherTeam) {
                                        let defenseTeamStats: DefenseSepecialTeamsStats;
                                        if (rushingPlay.teamAbbreviation === awayTeamAbbr) {
                                            defenseTeamStats = homeDSTStatsLocal;
                                        } else {
                                            defenseTeamStats = awayDSTStatsLocal;
                                        }
                                        defenseTeamStats.fumblesRecovered++;
                                        if (rushingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                            defenseTeamStats.touchDowns++;
                                        }
                                        defenseTeamStats.accruedStatsOnLastPlay = mostRecentPlay;
                                        // Fumbling Player
                                        if (rushingPlay.fumbleSubPlay.fumblingPlayer.id === rushingPlay.rushingPlayer.id) {
                                            currentPlayerStats.fumblesLost++;
                                            currentPlayerStats.accruedStatsOnLastPlay = mostRecentPlay;
                                        }
                                    }
                                    if (rushingPlay.passingSubPlay != null) {
                                        const passSubPlay = new PassingPlay(rushingPlay.passingSubPlay, p.lineOfScrimmage);
                                        if (!passSubPlay.isNoPlay) {
                                            if (passSubPlay.isCompleted) {
                                                // Passing player
                                                currentPlayerStats = PlayersStats.findPlayerStats(
                                                    passSubPlay.passingPlayer, passSubPlay.teamAbbreviation, tempPlayersStats);
                                                currentPlayerStats.passingYards += +passSubPlay.statYards;
                                                if (passSubPlay.isEndedWithTouchdown) {
                                                    if (passSubPlay.isTwoPointConversion) {
                                                        currentPlayerStats.twoPointConversions++;
                                                    } else {
                                                        currentPlayerStats.passingTouchdowns++;
                                                    }
                                                }
                                                if (mostRecentPlay) {
                                                    currentPlayerStats.accruedStatsOnLastPlay = true;
                                                    tempLastPlayPlayerStats.add(currentPlayerStats);
                                                }
                                                // Receiving player
                                                if (passSubPlay.receivingPlayer != null) {
                                                    currentPlayerStats = PlayersStats.findPlayerStats(
                                                        passSubPlay.receivingPlayer, passSubPlay.teamAbbreviation, tempPlayersStats);
                                                    currentPlayerStats.receivingYards += +passSubPlay.statYards;
                                                    if (passSubPlay.isEndedWithTouchdown) {
                                                        if (passSubPlay.isTwoPointConversion) {
                                                            currentPlayerStats.twoPointConversions++;
                                                        } else {
                                                            currentPlayerStats.touchdowns++;
                                                        }
                                                    }
                                                    if (mostRecentPlay) {
                                                        currentPlayerStats.accruedStatsOnLastPlay = true;
                                                        tempLastPlayPlayerStats.add(currentPlayerStats);
                                                    }
                                                }
                                                // DST
                                                if (passingPlay.fumbleSubPlay !== undefined) {
                                                    if (passingPlay.fumbleSubPlay.recoveredByOtherTeam) {
                                                        let defenseTeamStats: DefenseSepecialTeamsStats;
                                                        if (passingPlay.teamAbbreviation === awayTeamAbbr) {
                                                            defenseTeamStats = homeDSTStatsLocal;
                                                        } else {
                                                            defenseTeamStats = awayDSTStatsLocal;
                                                        }
                                                        defenseTeamStats.fumblesRecovered += 1;
                                                        if (passingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                                            defenseTeamStats.touchDowns += 1;
                                                        }
                                                        if (mostRecentPlay) {
                                                            defenseTeamStats.accruedStatsOnLastPlay = true;
                                                        }
                                                    }
                                                }
                                            } else {
                                                // DST
                                                if (passSubPlay.intercepted) {
                                                    // Passing player
                                                    currentPlayerStats = PlayersStats.findPlayerStats(
                                                        passSubPlay.passingPlayer, passSubPlay.teamAbbreviation, tempPlayersStats);
                                                    currentPlayerStats.interceptions += 1;
                                                    if (passSubPlay.teamAbbreviation === awayTeamAbbr) {
                                                        homeDSTStatsLocal.interceptions += 1;
                                                        if (passSubPlay.isEndedWithTouchdown === true) {
                                                            homeDSTStatsLocal.touchDowns += 1;
                                                        }
                                                        if (mostRecentPlay) {
                                                            homeDSTStatsLocal.accruedStatsOnLastPlay = true;
                                                        }
                                                    } else {
                                                        awayDSTStatsLocal.interceptions += 1;
                                                        if (passSubPlay.isEndedWithTouchdown === true) {
                                                            awayDSTStatsLocal.touchDowns += 1;
                                                        }
                                                        if (mostRecentPlay) {
                                                            awayDSTStatsLocal.accruedStatsOnLastPlay = true;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (mostRecentPlay) {
                                    currentPlayerStats.accruedStatsOnLastPlay = true;
                                    tempLastPlayPlayerStats.add(currentPlayerStats);
                                }
                            }
                            if (rushingPlay.stoppedAtPosition && rushingPlay.stoppedAtPosition.yardLine == 0
                                && p.description.search('SAFETY') > -1) {
                                let defenseTeamStats: DefenseSepecialTeamsStats;
                                if (rushingPlay.teamAbbreviation === awayTeamAbbr) {
                                    defenseTeamStats = homeDSTStatsLocal;
                                } else {
                                    defenseTeamStats = awayDSTStatsLocal;
                                }
                                defenseTeamStats.safeties++;
                                defenseTeamStats.accruedStatsOnLastPlay = mostRecentPlay;
                            }
                        }
                        break;
                    case PlayType.KickAttempt:
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
                            if (mostRecentPlay) {
                                currentPlayerStats.accruedStatsOnLastPlay = true;
                                tempLastPlayPlayerStats.add(currentPlayerStats);
                            }
                        }
                        break;
                    case PlayType.KickingPlay:
                        const kickingPlay: KickingPlay = new KickingPlay(p.json.kickingPlay);
                        // console.log(kickingPlay.teamAbbreviation + ': ' + p.description);
                        if (!(kickingPlay.isNoPlay)) {
                            // DST
                            let defenseTeamStats: DefenseSepecialTeamsStats;
                            if (kickingPlay.teamAbbreviation === awayTeamAbbr) {
                                defenseTeamStats = homeDSTStatsLocal;
                            } else {
                                defenseTeamStats = awayDSTStatsLocal;
                            }
                            if (kickingPlay.isBlocked) {
                                defenseTeamStats.blockedKicks += 1;
                                if (kickingPlay.fumbleSubPlay != null) {
                                    if (kickingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                        defenseTeamStats.touchDowns += 1;
                                    }
                                }
                                if (idx === 0) {
                                    defenseTeamStats.accruedStatsOnLastPlay = true;
                                }
                            } else {
                                if (kickingPlay.fumbleSubPlay != null) {
                                    if (kickingPlay.fumbleSubPlay.recoveredByOtherTeam) {
                                        if (kickingPlay.fumbleSubPlay.recoveringTeamAbbreviation === awayTeamAbbr) {
                                            defenseTeamStats = awayDSTStatsLocal;
                                        } else {
                                            defenseTeamStats = homeDSTStatsLocal;
                                        }
                                        defenseTeamStats.fumblesRecovered += 1;
                                        if (kickingPlay.fumbleSubPlay.isEndedWithTouchdown) {
                                            defenseTeamStats.touchDowns += 1;
                                        }
                                        if (idx === 0) {
                                            defenseTeamStats.accruedStatsOnLastPlay = true;
                                        }
                                    }
                                }
                            }
                            if (kickingPlay.isTouchdown) {
                                defenseTeamStats.touchDowns += 1;
                                currentPlayerStats = PlayersStats.findPlayerStats(
                                    kickingPlay.retrievingPlayer, kickingPlay.retrievingTeamAbbreviation, tempPlayersStats);
                                currentPlayerStats.touchdowns += 1;
                                if (idx === 0) {
                                    defenseTeamStats.accruedStatsOnLastPlay = true;
                                }
                            }
                        }
                        break;
                    case PlayType.SackingPlay:
                        const sackingPlay: SackingPlay = new SackingPlay(p.json.sackingPlay);
                        if (!(sackingPlay.isNoPlay)) {
                            let sackingTeamStats: DefenseSepecialTeamsStats;
                            if (sackingPlay.teamAbbreviation === awayTeamAbbr) {
                                sackingTeamStats = homeDSTStatsLocal;
                            } else {
                                sackingTeamStats = awayDSTStatsLocal;
                            }
                            sackingTeamStats.sacks += 1;
                            if (sackingPlay.fumbleSubPlay != null) {
                                if (sackingPlay.fumbleSubPlay.recoveredByOtherTeam) {
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
        this.lastPlayPlayerStats = tempLastPlayPlayerStats;
    }

    clear() {
        this.playersStats.clear();
    }

    get sortedPlayersStats(): PlayerStats[] {
        const nonSortedArray: PlayerStats[] = Array.from(this.playersStats);
        const sortedArray = nonSortedArray.sort((ps1, ps2) => {
            if (ps1.fantasyPoints < ps2.fantasyPoints) {
                return 1;
            }
            // if (ps1.passingYards < ps2.passingYards) {
            //     return 1;
            // }
            // if (ps1.passingYards > ps2.passingYards) {
            //     return -1;
            // }
            // if (ps1.rushingYards < ps2.rushingYards) {
            //     return 1;
            // }
            // if (ps1.rushingYards > ps2.rushingYards) {
            //     return -1;
            // }
            // if (ps1.receivingYards < ps2.receivingYards) {
            //     return 1;
            // }
            // if (ps1.receivingYards > ps2.receivingYards) {
            //     return -1;
            // }
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
        return this.awayTeamPlayersStats.filter((ps) => ps.player.position === 'RB' || ps.player.position === 'FB');
    }

    get homeTeamRBsStats(): PlayerStats[] {
        return this.homeTeamPlayersStats.filter((ps) => ps.player.position === 'RB' || ps.player.position === 'FB');
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
        this.playersStats.forEach((ps) => {
            if (ps.teamAbbreviation === teamAbbr) {
                filteredArray.push(ps);
            }
        });
        const sortedArray = filteredArray.sort((ps1, ps2) => {
            if (ps1.fantasyPoints < ps2.fantasyPoints) {
                return 1;
            }
            if (ps1.fantasyPoints > ps2.fantasyPoints) {
                return -1;
            }
            return 0;
        });
        return sortedArray;
    }

    isPlayerInLastPlayStats(player: Player) {
        let foundPlayer = false;
        this.lastPlayPlayerStats.forEach(ps => {
            if (ps.player.id === player.id) {
                foundPlayer = true;
            }
        });
        return foundPlayer;
    }

}




