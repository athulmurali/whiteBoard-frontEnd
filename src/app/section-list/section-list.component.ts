import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  sections = [
    {
      title : 'sec1',
      enrolledSeats : 80,
      totalSeats: 100,
      id : 1
    },
    {
      title : 'sec2',
      enrolledSeats : 60,
      totalSeats: 100,
      id : 2
    }
  ];

  constructor(private router: Router) { }

  onClickSection(sectionId: Number) {
  console.log(sectionId);
    this.router.navigate(['/course/1/section/' + sectionId.toString()]);

  }

  ngOnInit() {
  }

}
