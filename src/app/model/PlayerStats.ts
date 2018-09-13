import { Player } from './Player';

export class PlayerStats {
    player: Player;
    teamAbbreviation: string;
    passingYards: number;
    rushingYards: number;
    receivingYards: number;

    constructor(player: Player, teamAbbr: string) {
        this.player = player;
        this.teamAbbreviation = teamAbbr;
        this.passingYards = 0;
        this.rushingYards = 0;
        this.receivingYards = 0;
    }

    get passYardsNoZero(): string {
        if (this.passingYards > 0) {
            return this.passingYards.toString();
        }
        return "";
    }

    get rushYardsNoZero(): string {
        if (this.rushingYards > 0) {
            return this.rushingYards.toString();
        }
        return "";
    }

    get recYardsNoZero(): string {
        if (this.receivingYards > 0) {
            return this.receivingYards.toString();
        }
        return "";
    }

    

}
