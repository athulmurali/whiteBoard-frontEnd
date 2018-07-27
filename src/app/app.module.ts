import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {routing} from './app.routing';
import { CourseViewComponent } from './course-view/course-view.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { SectionListComponent } from './section-list/section-list.component';
import {CourseServiceService} from './services/course-service.service';
import { PrivateContentBannerComponent } from './private-content-banner/private-content-banner.component';


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
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
