import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwibmFtZSI6Im1vaCIsInJvbGUiOiJQbGF5ZXIiLCJuYmYiOjE2NjUzMDU3ODMsImV4cCI6MTk3NjI1OTM4MywiaWF0IjoxNjY1MzA1NzgzfQ.kwaphRkEJU90N905MgYpT_21u9xfIuEDgL5mdy9muKF0fJ29y206B9CPC26himj8bGEEhpojzwJ20PAS4w0H2g';

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request);
  }
}
