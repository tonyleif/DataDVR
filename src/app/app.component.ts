import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data DVR';
  // offlineMode: boolean;

  // constructor() {
  //   this.offlineMode = false;
  //   if (localStorage.getItem('offlineMode') === 'true') {
  //     this.offlineMode = true;
  //   }
  //  }
}
