import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceService} from '../services/course-service.service';
import {Course} from '../models/Course';
import {Module} from '../models/Module';
import {Lesson} from '../models/Lesson';
import {Topic} from '../models/Topic';
import {Widget} from '../models/Widget';
import {SectionService} from '../services/section.service';
import {Section} from '../models/Section';
import {UserService} from '../services/user.service';
import {User} from '../models/User';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {


  // noinspection JSAnnotator
  student: {
    id: -1,
    enrolledCourses: {}
  };
  course: {
    id: -1,
    availableSeats: 10,
    title: ''
  };
  selectedCourse: Course;

  modules: Module[];
  lessons: Lesson[];
  topics:  Topic[];
  widgets: Widget[];


  courseId          = -1;
  availableSeats    = 10;
  test              = true;
  loading           = false;
  sectionSelected: Boolean;

  selectedModuleId: number;
  selectedLessonId: number;
  selectedTopicId: number;

  isLoggedIn = false;
  isEnrolled = false;
  enrolledSections: [Section];
  profile: User;


  constructor(private  route: ActivatedRoute, private _courseService: CourseServiceService,
              private router: Router, private sectionService: SectionService,
              private userService: UserService) {
    this.route.params.subscribe(params => {
      this.loadCourse(params['courseId']);
    });
  }

  loadCourse          = (courseId) => {
    this.courseId = courseId;
    console.log('current Course Id : ' + this.courseId);
  }
  getCourseFromServer = () => {
    this.loading = true;
    console.log('Getting course list from server ......');
    this._courseService.findCourseById(this.courseId)
      .subscribe(data => {
        console.log('In subscriber ');
        this.selectedCourse = data;
        this.loading = false;
        console.log(this.course);
      });
  }
  getUserToken = () => {
    return localStorage.getItem('token');
  }
  getModulesFromServer = () => {
    this.loading = true;
    console.log('Getting course list from server ......');
    this._courseService.findModulesByCourseId( this.courseId )
      .subscribe(data => {
        console.log('In subscriber ');
        this.modules = data;
        this.loading = false;
        console.log(this.modules);
      });
  }
  getLessonsFromServer = () => {
    this.loading = true;
    console.log('Getting course list from server ......');
    this._courseService.findLessonsByCourseModuleId( this.courseId, this.selectedModuleId )
      .subscribe(data => {
        console.log('In subscriber: findLessonsByCourseModuleId ');
        this.lessons = data;
        this.loading = false;
        console.log(this.lessons);
      });
  }
  getTopicsFromServer = () => {
    this.loading = true;
    console.log('Getting Topics list from server ......');
    this._courseService.findTopicsByCourseModuleLesson
    ( this.courseId, this.selectedModuleId, this.selectedLessonId )
      .subscribe(data => {
        console.log('In subscriber: findLessonsByCourseModuleId ');
        this.topics = data;
        this.loading = false;
        console.log(this.lessons);
      });
  }


  getWidgetsFromServer = () => {
    this.loading = true;
    console.log('Getting Topics list from server ......');
    this._courseService.findWidgetsByTopicId( this.selectedTopicId)
      .subscribe(data => {
        console.log('In subscriber: findLesByCourseModuleId ');

        data.sort(this.compare);
        this.widgets = data;
        this.loading = false;
        console.log(this.widgets);
      });

  }
  selectModule = (moduleId) => {
    //alert('module selected : ' + moduleId);
    this.selectedModuleId = moduleId;
    this.getLessonsFromServer();

  }
  selectLesson = (lessonId) => {
    //alert('selected lesson : ' + lessonId)
    this.selectedLessonId = lessonId;
    this.getTopicsFromServer();
  }

  selectTopic = (topicId) => {
    //alert('selected topic : ' + topicId)
    this.selectedTopicId = topicId;
    this.getWidgetsFromServer();
  }

  ngOnInit() {
    if (  this.getUserToken()) {this.isLoggedIn = true;
    this.getProfileFromServer();
    }

    this.getCourseFromServer();
    this.getModulesFromServer();
  }


  compare = (a, b) => {
    if (a.widgetOrder < b.widgetOrder) {
      return -1;
    }
    if (a.widgetOrder > b.widgetOrder) {
      return 1;
    }
    return 0;
  }

  onClickEnroll = () => {
    this.router.navigate(['/course/' + this.courseId.toString() + '/section']);
  }



  getProfileFromServer = () => {
    this.userService.getProfile().subscribe(data => {
      console.log(data);
      this.profile = data;
      console.log(this.profile);

        this.getEnrolledSectionsFromServer();
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

        this.isEnrolled = false;
        this.enrolledSections.map(section => {
          if (section.courseId === this.selectedCourse.id) {
            this.isEnrolled = true;
          }
        });

      },
      error => {
        this.loading = false;

      }
    );

  }



  viewableInfo = () => {
    console.log('selectedCourse.is priv' + this.selectedCourse.private);
    console.log('enrolled' + this.isEnrolled);
    const result = (!this.selectedCourse.private || this.isEnrolled);
    console.log('result : ' + result);
    return result;

  }
}
