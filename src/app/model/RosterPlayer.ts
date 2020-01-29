import { Player } from './Player';

export class RosterPlayer {
    json: any;
    player: Player;
    starter: boolean;

    constructor(json: any) {
        this.json = json;
        // const jsonObject: any = JSON.parse(json);
        this.player = new Player(json.player);
        this.starter = json.starter;
    }

}
