import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CourseViewComponent} from './course-view/course-view.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {StudentProfileComponent} from './student-profile/student-profile.component';
import {EditSectionComponent} from './edit-section/edit-section.component';
import {SectionListComponent} from './section-list/section-list.component';
import {PrivateContentBannerComponent} from './private-content-banner/private-content-banner.component';
import {EditUserProfileComponent} from './edit-user-profile/edit-user-profile.component';
import {EnrollInSectionComponent} from './enroll-in-section/enroll-in-section.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login', component: UserLoginComponent},
    { path: 'register', component: UserRegisterComponent},
    { path: 'studentProfile', component: StudentProfileComponent},
    { path: 'editProfile', component: EditUserProfileComponent},

  { path: 'home', component: CourseGridComponent},
    { path: 'privateContent', component: PrivateContentBannerComponent},
    { path: 'course/:courseId', component: CourseViewComponent},
    { path: 'course/:courseId/section', component : SectionListComponent},

  { path: 'course/:courseId/enroll', component : EnrollInSectionComponent},

  { path: 'course/:courseId/section/:sectionId/edit', component : EditSectionComponent},




  { path: '404', component: NotFoundComponent},

    { path: '**', redirectTo: '404'}


];
  export const routing = RouterModule.forRoot(appRoutes);
