import { PlayersStats } from './PlayersStats';
import { PlayerStats } from './PlayerStats';
import { Player } from './Player';

export class GameBoxScore {
    // json: string;
    awayPlayerStatsSet: Set<PlayerStats>;
    homePlayerStatsSet: Set<PlayerStats>;
    awayTeamAbbr: string;
    homeTeamAbbr: string;

    constructor(json: any) {
        // this.json = JSON.stringify(json);
        const jsonObject: any = json;
        // Teams
        this.awayTeamAbbr = jsonObject.gameboxscore.game.awayTeam.Abbreviation;
        this.homeTeamAbbr = jsonObject.gameboxscore.game.homeTeam.Abbreviation;
        // Away players
        const awayPlayersStatsJson = jsonObject.gameboxscore.awayTeam.awayPlayers.playerEntry;
        this.awayPlayerStatsSet = new Set<PlayerStats>();
        awayPlayersStatsJson.forEach(playerEntry => {
            const player = new Player(playerEntry.player);
            const playerStats = new PlayerStats(player, jsonObject.gameboxscore.game.awayTeam.Abbreviation);
            if (playerEntry.stats) {
                if (playerEntry.stats.FumOppRec) {
                    playerStats.fumblesLost = Number(playerEntry.stats.FumOppRec['#text']);
                }
                if (playerEntry.stats.PassInt) {
                    playerStats.passingInterceptions = Number(playerEntry.stats.PassInt['#text']);
                }
                if (playerEntry.stats.KrTD) {
                    playerStats.touchdowns += Number(playerEntry.stats.KrTD['#text']);
                }
                // if (playerEntry.stats.KrTD) {
                //     playerStats.touchdowns += Number(playerEntry.stats.KrTD['#text']);
                // }
                if (playerEntry.stats.PassAttempts) {
                    playerStats.passAttempts = Number(playerEntry.stats.PassAttempts['#text']);
                }
                if (playerEntry.stats.PassTD) {
                    playerStats.passingTouchdowns += Number(playerEntry.stats.PassTD['#text']);
                }
                if (playerEntry.stats.PassYards) {
                    playerStats.passingYards += Number(playerEntry.stats.PassYards['#text']);
                }
                if (playerEntry.stats.PrTD) {
                    playerStats.touchdowns += Number(playerEntry.stats.PrTD['#text']);
                }
                if (playerEntry.stats.RecTD) {
                    playerStats.touchdowns += Number(playerEntry.stats.RecTD['#text']);
                }
                if (playerEntry.stats.RecYards) {
                    playerStats.receivingYards += Number(playerEntry.stats.RecYards['#text']);
                }
                if (playerEntry.stats.RushAttempts) {
                    playerStats.rushAttempts += Number(playerEntry.stats.RushAttempts['#text']);
                }
                if (playerEntry.stats.RushTD) {
                    playerStats.touchdowns += Number(playerEntry.stats.RushTD['#text']);
                }
                if (playerEntry.stats.RushYards) {
                    playerStats.rushingYards += Number(playerEntry.stats.RushYards['#text']);
                }
                // Kicking
                if (playerEntry.stats.FgAtt) {
                    playerStats.fieldGoalAttempts += Number(playerEntry.stats.FgAtt['#text']);
                }
                if (playerEntry.stats.XpAtt) {
                    playerStats.extraPointAttempts += Number(playerEntry.stats.XpAtt['#text']);
                }
                this.awayPlayerStatsSet.add(playerStats);
            }
        });
        // Home players
        const homePlayersStatsJson = jsonObject.gameboxscore.homeTeam.homePlayers.playerEntry;
        this.homePlayerStatsSet = new Set<PlayerStats>();
        homePlayersStatsJson.forEach(playerEntry => {
            const player = new Player(playerEntry.player);
            const playerStats = new PlayerStats(player, jsonObject.gameboxscore.game.homeTeam.Abbreviation);
            if (playerEntry.stats) {
                if (playerEntry.stats.FumOppRec) {
                    playerStats.fumblesLost = Number(playerEntry.stats.FumOppRec['#text']);
                }
                if (playerEntry.stats.PassInt) {
                    playerStats.passingInterceptions = Number(playerEntry.stats.PassInt['#text']);
                }
                if (playerEntry.stats.KrTD) {
                    playerStats.touchdowns += Number(playerEntry.stats.KrTD['#text']);
                }
                // if (playerEntry.stats.KrTD) {
                //     playerStats.touchdowns += Number(playerEntry.stats.KrTD['#text']);
                // }
                if (playerEntry.stats.PassAttempts) {
                    playerStats.passAttempts = Number(playerEntry.stats.PassAttempts['#text']);
                }
                if (playerEntry.stats.PassTD) {
                    playerStats.passingTouchdowns += Number(playerEntry.stats.PassTD['#text']);
                }
                if (playerEntry.stats.PassYards) {
                    playerStats.passingYards += Number(playerEntry.stats.PassYards['#text']);
                }
                if (playerEntry.stats.PrTD) {
                    playerStats.touchdowns += Number(playerEntry.stats.PrTD['#text']);
                }
                if (playerEntry.stats.RecTD) {
                    playerStats.touchdowns += Number(playerEntry.stats.RecTD['#text']);
                }
                if (playerEntry.stats.RecYards) {
                    playerStats.receivingYards += Number(playerEntry.stats.RecYards['#text']);
                }
                if (playerEntry.stats.RushAttempts) {
                    playerStats.rushAttempts += Number(playerEntry.stats.RushAttempts['#text']);
                }
                if (playerEntry.stats.RushTD) {
                    playerStats.touchdowns += Number(playerEntry.stats.RushTD['#text']);
                }
                if (playerEntry.stats.RushYards) {
                    playerStats.rushingYards += Number(playerEntry.stats.RushYards['#text']);
                }
                // Kicking
                if (playerEntry.stats.FgAtt) {
                    playerStats.fieldGoalAttempts += Number(playerEntry.stats.FgAtt['#text']);
                }
                if (playerEntry.stats.XpAtt) {
                    playerStats.extraPointAttempts += Number(playerEntry.stats.XpAtt['#text']);
                }
                // console.log(this.playerStatsSet.size);
                this.homePlayerStatsSet.add(playerStats);
            }
        });
    }

    public get awayTeamQBs() {
        const playerStatsSet = new Set<PlayerStats>();
        this.awayPlayerStatsSet.forEach(element => {
            // console.log(JSON.stringify(element));
            if (element.player.position === 'QB') {
                playerStatsSet.add(element);
            }
        });
        return playerStatsSet;
    }

    public get awayTeamRBs() {
        const playerStatsSet = new Set<PlayerStats>();
        this.awayPlayerStatsSet.forEach(element => {
            // console.log(JSON.stringify(element));
            if (element.player.position === 'RB' || element.player.position === 'FB') {
                playerStatsSet.add(element);
            }
        });
        return playerStatsSet;
    }

    public get awayTeamWRs() {
        const playerStatsSet = new Set<PlayerStats>();
        this.awayPlayerStatsSet.forEach(element => {
            if (element.player.position === 'WR') {
                playerStatsSet.add(element);
            }
        });
        return playerStatsSet;
    }

    public get awayTeamTEs() {
        const playerStatsSet = new Set<PlayerStats>();
        this.awayPlayerStatsSet.forEach(element => {
            if (element.player.position === 'TE') {
                playerStatsSet.add(element);
            }
        });
        return playerStatsSet;
    }

    public get awayTeamKs() {
        const playerStatsSet = new Set<PlayerStats>();
        this.awayPlayerStatsSet.forEach(element => {
            if (element.player.position === 'K') {
                playerStatsSet.add(element);
            }
        });
        return playerStatsSet;
    }

    public get homeTeamQBs() {
        const playerStatsSet = new Set<PlayerStats>();
        this.homePlayerStatsSet.forEach(element => {
            // console.log(JSON.stringify(element));
            if (element.player.position === 'QB') {
                playerStatsSet.add(element);
            }
        });
        return playerStatsSet;
    }

    public get homeTeamRBs() {
        const playerStatsSet = new Set<PlayerStats>();
        this.homePlayerStatsSet.forEach(element => {
            // console.log(JSON.stringify(element));
            if (element.player.position === 'RB' || element.player.position === 'FB') {
                playerStatsSet.add(element);
            }
        });
        return playerStatsSet;
    }

    public get homeTeamWRs() {
        const playerStatsSet = new Set<PlayerStats>();
        this.homePlayerStatsSet.forEach(element => {
            if (element.player.position === 'WR') {
                playerStatsSet.add(element);
            }
        });
        return playerStatsSet;
    }

    public get homeTeamTEs() {
        const playerStatsSet = new Set<PlayerStats>();
        this.homePlayerStatsSet.forEach(element => {
            if (element.player.position === 'TE') {
                playerStatsSet.add(element);
            }
        });
        return playerStatsSet;
    }

    public get homeTeamKs() {
        const playerStatsSet = new Set<PlayerStats>();
        this.homePlayerStatsSet.forEach(element => {
            if (element.player.position === 'K') {
                playerStatsSet.add(element);
            }
        });
        return playerStatsSet;
    }

    public findPlayerStats(player: Player, teamAbbr: string): PlayerStats {
        if (player == null) {
            return null;
        }
        // Which team?
        let boxScorePlayerStats: Set<PlayerStats>;
        if (teamAbbr === this.awayTeamAbbr) {
            boxScorePlayerStats = this.awayPlayerStatsSet;
        } else {
            boxScorePlayerStats = this.homePlayerStatsSet;
        }
        // Find player in set
        let newPlayerStats: PlayerStats;
        if (boxScorePlayerStats.size > 0) {
            boxScorePlayerStats.forEach(function (ps: PlayerStats) {
                if (ps.player.id === player.id) {
                    newPlayerStats = ps;
                    return ps;
                }
            });
        }
        if (newPlayerStats != null) {
            return newPlayerStats;
        }
        return null;
    }
}
