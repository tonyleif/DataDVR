import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RegularSeasonGames2017Service } from './model/regular-season-games-2017.service';
import { GamesComponent } from './components/games/games.component';


@NgModule({
  declarations: [
    AppComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RegularSeasonGames2017Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
