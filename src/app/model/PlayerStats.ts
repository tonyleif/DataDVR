import { Player } from './Player';

export class PlayerStats {
    player: Player;
    teamAbbreviation: string;
    passingYards: number;
    rushingYards: number;
    receivingYards: number;
    passingTouchdowns: number;
    touchdowns: number;
    twoPointConversions: number;
    extraPoints: number;
    fieldGoals: number;
    fieldGoals50Plus: number;
    interceptions: number;
    // Not accumulating stats below yet
    gamesPlayed: number;
    passAttempts: number;
    passCompletions: number;
    rushAttempts: number;
    targets: number;
    receptions: number;
    fumblesLost: number;
    passingInterceptions: number;
    blockedKicks: number;
    defensiveFumbleRecoveries: number;
    safeties: number;
    twoPointConversionReturns: number;
    fieldGoalAttempts: number;
    extraPointAttempts: number;
    accruedStatsOnLastPlay: boolean;
    newToSet: boolean;
    currentGame: boolean;

    constructor(player: Player, teamAbbr: string) {
        this.player = player;
        this.teamAbbreviation = teamAbbr;
        this.gamesPlayed = 0;
        this.passingYards = 0;
        this.rushingYards = 0;
        this.receivingYards = 0;
        this.passingTouchdowns = 0;
        this.touchdowns = 0;
        this.twoPointConversions = 0;
        this.extraPoints = 0;
        this.fieldGoals = 0;
        this.fieldGoals50Plus = 0;
        this.interceptions = 0;
        this.passAttempts = 0;
        this.passCompletions = 0;
        this.rushAttempts = 0;
        this.targets = 0;
        this.receptions = 0;
        this.fumblesLost = 0;
        this.passingInterceptions = 0;
        this.blockedKicks = 0;
        this.defensiveFumbleRecoveries = 0;
        this.safeties = 0;
        this.twoPointConversionReturns = 0;
        this.accruedStatsOnLastPlay = false;
        this.newToSet = false;
        this.currentGame = false;
    }

    addPlayerStats(ps: PlayerStats) {
        this.gamesPlayed += 1;
        this.passingYards += ps.passingYards;
        this.rushingYards += ps.rushingYards;
        this.receivingYards += ps.receivingYards;
        this.passingTouchdowns += ps.passingTouchdowns;
        this.touchdowns += ps.touchdowns;
        this.twoPointConversions += ps.twoPointConversions;
        this.extraPoints += ps.extraPoints;
        this.fieldGoals += ps.fieldGoals;
        this.fieldGoals50Plus += ps.fieldGoals50Plus;
        this.interceptions += ps.interceptions;
        // Not accumulating stats below yet
        this.passAttempts += ps.passAttempts;
        this.passCompletions += ps.passCompletions;
        this.rushAttempts += ps.rushAttempts;
        this.targets += ps.targets;
        this.receptions += ps.receptions;
        this.fumblesLost += ps.fumblesLost;
        this.passingInterceptions += ps.passingInterceptions;
        this.blockedKicks += ps.blockedKicks;
        this.defensiveFumbleRecoveries += ps.defensiveFumbleRecoveries;
        this.safeties += ps.safeties;
        this.twoPointConversionReturns += ps.twoPointConversionReturns;
        this.fieldGoalAttempts += ps.fieldGoalAttempts;
        this.extraPointAttempts += ps.extraPointAttempts;
    }

    subtractPlayerStats(ps: PlayerStats) {
        this.gamesPlayed -= 1;
        if (this.gamesPlayed > 0) {
            this.passingYards -= ps.passingYards;
            this.rushingYards -= ps.rushingYards;
            this.receivingYards -= ps.receivingYards;
            this.passingTouchdowns -= ps.passingTouchdowns;
            this.touchdowns -= ps.touchdowns;
            this.twoPointConversions -= ps.twoPointConversions;
            this.extraPoints -= ps.extraPoints;
            this.fieldGoals -= ps.fieldGoals;
            this.fieldGoals50Plus -= ps.fieldGoals50Plus;
            this.interceptions -= ps.interceptions;
            // Not accumulating stats below yet
            this.passAttempts -= ps.passAttempts;
            this.passCompletions -= ps.passCompletions;
            this.rushAttempts -= ps.rushAttempts;
            this.targets -= ps.targets;
            this.receptions -= ps.receptions;
            this.fumblesLost -= ps.fumblesLost;
            this.passingInterceptions -= ps.passingInterceptions;
            this.blockedKicks -= ps.blockedKicks;
            this.defensiveFumbleRecoveries -= ps.defensiveFumbleRecoveries;
            this.safeties -= ps.safeties;
            this.twoPointConversionReturns -= ps.twoPointConversionReturns;
            this.fieldGoalAttempts -= ps.fieldGoalAttempts;
            this.extraPointAttempts -= ps.extraPointAttempts;
        } else {
            this.passingYards = 0;
            this.rushingYards = 0;
            this.receivingYards = 0;
            this.passingTouchdowns = 0;
            this.touchdowns = 0;
            this.twoPointConversions = 0;
            this.extraPoints = 0;
            this.fieldGoals = 0;
            this.fieldGoals50Plus = 0;
            this.interceptions = 0;
            // Not accumulating stats below yet
            this.passAttempts = 0;
            this.passCompletions = 0;
            this.rushAttempts = 0;
            this.targets = 0;
            this.receptions = 0;
            this.fumblesLost = 0;
            this.passingInterceptions = 0;
            this.blockedKicks = 0;
            this.defensiveFumbleRecoveries = 0;
            this.safeties = 0;
            this.twoPointConversionReturns = 0;
            this.fieldGoalAttempts = 0;
            this.extraPointAttempts = 0;
        }
    }

    get fantasyPoints(): number {
        let fantasyPointsTally = 0;
        // general
        fantasyPointsTally += this.touchdowns * 6;
        fantasyPointsTally += this.twoPointConversions * 2;
        // passing
        fantasyPointsTally += this.passingYards * .04;
        fantasyPointsTally += this.passingTouchdowns * 4;
        fantasyPointsTally += this.passingInterceptions * -1;
        // rushing
        fantasyPointsTally += this.rushingYards * .1;
        // receiving
        fantasyPointsTally += this.receivingYards * .1;
        // kicking
        fantasyPointsTally += this.extraPoints;
        fantasyPointsTally += this.fieldGoals * 3;
        fantasyPointsTally += this.fieldGoals50Plus;
        // dst
        fantasyPointsTally += this.interceptions * 2;
        fantasyPointsTally += this.blockedKicks * 2;
        fantasyPointsTally += this.defensiveFumbleRecoveries * 2;
        fantasyPointsTally += this.safeties * 2;

        return Math.round(fantasyPointsTally * 100) / 100;
    }

    get passYardsNoZero(): string {
        if (this.passingYards !== 0) {
            return this.passingYards.toString();
        }
        return '';
    }

    get rushYardsNoZero(): string {
        if (this.rushingYards !== 0) {
            return this.rushingYards.toString();
        }
        return '';
    }

    get recYardsNoZero(): string {
        if (this.receivingYards !== 0) {
            return this.receivingYards.toString();
        }
        return '';
    }

    get passingTouchdownsNoZero(): string {
        if (this.passingTouchdowns !== 0) {
            return this.passingTouchdowns.toString();
        }
        return '';
    }

    get touchdownsNoZero(): string {
        if (this.touchdowns !== 0) {
            return this.touchdowns.toString();
        }
        return '';
    }

    get extraPointsNoZero(): string {
        if (this.extraPoints !== 0) {
            return this.extraPoints.toString();
        }
        return '';
    }

    get fieldGoalsNoZero(): string {
        if (this.fieldGoals !== 0) {
            return this.fieldGoals.toString();
        }
        return '';
    }

    get fieldGoals50PlusNoZero(): string {
        if (this.fieldGoals50Plus !== 0) {
            return this.fieldGoals50Plus.toString();
        }
        return '';
    }

    get interceptionsNoZero(): string {
        if (this.interceptions !== 0) {
            return this.interceptions.toString();
        }
        return '';
    }

    get safetiesNoZero(): string {
        if (this.safeties !== 0) {
            return this.safeties.toString();
        }
        return '';
    }

    get twoPointConversionReturnsNoZero(): string {
        if (this.safeties !== 0) {
            return this.twoPointConversionReturns.toString();
        }
        return '';
    }

    get passAttemptsCompletionsNoZero(): string {
        if (this.passAttempts !== 0) {
            return this.passCompletions.toString() + '/' + this.passAttempts.toString();
        }
        return '';
    }

    get rushAttemptsNoZero(): string {
        if (this.rushAttempts !== 0) {
            return this.rushAttempts.toString();
        }
        return '';
    }

    get receptionsTargetsNoZero(): string {
        if (this.targets !== 0) {
            return this.receptions.toString() + '/' + this.targets.toString();
        }
        return '';
    }

    get turnoversNoZero(): string {
        if (this.passingInterceptions !== 0 || this.fumblesLost !== 0) {
            return (this.passingInterceptions + this.fumblesLost).toString();
        }
        return '';
    }

}
