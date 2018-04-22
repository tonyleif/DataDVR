import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegularSeasonGames2017Service } from './model/regular-season-games-2017.service';
import { RegularSeasonPlays2017Service } from './model/regular-season-plays-2017.service';
import { RegularSeasonActivePlayers2017Service } from './model/regular-season-active-players-2017.service';

import { GamesComponent } from './components/games/games.component';


@NgModule({
  declarations: [
    AppComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [RegularSeasonGames2017Service, RegularSeasonPlays2017Service, RegularSeasonActivePlayers2017Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
