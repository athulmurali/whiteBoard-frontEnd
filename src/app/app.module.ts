import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {routing} from './app.routing';
import {CourseViewComponent} from './course-view/course-view.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {StudentProfileComponent} from './student-profile/student-profile.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EditSectionComponent} from './edit-section/edit-section.component';
import {SectionListComponent} from './section-list/section-list.component';
import {CourseServiceService} from './services/course-service.service';
import {PrivateContentBannerComponent} from './private-content-banner/private-content-banner.component';
import {AuthInterceptor} from './services/auth.interceptor';
import {EditUserProfileComponent} from './edit-user-profile/edit-user-profile.component';
import {EnrollInSectionComponent} from './enroll-in-section/enroll-in-section.component';
import {LogOutComponent} from './log-out/log-out.component';

import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {MomentModule} from 'angular2-moment';
// this includes the core NgIdleModule but includes keepalive providers for easy wireup

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    NavBarComponent,
    NotFoundComponent,
    CourseViewComponent,
    UserLoginComponent,
    UserRegisterComponent,
    StudentProfileComponent,
    EditSectionComponent,
    SectionListComponent,
    PrivateContentBannerComponent,
    EditUserProfileComponent,
    EnrollInSectionComponent,
    LogOutComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,


    MomentModule,
    NgIdleKeepaliveModule.forRoot()
  ],
  providers: [CourseServiceService,
    {
     provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
