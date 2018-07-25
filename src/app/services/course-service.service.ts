import { Injectable } from '@angular/core';


const BASE_URL = 'https://neu-course-manager.herokuapp.com';
console.log('BASE_URL  ' + BASE_URL);

const COURSE_API_URL = BASE_URL + '/api/course';

@Injectable()
export class CourseServiceService {

  constructor() {}

  someMethod() {
    return true;
  }
  findAllCourses() {
    return fetch(COURSE_API_URL)
      .then(function(response) {
        return response.json();
      });
  }

}
