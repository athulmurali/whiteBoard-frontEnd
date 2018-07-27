import { Injectable } from '@angular/core';

import {  HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs';
import {TOKEN_NAME, TOKEN_NAME_REQUEST} from '../constants/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem(TOKEN_NAME);
    if (userToken) {
      console.log('hello, I am intercepting http');
      const cloned = req.clone({
        headers: req.headers.set(TOKEN_NAME_REQUEST, userToken)
      });
      return next.handle(cloned);
    } else { return next.handle(req); }

  }
}
