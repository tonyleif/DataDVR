import { Component, OnInit } from '@angular/core';

// import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
// import { NgxTypeaheadModule } from 'ngx-typeahead';
// import { NgbdTypeaheadBasic } from '../typeahead-basic/typeahead-basic';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { RegularSeasonActivePlayers2017Service } from '../../model/regular-season-active-players-2017.service';
import { Player } from '../../model/Player';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {
  activePlayers: Array<Player> = [];
  myLineupIds: Set<Number>;
  myLineup: Array<Player>;

  selectedPlayer: Player;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.activePlayers.filter(p => p.fullName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: { fullName: string }) => x.fullName;

  constructor(private activePlayersService: RegularSeasonActivePlayers2017Service) {
    this.loadPlayerArray();
  }

  ngOnInit() {
  }

  loadPlayerArray() {
    // console.log('loadPlayerArray');
    this.activePlayers.length = 0; // empty the array without making a new array
    // create a local variable because this.players can't be referenced inside the observable subscription
    this.activePlayersService.getActivePlayersFromAPI().subscribe(result => {
      const playerArray = result;
      for (let i = 0; i < playerArray.length; i++) {
        this.activePlayers.push(playerArray[i]);
      }
    });
  }

  deleteSeasonStats() {
    localStorage.removeItem('SeasonPlayersStats');
  }

  clearWatchedGames() {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).substring(0, 7) === 'watched') {
        localStorage.removeItem(localStorage.key(i));
      }
    }
  }

}
