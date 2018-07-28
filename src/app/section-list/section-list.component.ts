import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionService} from '../services/section.service';
import {Section} from '../models/Section';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  courseId: number;
  loading: boolean;
  sections = [
    {
      title : 'sec1',
      enrolledSeats : 80,
      enrolledStudents: ['123', '!23'],
      totalSeats: 100,
      id : 1
    },
    {
      title : 'sec2',
      enrolledSeats : 60,
      enrolledStudents: ['123', '!23'],
      totalSeats: 100,
      id : 2
    }
  ];
  sectionsFromServer: Section[];

  constructor(private router: Router,
              private  route: ActivatedRoute,
              private sectionService: SectionService) { }

  onClickSection(sectionId: Number) {
  console.log(sectionId);
    this.router.navigate(['/course/1/editSection/' + sectionId.toString()]);

  }

  ngOnInit() {
    this.getCourseIdFromURL();
    this.getSectionsFromServer();
  }

  // from server
  getSectionsFromServer = () => {
    this.loading = true;
     this.sectionService.getSectionsByCourseId(this.courseId).subscribe(
      data => {
        this.sectionsFromServer = data;
        this.loading = false;
        console.log(this.sectionsFromServer);},
        err => {console.log(err);
      this.loading = false;})
  }

  getCourseIdFromURL = () => {

    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.sectionService.getSectionsByCourseId(this.courseId);
    });
  }
}
