import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { HttpClientModule } from '@angular/common/http';
// import { NgbdTypeaheadBasic } from './components/typeahead-basic/typeahead-basic';
// import {TypeaheadModule} from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead';

// import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RegularSeasonGames2017Service } from './model/regular-season-games-2017.service';
import { RegularSeasonPlays2017Service } from './model/regular-season-plays-2017.service';
import { RegularSeasonActivePlayers2017Service } from './model/regular-season-active-players-2017.service';
import { TeamService } from './model/team.service';
import { GamesComponent } from './components/games/games.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { Route } from '@angular/compiler/src/core';
import { RouterLinkActive } from '@angular/router';
import { GameBoxScoreService } from './model/game-box-score.service';
import { LineupComponent } from './components/lineup/lineup.component';
import { PlayerComponent } from './components/shared/player/player.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/games', pathMatch: 'full'},
  {path: 'games',   component: GamesComponent },
  {path: 'lineup',   component: LineupComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'about',   component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    ContactComponent,
    AboutComponent,
    LineupComponent,
    PlayerComponent // ,
    // NgbdTypeaheadBasic
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule // ,
    // TypeaheadModule // ,
    // HttpClientModule,
  ], // NgbModule, CommonModule -- HttpClientModule, NgbModule
  bootstrap: [AppComponent]
})
export class AppModule { }
