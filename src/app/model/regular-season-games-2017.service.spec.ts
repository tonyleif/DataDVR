import { TestBed, inject } from '@angular/core/testing';

import { RegularSeasonGames2017Service } from './regular-season-games-2017.service';

describe('RegularSeasonGames2017Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegularSeasonGames2017Service]
    });
  });

  it('should be created', inject([RegularSeasonGames2017Service], (service: RegularSeasonGames2017Service) => {
    expect(service).toBeTruthy();
  }));
});
