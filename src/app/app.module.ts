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
import { CourseListComponent } from './course-list/course-list.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { SectionListComponent } from './section-list/section-list.component';


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
    CourseListComponent,
    EditSectionComponent,
    SectionListComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
