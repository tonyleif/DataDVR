import { Injectable } from '@angular/core';
import { Team } from './Team';
import { TEAMS } from './Team-data';

@Injectable()
export class TeamService {

  constructor() { }

  getTeams(): Team[] {
    return TEAMS;
  }

  getTeam(id: number): Team {
    // console.log('getTeam ' + id);
    const teams: Team[] = this.getTeams();
    const team: Team = teams.find(t => t.ID == id);
    return Object.assign({}, team);
  }

}
