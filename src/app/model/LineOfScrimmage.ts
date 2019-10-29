export class LineOfScrimmage {
    team: string;
    yardLine: number;

    constructor(json: any) {
        this.team = json.team;
        this.yardLine = json.yardLine;
    }

}
