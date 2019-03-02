export class MySportsFeedsError {
    week: number;
    gameId: string;
    playQuarterAndTime: string;
    error: string;

    constructor(json: any) {
        if (json) {
            this.week = json.week;
            this.gameId = json.gameId;
            this.playQuarterAndTime = json.playQuarterAndTime;
            this.error = json.error;
        }
    }

}
