import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  offlineMode: boolean;

  constructor() {
    this.offlineMode = false;
    if (localStorage.getItem('offlineMode') === 'true') {
      this.offlineMode = true;
    }
  }

  ngOnInit() {
  }

  toggleOfflineMode() {
    this.offlineMode = !this.offlineMode;
    localStorage.setItem('offlineMode', this.offlineMode.toString());
  }

}
