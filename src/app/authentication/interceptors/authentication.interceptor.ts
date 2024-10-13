import { TokenService } from '../services/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.tokenService.hasToken()) {
      const token = this.tokenService.getToken();

      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      })
    }

    return next.handle(request);
  }
}
