import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const BASE_URL = 'https://mean-exam-manager-backend.herokuapp.com';

const SECTION_URL = '/api/course/100/section';
console.log('BASE_URL  ' + BASE_URL);

@Injectable({providedIn: 'root' })
export class SectionService {

  constructor(private http: HttpClient) {}


  getSection(): Observable<any> {
    //
    return this.http
      .get(SECTION_URL);
  }
}
