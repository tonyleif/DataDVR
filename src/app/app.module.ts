import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

const appRoutes: Routes = [
  {path: '', redirectTo: '/games', pathMatch: 'full'},
  {path: 'games',   component: GamesComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'about',   component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ], // CommonModule
  providers: [RegularSeasonGames2017Service, RegularSeasonPlays2017Service,
    RegularSeasonActivePlayers2017Service, TeamService, GameBoxScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
