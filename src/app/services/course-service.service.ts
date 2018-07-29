import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Course} from '../models/Course';

import { HttpClient } from '@angular/common/http';
import {Module} from '../models/Module';
import {Lesson} from '../models/Lesson';
import {Topic} from '../models/Topic';
import {Widget} from '../models/Widget';
import {GET_ENROLLED_SECTION} from '../constants/api';

const BASE_URL = 'https://neu-course-manager.herokuapp.com';
console.log('BASE_URL  ' + BASE_URL);

const COURSE_API_URL = BASE_URL + '/api/course';


@Injectable({providedIn: 'root' })
export class CourseServiceService {

  constructor(private  http: HttpClient) {
  }
  findAllCoursesSub(): Observable<Course[]> {
    console.log('IN observable');
    return this.http.get<Course[]>(COURSE_API_URL);
    // return of(Courses);
  }
  findCourseById(courseId: number): Observable<Course> {
    console.log('IN observable : findCourseById');
    return this.http.get<Course>(COURSE_API_URL + '/' + courseId);
    // return of(Courses);
  }
  findModulesByCourseId(courseId: number): Observable<Module[]> {
    console.log('IN observable : findCourseById');
    return this.http.get<Module[]>(COURSE_API_URL + '/' + courseId + '/module');
  }

  findLessonsByCourseModuleId(courseId: number, moduleId: number): Observable<Lesson[]> {
    console.log('IN observable : findCourseById');
    return this.http.get<Lesson[]>(COURSE_API_URL + '/' + courseId + '/module/' + moduleId + '/lesson');
  }

  findTopicsByCourseModuleLesson(courseId: number, moduleId: number, lessonId: number): Observable<Topic[]> {
    console.log('IN observable : findCourseById');
    return this.http.get<Topic[]>(COURSE_API_URL + '/' + courseId + '/module/' + moduleId + '/lesson/'
    + lessonId + '/topic');
  }


  findWidgetsByTopicId(topicId: number): Observable<Widget[]> {
    console.log('IN observable : findCourseById');
    return this.http.get<Widget[]>(BASE_URL + '/api/topic/' + topicId + '/widget');
  }


  getEnrolledSectionId(courseId: number): Observable<any> {
    console.log('In observable : ' + 'getEnrolledSectionId');

    return this.http.get<any>(BASE_URL + GET_ENROLLED_SECTION.replace('courseId', courseId.toString()));

  }



}
