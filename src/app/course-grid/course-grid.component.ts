import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../services/course-service.service';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css'],
  providers: [CourseServiceService]
})
export class CourseGridComponent implements OnInit {

  courses = [
    {
      title : 'Web dev - Summer 1',
      isPrivate : true,
      id : 1
    },
    {
      title : 'DBMS',
      isPrivate : false,
      id : 2

    }
  ];
  private loaded: boolean;
  private courseService: any;
  private loading: any;
  private coursesReceived: any;
  constructor(private _courseService: CourseServiceService) {

    // this.courseService = CourseServiceService.instance;

  }

  ngOnInit() {
    console.log('loaded on init: ', this.loaded);
    console.log('Getting course list from server ......');

    this.getAllCoursesFromServer();
  }



  getAllCoursesFromServer = () => {
    this.loading = true;

    console.log(this)

    console.log('Getting course list from server ......');

    this._courseService.findAllCourses()
      .then((coursesReceived) => {

        this.coursesReceived = coursesReceived;
        console.log(coursesReceived)

        this.loading = false;
      });



  }


}
