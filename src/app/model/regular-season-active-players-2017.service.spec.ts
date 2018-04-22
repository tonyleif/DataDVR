import { TestBed, inject } from '@angular/core/testing';

import { RegularSeasonActivePlayers2017Service } from './regular-season-active-players-2017.service';

describe('RegularSeasonActivePlayers2017Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegularSeasonActivePlayers2017Service]
    });
  });

  it('should be created', inject([RegularSeasonActivePlayers2017Service], (service: RegularSeasonActivePlayers2017Service) => {
    expect(service).toBeTruthy();
  }));
});
