export class Game {
    id: number;
    gameid: string;
    awayTeam: any;
    homeTeam: any;
    date: Date;
    week: number;
    json: any;

    constructor(json: any) {
        this.json = json;
        this.id = json.id;
        this.date = json.date;
        this.awayTeam = json.awayTeam;
        this.homeTeam = json.homeTeam;
        this.week = json.week;
        // gameid is the string used to call the gameplaybyplay service
        const dateNoHyphens: string = this.date.toString().split('-').join('');
        this.gameid = dateNoHyphens + '-' + this.awayTeam.Abbreviation + '-' + this.homeTeam.Abbreviation;
    }

    get watched(): boolean {
        if (localStorage.getItem('watched' + this.gameid)) {
            if (localStorage.getItem('watched' + this.gameid) === 'true') {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
    set watched(watch: boolean) {
        localStorage.setItem('watched' + this.gameid, watch.toString());
    }

}
