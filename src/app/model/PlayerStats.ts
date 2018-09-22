import { Player } from './Player';

export class PlayerStats {
    player: Player;
    teamAbbreviation: string;
    passingYards: number;
    rushingYards: number;
    receivingYards: number;
    passingTouchdowns: number;
    touchdowns: number;
    extraPoints: number;
    fieldGoals: number;
    fieldGoals50Plus: number;
    accruedStatsOnLastPlay: boolean;

    constructor(player: Player, teamAbbr: string) {
        this.player = player;
        this.teamAbbreviation = teamAbbr;
        this.passingYards = 0;
        this.rushingYards = 0;
        this.receivingYards = 0;
        this.passingTouchdowns = 0;
        this.touchdowns = 0;
        this.extraPoints = 0;
        this.fieldGoals = 0;
        this.fieldGoals50Plus = 0;
        this.accruedStatsOnLastPlay = false;
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
}
