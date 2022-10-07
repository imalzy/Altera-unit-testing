import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be isLoggedin when has jwt', (done: DoneFn)=>{
    localStorage.setItem('jwt_token', '123131');
    expect(service.isLoggedIn()).toBeTruthy;
    done();
  })

  it('should be isLoggedin when no jwt', (done: DoneFn)=>{
    expect(service.isLoggedIn()).toBeFalsy;
    done();
  })
});
