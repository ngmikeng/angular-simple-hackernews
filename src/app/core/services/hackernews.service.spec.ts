import { TestBed, inject } from '@angular/core/testing';

import { HackernewsService } from './hackernews.service';

describe('HackernewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackernewsService]
    });
  });

  it('should be created', inject([HackernewsService], (service: HackernewsService) => {
    expect(service).toBeTruthy();
  }));
});
