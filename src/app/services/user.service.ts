import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
const BASE_URL = 'https://mean-exam-manager-backend.herokuapp.com';

const LOGIN_API_URL = BASE_URL + '/api/login';
const PROFILE_API_URL = BASE_URL + '/api/profile';

@Injectable({providedIn: 'root' })
export class UserService {


  constructor(private http: HttpClient) { }
  loginUser(userCredentials): Observable<any> {
    //
    return this.http
      .post(LOGIN_API_URL, userCredentials)
  }

  // token added by interceptor
  getProfile(): Observable<any> {
    //
    return this.http.get(PROFILE_API_URL);
  }



}
