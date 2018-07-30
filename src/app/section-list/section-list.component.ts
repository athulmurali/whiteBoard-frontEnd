import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionService} from '../services/section.service';
import {Section} from '../models/Section';
import {WAIT_TIME} from '../constants/api';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {USER_ROLES} from '../constants/roles';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit, OnChanges {

  @Input()
  role: string;

  DEFAULT_SECTION_NAME:string = 'section-1';
  profile: User;
  courseId: number;
  loading: boolean;
  creationSuccess: boolean;
  sectionsFromServer: Section[];
  errorMessage: string;
  newSection: Section;


  isEnrollSelected: boolean;
  isUnrollSelected: boolean;

  selectedSectionId: string;

  selectionType: string;

   USER_ROLES =   USER_ROLES;

  constructor(private router: Router,
              private  route: ActivatedRoute,
              private sectionService: SectionService,
              private  userService: UserService) { }

  onClickSection(sectionId: Number) {
  console.log(sectionId);
    this.router.navigate(['/course/' + this.courseId + '/section/' + sectionId.toString() + '/edit']);

  }
  ngOnInit() {
    this.isEnrollSelected = false;
    this.isUnrollSelected = false;

    console.log('role' + this.role);
    this.getCourseIdFromURL();
    this.getSectionsFromServer();
    this.getProfileFromServer();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed');
    console.log(changes);
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
    createdSection.title = this.DEFAULT_SECTION_NAME;
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
      const redirectToRoute = '/course/' + courseId.toString() +
        '/section/' + sectionId.toString() + '/edit';
      // alert('redir : ' + redirectToRoute);
      router.navigate([redirectToRoute]);

    }, WAIT_TIME);
  }
  getProfileFromServer = () => {
    this.loading = true;
    this.userService.getProfile().subscribe(data => {
      this.loading = false;
      console.log(data);
      this.profile = data;
      console.log(this.profile);
    }, err => {
      this.loading = false;
      this.errorMessage = err.error.message;
      console.log(JSON.stringify(err));
    });
  }
  isSectionIdErolled(sectionId: string): boolean {

    if (this.profile) {
      return this.profile.enrolledSections.indexOf(sectionId ) >= 0;
    }
    return false;
  }

  selectEnroll = (selectSectionId: string) => {

    this.selectionType = 'enroll';
    this.selectedSectionId = selectSectionId;
    alert('select enroll');
  }

  selectUnroll = (selectSectionId: string) => {

    this.selectedSectionId = selectSectionId;
    this.selectionType = 'unroll';

    alert('select unroll!');
  }
}
