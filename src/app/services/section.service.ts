import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  ADD_SECTION_SUFFIX, COURSE_SEC_API_BASE_URL, DEL_SECTION_SUFFIX, ENROLL_STUDENT_SUFFIX, GET_SECTION_SUFFIX,
  SECTION_URL
} from '../constants/api';
import {Section} from '../models/Section';
import {User} from '../models/User';



@Injectable({providedIn: 'root' })
export class SectionService {


  constructor(private http: HttpClient) {}

  getSectionsByCourseId(courseId: number): Observable<any> {
    console.log(typeof(SECTION_URL));
    //
     const courseSectionURL = SECTION_URL.replace('courseId', courseId.toString());
    console.log(courseSectionURL);

    return this.http.get<any>(COURSE_SEC_API_BASE_URL + courseSectionURL);
  }

  getSectionById(sectionId: number): Observable<Section> {
    console.log(typeof(SECTION_URL));
    //
    const getSectionSuffix = GET_SECTION_SUFFIX.replace('sectionId', sectionId.toString());
    console.log(getSectionSuffix);

    return this.http.get<any>(COURSE_SEC_API_BASE_URL + getSectionSuffix);
  }

  createNewSection(courseId: number, newSection: Section): Observable<Section> {
    return this.http.post<Section>(COURSE_SEC_API_BASE_URL +
      ADD_SECTION_SUFFIX.replace('courseId', courseId.toString()) ,
      newSection);
  }

  updateSection(sectionId: number, newSection: Section): Observable<Section> {
    console.log("update data");
    console.log(newSection);
    return this.http.put<Section>(COURSE_SEC_API_BASE_URL +
      GET_SECTION_SUFFIX.replace('sectionId', sectionId.toString()) ,
      newSection);
  }


  deleteSectionById(courseId: number, sectionId: string): Observable<Section> {
    return this.http.delete<Section>(COURSE_SEC_API_BASE_URL +
      DEL_SECTION_SUFFIX.replace('courseId', courseId.toString()).
      replace('sectionId', sectionId.toString()));

  }

  enrollStudentId(userName: string, sectionId: string): Observable<User> {

    console.log('inside observable : enrollStudentId');

    const url = COURSE_SEC_API_BASE_URL + ENROLL_STUDENT_SUFFIX
      .replace('username', userName)
      .replace('sectionId', sectionId);
    return this.http.post<User>(url, null);


  }

  unrollStudentId(userName: string, sectionId: string): Observable<User> {

    console.log('inside observable : unrollStudentId');

    const url = COURSE_SEC_API_BASE_URL + ENROLL_STUDENT_SUFFIX
      .replace('username', userName)
      .replace('sectionId', sectionId);
    return this.http.delete<User>(url);


  }
}
