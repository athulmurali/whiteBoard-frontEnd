import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  courses =[
    {
      title : "Web dev -Summer 1",
      isPrivate :true
    },
    {
      title :"DBMS",
      isPrivate :false

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
