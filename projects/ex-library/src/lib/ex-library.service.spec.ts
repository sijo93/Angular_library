import { TestBed } from '@angular/core/testing';

import { ExLibraryService } from './ex-library.service';

describe('ExLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExLibraryService = TestBed.get(ExLibraryService);
    expect(service).toBeTruthy();
  });
});
