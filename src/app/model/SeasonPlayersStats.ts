import { Player } from './Player';
import { PlayerStats } from './PlayerStats';
import { PlayType, PassingPlay, RushingPlay, SackingPlay, KickingPlay, Play } from './Play';
import { DefenseSepecialTeamsStats } from './DefenseSpecialTeamsStats';
import { GameBoxScore } from './GameBoxScore';
import { PlayersStats } from './PlayersStats';
import { GamesComponent } from '../components/games/games.component';

export class SeasonPlayersStats {
    json: string;
    playersStats: Array<PlayerStats>;

    constructor() {
        this.playersStats = new Array<PlayerStats>();
        const json = localStorage.getItem('SeasonPlayersStats');
        this.json = json;
        const jsonObject: any = JSON.parse(this.json);
        const playersStatsLocal = this.playersStats;
        if (jsonObject) {
            // this.playersStats = jsonObject.playersStats;
            jsonObject.playersStats.forEach(psJson => {
                if (psJson.player.position === 'QB' ||
                psJson.player.position === 'RB' ||
                psJson.player.position === 'FB' ||
                psJson.player.position === 'WR' ||
                psJson.player.position === 'TE' ||
                psJson.player.position === 'K') {
                    const player = new Player(JSON.stringify(psJson.player));
                    const ps = new PlayerStats(player, psJson.teamAbbreviation);
                    Object.assign(ps, psJson);
                    playersStatsLocal.push(ps);
                }
            });
        }
    }

    findPlayerStats(player: Player, teamAbbr: string): PlayerStats {
        if (player == null) {
            return null;
        }
        // Find player in set
        let newPlayerStats: PlayerStats;
        if (this.playersStats && this.playersStats.length > 0) {
            this.playersStats.forEach(ps => {
                if (ps.player.id === player.id) {
                    newPlayerStats = ps;
                    ps.newToSet = false;
                    return;
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
        this.playersStats.push(newPlayerStats);
        return newPlayerStats;
    }

    addGameBoxScore(box: GameBoxScore) {
        const allPlayerStatsFromGame = new Set<PlayerStats>(box.awayPlayerStatsSet);
        box.homePlayerStatsSet.forEach(allPlayerStatsFromGame.add, allPlayerStatsFromGame);
        // = new Set(function*() { yield* box.awayPlayerStatsSet; yield* box.homePlayerStatsSet; }());
        allPlayerStatsFromGame.forEach(ps => {
            if (ps.player.position === 'QB' ||
                ps.player.position === 'RB' ||
                ps.player.position === 'FB' ||
                ps.player.position === 'WR' ||
                ps.player.position === 'TE' ||
                ps.player.position === 'K') {
                const seasonPlayerStats = this.findPlayerStats(ps.player, ps.teamAbbreviation);
                // Object.assign(seasonPlayerStats, ps);
                // seasonPlayerStats.gamesPlayed += 1;
                seasonPlayerStats.addPlayerStats(ps);
                // seasonPlayerStats.passingYards += ps.passingYards;
                // seasonPlayerStats.rushingYards += ps.rushingYards;
                // seasonPlayerStats.receivingYards += ps.receivingYards;
                // seasonPlayerStats.passingTouchdowns += ps.passingTouchdowns;
                // seasonPlayerStats.touchdowns += ps.touchdowns;
                // seasonPlayerStats.twoPointConversions += ps.twoPointConversions;
                // seasonPlayerStats.extraPoints += ps.extraPoints;
                // seasonPlayerStats.fieldGoals += ps.fieldGoals;
                // seasonPlayerStats.fieldGoals50Plus += ps.fieldGoals50Plus;
                // seasonPlayerStats.interceptions += ps.interceptions;
                // // Not accumulating stats below yet
                // seasonPlayerStats.passAttempts += ps.passAttempts;
                // seasonPlayerStats.passCompletions += ps.passCompletions;
                // seasonPlayerStats.rushAttempts += ps.rushAttempts;
                // seasonPlayerStats.targets += ps.targets;
                // seasonPlayerStats.receptions += ps.receptions;
                // seasonPlayerStats.fumblesLost += ps.fumblesLost;
                // seasonPlayerStats.passingInterceptions += ps.passingInterceptions;
                // seasonPlayerStats.blockedKicks += ps.blockedKicks;
                // seasonPlayerStats.defensiveFumbleRecoveries += ps.defensiveFumbleRecoveries;
                // seasonPlayerStats.safeties += ps.safeties;
                // seasonPlayerStats.twoPointConversionReturns += ps.twoPointConversionReturns;
                // seasonPlayerStats.fieldGoalAttempts += ps.fieldGoalAttempts;
                // seasonPlayerStats.extraPointAttempts += ps.extraPointAttempts;
            }
        });
        this.saveToLocalStorage();
    }

    subtractGameBoxScore(box: GameBoxScore) {
        const allPlayerStatsFromGame = new Set<PlayerStats>(box.awayPlayerStatsSet);
        box.homePlayerStatsSet.forEach(allPlayerStatsFromGame.add, allPlayerStatsFromGame);
        allPlayerStatsFromGame.forEach(ps => {
            if (ps.player.position === 'QB' ||
                ps.player.position === 'RB' ||
                ps.player.position === 'FB' ||
                ps.player.position === 'WR' ||
                ps.player.position === 'TE' ||
                ps.player.position === 'K') {
                const seasonPlayerStats = this.findPlayerStats(ps.player, ps.teamAbbreviation);
                // Object.assign(seasonPlayerStats, ps);
                seasonPlayerStats.subtractPlayerStats(ps);
                // if (seasonPlayerStats.gamesPlayed > 0) {
                //     seasonPlayerStats.gamesPlayed -= 1;
                // } else {
                //     seasonPlayerStats.gamesPlayed = 0;
                // }
                // if (seasonPlayerStats.gamesPlayed === 0) {
                //     seasonPlayerStats.passingYards = 0;
                //     seasonPlayerStats.rushingYards = 0;
                //     seasonPlayerStats.receivingYards = 0;
                //     seasonPlayerStats.passingTouchdowns = 0;
                //     seasonPlayerStats.touchdowns = 0;
                //     seasonPlayerStats.twoPointConversions = 0;
                //     seasonPlayerStats.extraPoints = 0;
                //     seasonPlayerStats.fieldGoals = 0;
                //     seasonPlayerStats.fieldGoals50Plus = 0;
                //     seasonPlayerStats.interceptions = 0;
                //     // Not accumulating stats below yet
                //     seasonPlayerStats.passAttempts = 0;
                //     seasonPlayerStats.passCompletions = 0;
                //     seasonPlayerStats.rushAttempts = 0;
                //     seasonPlayerStats.targets = 0;
                //     seasonPlayerStats.receptions = 0;
                //     seasonPlayerStats.fumblesLost = 0;
                //     seasonPlayerStats.passingInterceptions = 0;
                //     seasonPlayerStats.blockedKicks = 0;
                //     seasonPlayerStats.defensiveFumbleRecoveries = 0;
                //     seasonPlayerStats.safeties = 0;
                //     seasonPlayerStats.twoPointConversionReturns = 0;
                //     seasonPlayerStats.fieldGoalAttempts = 0;
                //     seasonPlayerStats.extraPointAttempts = 0;
                // } else {
                //     seasonPlayerStats.passingYards -= ps.passingYards;
                //     seasonPlayerStats.rushingYards -= ps.rushingYards;
                //     seasonPlayerStats.receivingYards -= ps.receivingYards;
                //     seasonPlayerStats.passingTouchdowns -= ps.passingTouchdowns;
                //     seasonPlayerStats.touchdowns -= ps.touchdowns;
                //     seasonPlayerStats.twoPointConversions -= ps.twoPointConversions;
                //     seasonPlayerStats.extraPoints -= ps.extraPoints;
                //     seasonPlayerStats.fieldGoals -= ps.fieldGoals;
                //     seasonPlayerStats.fieldGoals50Plus -= ps.fieldGoals50Plus;
                //     seasonPlayerStats.interceptions -= ps.interceptions;
                //     // Not accumulating stats below yet
                //     seasonPlayerStats.passAttempts -= ps.passAttempts;
                //     seasonPlayerStats.passCompletions -= ps.passCompletions;
                //     seasonPlayerStats.rushAttempts -= ps.rushAttempts;
                //     seasonPlayerStats.targets -= ps.targets;
                //     seasonPlayerStats.receptions -= ps.receptions;
                //     seasonPlayerStats.fumblesLost -= ps.fumblesLost;
                //     seasonPlayerStats.passingInterceptions -= ps.passingInterceptions;
                //     seasonPlayerStats.blockedKicks -= ps.blockedKicks;
                //     seasonPlayerStats.defensiveFumbleRecoveries -= ps.defensiveFumbleRecoveries;
                //     seasonPlayerStats.safeties -= ps.safeties;
                //     seasonPlayerStats.twoPointConversionReturns -= ps.twoPointConversionReturns;
                //     seasonPlayerStats.fieldGoalAttempts -= ps.fieldGoalAttempts;
                //     seasonPlayerStats.extraPointAttempts -= ps.extraPointAttempts;
                // }
            }
        });
        this.saveToLocalStorage();
    }

    // Save to localStorage
    saveToLocalStorage() {
        localStorage.setItem('SeasonPlayersStats', JSON.stringify(this));
    }
    // Read from localStorage

    qbsSeasonStats(currentPlayersStats: PlayersStats, addCurrentPlayers: boolean): Array<PlayerStats> {
        let qbStats = new Array<PlayerStats>();
        qbStats = this.playersStats.filter(ps => ps.player.position === 'QB');
        if (addCurrentPlayers) {
            currentPlayersStats.awayTeamQBsStats.forEach(currentQb => {
                const foundQB = PlayersStats.findPlayerStatsInArray(currentQb.player, currentQb.teamAbbreviation, qbStats);
                if (foundQB) {
                    foundQB.addPlayerStats(currentQb);
                    foundQB.accruedStatsOnLastPlay = true;
                } else {
                    currentQb.accruedStatsOnLastPlay = true;
                    qbStats.push(currentQb);
                }
            });
            currentPlayersStats.homeTeamQBsStats.forEach(currentQb => {
                const foundQB = PlayersStats.findPlayerStatsInArray(currentQb.player, currentQb.teamAbbreviation, qbStats);
                if (foundQB) {
                    foundQB.addPlayerStats(currentQb);
                    foundQB.accruedStatsOnLastPlay = true;
                } else {
                    currentQb.accruedStatsOnLastPlay = true;
                    qbStats.push(currentQb);
                }
            });
        }
        GamesComponent.sortByFantasyPoints(qbStats);
        return qbStats;
    }

}




