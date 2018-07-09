import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {routing} from './app.routing';
import { CourseViewComponent } from './course-view/course-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    NavBarComponent,
    NotFoundComponent,
    CourseViewComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
