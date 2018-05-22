import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssignComponent }   from './assign/assign.component';
import { StudentComponent }   from './student/student.component';
import { ReviewComponent }   from './review/review.component';
import { LoginComponent }   from './login/login.component';
import { AuthGuard } from './services/auth-guard.service'
import { AppLayoutComponent } from './app-layout/app-layout.component'


export const AppRoutes: Routes = [

    // App routes goes here here
    { 
        path: '',
        component: AppLayoutComponent, 
        canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          { path: 'dashboard', component: DashboardComponent},
          { path: 'assign', component: AssignComponent },
          { path: 'student', component: StudentComponent },
          { path: 'review', component: ReviewComponent }
        ]
    },
    { path: 'login', component: LoginComponent }
]
