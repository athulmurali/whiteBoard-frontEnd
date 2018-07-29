import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionService} from '../services/section.service';
import {Section} from '../models/Section';
import {ADD_SECTION_SUFFIX, COURSE_SEC_API_BASE_URL, WAIT_TIME} from '../constants/api';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  courseId: number;
  loading: boolean;
  creationSuccess: boolean;
  sectionsFromServer: Section[];
  selectedSectionId: number;
  errorMessage: string;

  newSection: Section;

  constructor(private router: Router,
              private  route: ActivatedRoute,
              private sectionService: SectionService) { }

  onClickSection(sectionId: Number) {
  console.log(sectionId);
    this.router.navigate(['/course/' + this.courseId + '/editSection/' + sectionId.toString()]);

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
        console.log(this.sectionsFromServer); },
        err => {console.log(err);
      this.loading = false; });
  }

  getCourseIdFromURL = () => {

    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.sectionService.getSectionsByCourseId(this.courseId);
    });
  }
  createNewSectionToServer = () => {
    this.loading = true;
    const createdSection: Section = new Section();
    createdSection.title = 'section-UnNamed';
    createdSection.totalSeats = 100;

    this.sectionService.createNewSection(this.courseId, createdSection).subscribe(
      data => {
        this.creationSuccess = true;
        this.loading = false;
        this.newSection = data;
        this.waitAndRedirect(this.newSection._id);
      },
      err => {
        this.errorMessage = err.error.message;
        this.loading = false;
        this.creationSuccess = false;
      }
    );
  }


  waitAndRedirect = (selectedSectionId) => {

    const  router = this.router;
    const courseId = this.courseId;
    const sectionId = selectedSectionId;

    // Your application has indicated there's an error
    window.setTimeout(function() {
      // Move to a new location or you can do something else
      router.navigate(['/course/' + courseId.toString() + '/editSection/' + sectionId.toString()]);

    }, WAIT_TIME);
  }


}
