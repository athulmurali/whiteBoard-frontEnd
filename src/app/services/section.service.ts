import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {COURSE_SEC_API_BASE_URL, SECTION_URL} from '../constants/api';
import {Section} from '../models/Section';


console.log( );

@Injectable({providedIn: 'root' })
export class SectionService {

  constructor(private http: HttpClient) {}


  getSectionsByCourseId(courseId: number): Observable<any> {
    console.log(typeof(SECTION_URL))
    //
     const courseSectionURL = SECTION_URL.replace('courseId', courseId.toString())
    console.log(courseSectionURL)

    return this.http.get<any>(COURSE_SEC_API_BASE_URL + courseSectionURL);
  }



  getSectionById(sectionId: number): Observable<Section> {
    console.log(typeof(SECTION_URL))
    //
    const getSectionSuffix = SECTION_URL.replace('sectionId', sectionId.toString())
    console.log(getSectionSuffix)

    return this.http.get<any>(COURSE_SEC_API_BASE_URL + getSectionSuffix);
  }
}
