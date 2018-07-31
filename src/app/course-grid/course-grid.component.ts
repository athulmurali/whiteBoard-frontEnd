import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../services/course-service.service';
import {Course} from '../models/Course';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {SectionService} from '../services/section.service';
import {Section} from '../models/Section';
import {CourseSection} from '../models/CourseSection';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css'],
  providers: [CourseServiceService]
})
export class CourseGridComponent implements OnInit {
  courses: Course[];
  private loaded: boolean;
  private loading: any;
  private coursesReceived: any;

  private enrolledSections: [Section];
  private enrolledCourses: Course[];
  courseSectionArr: CourseSection[];

  temp: CourseSection;


  private  errorMessage: string;
  private profile: User;
  constructor(private _courseService: CourseServiceService,
              private userService: UserService,
              private  sectionService: SectionService) {}

  ngOnInit() {
    console.log('loaded on init: ', this.loaded);
    console.log('Getting course list from server ......');

    this.getAllCoursesFromServer();
    this.getProfileFromServer(this.getAllCoursesFromServer);
  }
  getAllCoursesFromServer = () => {
    this.loading = true;
    console.log('Getting course list from server ......');


    this._courseService.findAllCoursesSub()
      .subscribe(data => {
      console.log('In subscriber ');
      this.courses = data;
      this.loading = false;
      console.log(this.courses);
    });
  }


  getProfileFromServer = (cb) => {
    this.userService.getProfile().subscribe(data => {
      console.log(data);
      this.profile = data;
      console.log(this.profile);
      if (cb) {
        cb();
        this.getEnrolledSectionsFromServer();

      }
    }, err => {
      console.log(JSON.stringify(err));
    });
  }

  getEnrolledSectionsFromServer = () => {
    this.loading = true;
    this.sectionService.getEnrolledSections(this.profile._id).subscribe(
      data => {
        this.loading = false;
        this.enrolledSections = data;
        this.filterEnrolledCourses(this.generateCourseSectionArray);

      },
      error => {
        this.loading = false;
        this.errorMessage = error.error.message;
      }
    );

  }

  filterEnrolledCourses = (cb) => {
    console.log('filterEnrolledCourses');
    const coursesBeforeFilter = this.courses;
    console.log(coursesBeforeFilter);

    let coursesAfterFilter: Course[];
    coursesAfterFilter = this.enrolledSections.map(section => {
      let tempCourses: Course[];
       tempCourses = this.courses.filter(course => course.id === section.courseId);
      if (tempCourses) {
        const tempCourse = tempCourses[0];
        console.log(tempCourse);
        return tempCourse;
      }
    });
    this.enrolledCourses = coursesAfterFilter;

    cb();
    console.log(coursesAfterFilter);
  }

  generateCourseSectionArray = () => {

    const c = this.enrolledCourses;
    this.courseSectionArr = this.enrolledSections.map(function(section, i) {
      // this.temp.section  = section;
      // this.temp.course = c[i];
      const temp = new CourseSection();
      temp.section = section;
      temp.course = c[i];
      return temp;
    });
  }

}
