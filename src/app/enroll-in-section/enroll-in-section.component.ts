import {Component, OnChanges, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {SectionService} from '../services/section.service';
import {User} from '../models/User';
import {WAIT_TIME} from '../constants/api';

@Component({
  selector: 'app-enroll-in-section',
  templateUrl: './enroll-in-section.component.html',
  styleUrls: ['./enroll-in-section.component.css']
})
export class EnrollInSectionComponent implements OnInit, OnChanges {

  @Input()
  profile: User;

  errorMessage: string;
  loading: boolean;

  updateSuccess: boolean;

  @Input()
 isEnrollSelected: boolean;

  @Input()
  isUnrollSelected: boolean;

  @Input()
  selectedSectionId: string;

  @Input()
  type: string;
  constructor(private sectionService: SectionService) {}

  ngOnInit() {
    console.log(this.profile);
  }
  ngOnChanges(changes) {
    console.log('changes');
    console.log(changes);

  }

  onClickConfirmEnroll  = () => {
    this.enrollInServer(this.profile._id, this.selectedSectionId);
    // alert('confirmed! enroll');
  }
  onClickConfirmUnroll  = () => {
    // alert('confirmed! unnroll');
    this.unrollFromServer(this.profile._id, this.selectedSectionId);


  }
  onClickCancel         = () => {
    // alert('Cancelled!');
    location.reload();
  }
  enrollInServer        (studentId: string, sectionId: string) {
    this.sectionService.enrollStudentId(studentId, sectionId).subscribe(
      data => {
        this.loading = false;
        this.updateSuccess = true;
        this.profile = data;
        console.log('enrollInServer');
        this.refreshWindowAfterWait();

      },
        err => {
        this.loading = false;

        console.log('enrollInServer :Err');
        this.errorMessage = err.error.message;
        this.refreshWindowAfterWait();


      }
    );

  }
  unrollFromServer      (studentId: string, sectionId: string) {
    this.sectionService.unrollStudentId(studentId, sectionId).subscribe(
      data => {
        this.loading = false;
        this.updateSuccess = true;
        this.profile = data;
        console.log('unrollFromServer :data');
        console.log(data);
        this.refreshWindowAfterWait();
      },
      err => {
        console.log('unrollFromServer :Err');
        this.loading = false;
        this.updateSuccess = false;
        this.errorMessage = err.error.message;
        this.refreshWindowAfterWait();

      }
    );
  }
  refreshWindowAfterWait = () => {
    window.setTimeout(function() {location.reload(); }, WAIT_TIME); }
}
