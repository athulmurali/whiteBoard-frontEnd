import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../services/course-service.service';
import {Course} from '../models/Course';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css'],
  providers: [CourseServiceService]
})
export class CourseGridComponent implements OnInit {
  private courses: Course[];
  private loaded: boolean;
  private loading: any;
  private coursesReceived: any;
  constructor(private _courseService: CourseServiceService) {}

  ngOnInit() {
    console.log('loaded on init: ', this.loaded);
    console.log('Getting course list from server ......');

    this.getAllCoursesFromServer();
  }
  getAllCoursesFromServer = () => {
    this.loading = true;
    console.log('Getting course list from server ......');


    this._courseService.findAllCoursesSub()
      .subscribe(data => {
      console.log('In subscriber ');
      this.courses = data;
      this.loading=false;
      console.log(this.courses);
    });
  }
}
