import { TestBed, inject } from '@angular/core/testing';

import { RegularSeasonPlays2017Service } from './regular-season-plays-2017.service';

describe('RegularSeasonPlays2017Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegularSeasonPlays2017Service]
    });
  });

  it('should be created', inject([RegularSeasonPlays2017Service], (service: RegularSeasonPlays2017Service) => {
    expect(service).toBeTruthy();
  }));
});
