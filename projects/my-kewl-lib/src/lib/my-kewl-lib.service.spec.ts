import { TestBed } from '@angular/core/testing';

import { MyKewlLibService } from './my-kewl-lib.service';

describe('MyKewlLibService', () => {
  let service: MyKewlLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyKewlLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
