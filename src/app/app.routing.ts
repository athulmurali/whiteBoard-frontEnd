import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {NotFoundComponent} from './not-found/not-found.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: CourseGridComponent},
    { path: 'happy', component: CourseGridComponent},
  { path: '404', component: NotFoundComponent},

  { path: '**', component: NotFoundComponent}


];
  export const routing = RouterModule.forRoot(appRoutes);
