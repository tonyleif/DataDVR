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

}
