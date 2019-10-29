import { TestBed, inject } from '@angular/core/testing';

import { GameBoxScoreService } from './game-box-score.service';

describe('GameBoxScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameBoxScoreService]
    });
  });

  it('should be created', inject([GameBoxScoreService], (service: GameBoxScoreService) => {
    expect(service).toBeTruthy();
  }));
});
