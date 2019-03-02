import { Player } from './Player';
import { PlayerStats } from './PlayerStats';
import { PlayType, PassingPlay, RushingPlay, SackingPlay, KickingPlay, Play } from './Play';
import { DefenseSepecialTeamsStats } from './DefenseSpecialTeamsStats';
import { GameBoxScore } from './GameBoxScore';
import { PlayersStats } from './PlayersStats';
import { GamesComponent } from '../components/games/games.component';



export class SeasonPlayersStats {
    // json: string;
    playersStats: Array<PlayerStats>;

    static sortByFantasyPoints(playerStats: Array<PlayerStats>) {
        playerStats.sort(function (ps1, ps2) {
            if (ps1.pointsPerGame > ps2.pointsPerGame) {
                return -1;
            } else {
                return 1;
            }
        });
    }

    constructor() {
        this.playersStats = new Array<PlayerStats>();
        const json = localStorage.getItem('SeasonPlayersStats');
        // this.json = json;
        const jsonObject: any = JSON.parse(json);
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
                seasonPlayerStats.accruedStatsOnLastPlay = false;
                seasonPlayerStats.currentGame = false;
                if (ps.player.lastName === 'Mixon') {
                    console.log('Mixon');
                }
                seasonPlayerStats.addPlayerStats(ps);
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
                seasonPlayerStats.accruedStatsOnLastPlay = false;
                seasonPlayerStats.currentGame = false;
                seasonPlayerStats.subtractPlayerStats(ps);
            }
        });
        this.saveToLocalStorage();
    }

    // Save to localStorage
    saveToLocalStorage() {
        localStorage.setItem('SeasonPlayersStats', JSON.stringify(this));
    }

    qbsSeasonStats(currentPlayersStats: PlayersStats, addCurrentPlayers: boolean): Array<PlayerStats> {
        let qbStats = new Array<PlayerStats>();
        qbStats = this.playersStats.filter(ps => ps.player.position === 'QB');
        if (addCurrentPlayers) {
            currentPlayersStats.awayTeamQBsStats.forEach(currentQb => {
                const foundQB = PlayersStats.findPlayerStatsInArray(currentQb.player, currentQb.teamAbbreviation, qbStats);
                if (foundQB) {
                    foundQB.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(foundQB.player)) {
                        foundQB.accruedStatsOnLastPlay = true;
                    }
                    // if (!foundQB.currentGameStats) {
                    if (addCurrentPlayers) {
                        foundQB.currentGameStats = currentQb;
                    }
                    // }
                    // foundQB.addPlayerStats(currentQb);
                } else {
                    currentQb.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(currentQb.player)) {
                        currentQb.accruedStatsOnLastPlay = true;
                    }
                    qbStats.push(currentQb);
                }
            });
            currentPlayersStats.homeTeamQBsStats.forEach(currentQb => {
                const foundQB = PlayersStats.findPlayerStatsInArray(currentQb.player, currentQb.teamAbbreviation, qbStats);
                if (foundQB) {
                    foundQB.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(foundQB.player)) {
                        foundQB.accruedStatsOnLastPlay = true;
                    }
                    // if (!foundQB.currentGameStats) {
                    if (addCurrentPlayers) {
                        foundQB.currentGameStats = currentQb;
                    }
                    // }
                    // foundQB.addPlayerStats(currentQb);
                } else {
                    currentQb.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(currentQb.player)) {
                        currentQb.accruedStatsOnLastPlay = true;
                    }
                    qbStats.push(currentQb);
                }
            });
        }
        SeasonPlayersStats.sortByFantasyPoints(qbStats);
        return qbStats;
    }

    rbsSeasonStats(currentPlayersStats: PlayersStats, addCurrentPlayers: boolean): Array<PlayerStats> {
        let rbStats = new Array<PlayerStats>();
        rbStats = this.playersStats.filter(ps => ps.player.position === 'RB' || ps.player.position === 'FB');
        if (addCurrentPlayers) {
            currentPlayersStats.awayTeamRBsStats.forEach(currentRB => {
                const foundRB = PlayersStats.findPlayerStatsInArray(currentRB.player, currentRB.teamAbbreviation, rbStats);
                if (foundRB) {
                    foundRB.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(foundRB.player)) {
                        foundRB.accruedStatsOnLastPlay = true;
                    }
                    // foundRB.addPlayerStats(currentRB);
                    if (addCurrentPlayers) {
                        foundRB.currentGameStats = currentRB;
                    }
                } else {
                    currentRB.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(currentRB.player)) {
                        currentRB.accruedStatsOnLastPlay = true;
                    }
                    rbStats.push(currentRB);
                }
            });
            currentPlayersStats.homeTeamRBsStats.forEach(currentRB => {
                const foundRB = PlayersStats.findPlayerStatsInArray(currentRB.player, currentRB.teamAbbreviation, rbStats);
                if (foundRB) {
                    foundRB.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(foundRB.player)) {
                        foundRB.accruedStatsOnLastPlay = true;
                    }
                    // foundRB.addPlayerStats(currentRB);
                    if (addCurrentPlayers) {
                        foundRB.currentGameStats = currentRB;
                    }
                } else {
                    currentRB.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(currentRB.player)) {
                        currentRB.accruedStatsOnLastPlay = true;
                    }
                    rbStats.push(currentRB);
                }
            });
        }
        SeasonPlayersStats.sortByFantasyPoints(rbStats);
        return rbStats;
    }

    wrsSeasonStats(currentPlayersStats: PlayersStats, addCurrentPlayers: boolean): Array<PlayerStats> {
        let wrStats = new Array<PlayerStats>();
        wrStats = this.playersStats.filter(ps => ps.player.position === 'WR');
        if (addCurrentPlayers) {
            currentPlayersStats.awayTeamWRsStats.forEach(currentWR => {
                const foundWR = PlayersStats.findPlayerStatsInArray(currentWR.player, currentWR.teamAbbreviation, wrStats);
                if (foundWR) {
                    foundWR.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(foundWR.player)) {
                        foundWR.accruedStatsOnLastPlay = true;
                    }
                    // foundWR.addPlayerStats(currentWR);
                    if (addCurrentPlayers) {
                        foundWR.currentGameStats = currentWR;
                    }
                } else {
                    currentWR.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(currentWR.player)) {
                        currentWR.accruedStatsOnLastPlay = true;
                    }
                    wrStats.push(currentWR);
                }
            });
            currentPlayersStats.homeTeamWRsStats.forEach(currentWR => {
                const foundWR = PlayersStats.findPlayerStatsInArray(currentWR.player, currentWR.teamAbbreviation, wrStats);
                if (foundWR) {
                    foundWR.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(foundWR.player)) {
                        foundWR.accruedStatsOnLastPlay = true;
                    }
                    // foundWR.addPlayerStats(currentWR);
                    if (addCurrentPlayers) {
                        foundWR.currentGameStats = currentWR;
                    }
                } else {
                    currentWR.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(currentWR.player)) {
                        currentWR.accruedStatsOnLastPlay = true;
                    }
                    wrStats.push(currentWR);
                }
            });
        }
        SeasonPlayersStats.sortByFantasyPoints(wrStats);
        return wrStats;
    }

    tesSeasonStats(currentPlayersStats: PlayersStats, addCurrentPlayers: boolean): Array<PlayerStats> {
        let teStats = new Array<PlayerStats>();
        teStats = this.playersStats.filter(ps => ps.player.position === 'TE');
        if (addCurrentPlayers) {
            currentPlayersStats.awayTeamTEsStats.forEach(currentTE => {
                const foundTE = PlayersStats.findPlayerStatsInArray(currentTE.player, currentTE.teamAbbreviation, teStats);
                if (foundTE) {
                    foundTE.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(foundTE.player)) {
                        foundTE.accruedStatsOnLastPlay = true;
                    }
                    // foundTE.addPlayerStats(currentTE);
                    if (addCurrentPlayers) {
                        foundTE.currentGameStats = currentTE;
                    }
                } else {
                    currentTE.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(currentTE.player)) {
                        currentTE.accruedStatsOnLastPlay = true;
                    }
                    teStats.push(currentTE);
                }
            });
            currentPlayersStats.homeTeamTEsStats.forEach(currentTE => {
                const foundTE = PlayersStats.findPlayerStatsInArray(currentTE.player, currentTE.teamAbbreviation, teStats);
                if (foundTE) {
                    foundTE.currentGame = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(foundTE.player)) {
                        foundTE.accruedStatsOnLastPlay = true;
                    }
                    // foundTE.addPlayerStats(currentTE);
                    if (addCurrentPlayers) {
                        foundTE.currentGameStats = currentTE;
                    }
                } else {
                    currentTE.accruedStatsOnLastPlay = true;
                    if (currentPlayersStats.isPlayerInLastPlayStats(currentTE.player)) {
                        currentTE.accruedStatsOnLastPlay = true;
                    }
                    teStats.push(currentTE);
                }
            });
        }
        SeasonPlayersStats.sortByFantasyPoints(teStats);
        return teStats;
    }

}




