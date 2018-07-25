import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  // noinspection JSAnnotator
  student: {
    id: -1,
    enrolledCourses: {}
  };

  course: {
    id: -1,
    availableSeats: 10

  };
  courseId  = -1;
  availableSeats = 10;
  test = true;
  constructor(private  route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.loadCourse(params['courseId']);
    });
  }

  loadCourse = (courseId) =>{

    this.courseId = courseId;
    console.log("current Course Id : " + this.courseId);


  }
  ngOnInit() {
  }

}
