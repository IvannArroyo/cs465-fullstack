import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { JwtInterceptor } from './jwt-interceptor';
import { AuthenticationService } from '../services/authentication.service';

describe('JwtInterceptor', () => {
  let interceptor: JwtInterceptor;

  beforeEach(() => {
    const authServiceStub = {
      isLoggedIn: () => true,
      getToken: () => 'mock-token'
    };

    TestBed.configureTestingModule({
      providers: [
        JwtInterceptor,
        { provide: AuthenticationService, useValue: authServiceStub }
      ]
    });

    interceptor = TestBed.inject(JwtInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header if logged in', () => {
    const request = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: (req: HttpRequest<any>) => {
        expect(req.headers.get('Authorization')).toBe('Bearer mock-token');
        return {
          subscribe: () => {},
        } as any;
      }
    };

    interceptor.intercept(request, next);
  });
});
