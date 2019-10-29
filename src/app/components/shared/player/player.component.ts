import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../model/Player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  get offlineMode(): boolean {
    return (localStorage.getItem('offlineMode') === 'true');
  }

  constructor() { }

  ngOnInit() {
  }

}
