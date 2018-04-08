import { Component, OnInit } from '@angular/core';
import { RegularSeasonGames2017Service } from '../../model/regular-season-games-2017.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  selectedWeek = 0;
  weeks: Set<number>;
  games: Array<string>;
  gamesJSON: string;

  constructor(private gamesService: RegularSeasonGames2017Service) { }

  ngOnInit() {
    this.weeks = this.gamesService.getWeeks();
    this.gamesJSON = this.gamesService.getGamesJSON();
    this.games = this.gamesService.getGamesByWeek(this.selectedWeek);
  }

  setWeek(week: number) {
    this.selectedWeek = week;
    this.games = this.gamesService.getGamesByWeek(this.selectedWeek);
  }

}
