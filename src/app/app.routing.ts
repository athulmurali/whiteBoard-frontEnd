import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CourseViewComponent} from './course-view/course-view.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {StudentProfileComponent} from './student-profile/student-profile.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login', component: UserLoginComponent},
    { path: 'register', component: UserRegisterComponent},
    { path: 'studentProfile', component: StudentProfileComponent},


  { path: 'home', component: CourseGridComponent},
    { path: 'happy', component: CourseGridComponent},
    { path: 'course/:courseId', component: CourseViewComponent},

    { path: '404', component: NotFoundComponent},

    { path: '**', redirectTo: '404'}


];
  export const routing = RouterModule.forRoot(appRoutes);
