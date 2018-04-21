export class LineOfScrimmage {
    team: string;
    yardLine: number;

    constructor(json: any) {
        console.log('LineOfScrimmage constructor ' + JSON.stringify(json));
        console.log(json.team);
        this.team = json.team;
        this.yardLine = json.yardLine;
    }

}
