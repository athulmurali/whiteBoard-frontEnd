import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  courseId  = -1;
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
