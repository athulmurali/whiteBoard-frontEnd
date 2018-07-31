import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../models/Course';
import {CourseServiceService} from '../services/course-service.service';
import {SectionService} from '../services/section.service';
import {Section} from '../models/Section';
import {CourseSection} from '../models/CourseSection';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  errorMessage: string;
  profile: User;
  enrolledCourses: Course[];
  enrolledSections: Section[];

  courses: Course[];
  loading: boolean;
  private courseSectionArr: CourseSection[];

  constructor(private  userService: UserService,
              private courseService: CourseServiceService,
              private sectionService: SectionService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.getAllCoursesFromServer();
    this.getProfileFromServer(this.getAllCoursesFromServer);

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

  handleClickEditProfile = () => {

    this.router.navigate(['/editProfile']);

  }


  handleClickDeleteProfile = () => {

    this.deleteProfileFromServer(this.navigateToLogout);

    }

  navigateToLogout = () => {
    this.router.navigate(['/logout']);

  }

  getAllCoursesFromServer = () => {
    this.loading = true;
    console.log('Getting course list from server ......');
    this.courseService.findAllCoursesSub()
      .subscribe(data => {
        console.log('In subscriber ');
        this.courses = data;
        this.loading = false;
        console.log(this.courses);
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

    const coursesAfterFilter = this.enrolledSections.map(section => {
      const tempCourses = this.courses.filter(course => course.id === section.courseId);
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
       const temp = new CourseSection();
       temp.section = section;
       temp.course = c[i];
       return temp;
     });
   }


 deleteProfileFromServer = (cb) => {
    this.userService.deleteProfile().subscribe(data => {
      console.log(data);
      this.profile = data;
      console.log(this.profile);
      if (cb) { cb(); }

    }, err => {
      this.errorMessage = err.error.message;
      console.log(JSON.stringify(err));
    });
  }


}
