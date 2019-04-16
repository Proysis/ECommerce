/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerAuthService } from './customer-auth.service';

describe('Service: CustomerAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAuthService]
    });
  });

  it('should ...', inject([CustomerAuthService], (service: CustomerAuthService) => {
    expect(service).toBeTruthy();
  }));
});
