// import { Team } from './Team';
// import { TeamService } from './team.service';

export class Game {
    id: number;
    gameid: string;
    awayTeam: any;
    homeTeam: any;
    date: Date;
    week: number;
    json: any;
    // awayTeamObject: Team;
    // homeTeamObject: Team;

    constructor(json: any) { // , awayTeamObject?: Team, homeTeamObject?: Team
        this.json = json;
        this.id = json.id;
        this.date = json.date;
        this.awayTeam = json.awayTeam;
        this.homeTeam = json.homeTeam;
        this.week = json.week;
        // gameid is the string used to call the gameplaybyplay service
        const dateNoHyphens: string = this.date.toString().split('-').join('');
        this.gameid = dateNoHyphens + '-' + this.awayTeam.Abbreviation + '-' + this.homeTeam.Abbreviation;
        // if (awayTeamObject) {
        //     this.awayTeamObject = awayTeamObject;
        // }
        // if (homeTeamObject) {
        //     this.homeTeamObject = homeTeamObject;
        // }
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

    // get gameAwayTeamObject(): Team {
    //     if (this.awayTeam) {
    //       console.log(this.awayTeam);
    //       const team: Team = this.teamService.getTeam(this.awayTeam.ID);
    //       return team;
    //     } else {
    //       return null;
    //     }
    //   }

}
