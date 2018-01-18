import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmCandeactiveGuard } from './confirm-candeactive.guard';

describe('ConfirmCandeactiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmCandeactiveGuard]
    });
  });

  it('should ...', inject([ConfirmCandeactiveGuard], (guard: ConfirmCandeactiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
