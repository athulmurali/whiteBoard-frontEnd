import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
const BASE_URL = 'https://mean-exam-manager-backend.herokuapp.com';

const LOGIN_API_URL = BASE_URL + '/api/login';
const REGISTER_API_URL = BASE_URL + '/api/register';

const PROFILE_API_URL = BASE_URL + '/api/profile';

@Injectable({providedIn: 'root' })
export class UserService {


  constructor(private http: HttpClient) { }
  loginUser(userCredentials): Observable<any> {
    //
    return this.http
      .post(LOGIN_API_URL, userCredentials);
  }

  // token added by interceptor
  getProfile(): Observable<any> {
    //
    return this.http.get(PROFILE_API_URL);
  }

  // token added by interceptor
  // update and edit are used interchangeably
  updateProfile(user: User): Observable<any> {
    return this.http.put(PROFILE_API_URL,user);
  }

  // token added by interceptor
  registerUser(user: User): Observable<any> {
    //
    return this.http.post<User>(REGISTER_API_URL, user);
  }


}
