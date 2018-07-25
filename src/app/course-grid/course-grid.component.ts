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

  constructor() { }

  ngOnInit() {
  }

}
