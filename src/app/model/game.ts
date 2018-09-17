export class Game {
    id: number;
    gameid: string;
    awayTeam: any;
    homeTeam: any;
    date: Date;
    week: number;
    json: any;
    // private _watched: boolean;

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
        // if (localStorage.getItem('watched' + this.gameid) === null) {
        //     this._watched = false;
        // } else {
        //     this._watched = true;
        // }
    }

    // markAsWatched() {
    //     this._watched = true;
    //     localStorage.setItem('watched' + this.gameid, 'true');
    // }

    get watched(): boolean {
        // console.log('get watched()');
        // if (this._watched) {
        //     // alert('watched');
        //     // console.log(this.gameid + ' watched');
        //     return true;
        // }
        // if (!this._watched) {
        //     return false;
        // }
        if (localStorage.getItem('watched' + this.gameid)) {
            if (localStorage.getItem('watched' + this.gameid) === 'true') {
                // this._watched = true;
                return true;
            } else {
                // this._watched = false;
                return false;
            }
            // alert('watched');
            // console.log(this.gameid + ' watched');
            // return this._watched;
        }
        return false;
    }
    set watched(watch: boolean) {
        // this._watched = watch;
        localStorage.setItem('watched' + this.gameid, watch.toString());
    }

    // get bar():boolean {
    //     return this._bar;
    // }
    // set bar(theBar:boolean) {
    //     this._bar = theBar;
    // }
}
