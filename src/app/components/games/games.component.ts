import { Component, OnInit } from '@angular/core';
import { RegularSeasonGames2017Service } from '../../model/regular-season-games-2017.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: any;

  constructor(private gamesService: RegularSeasonGames2017Service) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.gamesService.getGames()
    .subscribe(result => {
                           this.games = JSON.stringify(result);
                        });
  }

}
