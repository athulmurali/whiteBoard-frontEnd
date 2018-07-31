import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionService} from '../services/section.service';
import {Section} from '../models/Section';
import {WAIT_TIME} from '../constants/api';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.css']
})
export class EditSectionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
              private sectionService: SectionService,
              private location: Location) { }

  section: Section;
  currentSectionId: number;
   courseId: number;
  loading: boolean;
  updateSuccess: boolean;


   deletionError: boolean;
   errorMessage: string;
  deletionSuccess: boolean;


  onClickSubmit() {
    // alert('submitted! ');

    this.loading = true;
    this.sectionService.updateSection(this.currentSectionId, this.section).
    subscribe(
      data => {
        this.section = data;
        this.updateSuccess  = true;
        this.loading = true;
        this.waitAndRedirect();

      },
      err => {
        this.loading = false;
        this.updateSuccess = false;
        console.log('EditSectionComponent : error');
        console.log(err);
        this.errorMessage = err.error.message;
      }
    );
  }
  onClickCancel() {
    // alert('cancelled! ');
   this.location.back();
  }
  onClickDelete() {

    // alert('Deleting! ');
    this.deleteSectionFromServer();


  }

  getCourseIdFromURL = () => {
    this.route.params.subscribe(
      params => {this.courseId = params.courseId; });
  }
  getSectionIdFromURL = () => {
    this.route.params.subscribe(
      params => {this.currentSectionId = params.sectionId; });
}
  getSectionFromServer = () => {
  this.sectionService.getSectionById(this.currentSectionId).subscribe(
    data => {
      this.section = data;
    }
  );
}
  deleteSectionFromServer = () => {
    this.loading = false;
    this.sectionService.deleteSectionById(this.courseId, this.section._id).subscribe(
      data => {
        console.log(data);
        this.deletionSuccess = true;
        this.loading = false;
        this.waitAndRedirect();

      },
      err => {
        console.log(err);
        this.deletionSuccess = false;
        this.deletionError = true;
        this.errorMessage = err.error.message;
        this.loading = false;
        }
    );
  }
  waitAndRedirect = () => {
    const location = this.location;
    // Your application has indicated there's an error
    window.setTimeout(function() {
      location.back();
    }, WAIT_TIME);
  }

  ngOnInit() {
    this.getCourseIdFromURL();
    this.getSectionIdFromURL ();
    this.getSectionFromServer();
  }


}
