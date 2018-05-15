import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssignComponent }   from './assign/assign.component';
import { StudentComponent }   from './student/student.component';
import { ReviewComponent }   from './review/review.component';
import { LoginComponent }   from './login/login.component';
import { AuthGuard } from './services/auth-guard.service'


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'assign',
        component: AssignComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'student',
        component: StudentComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'review',
        component: ReviewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }
]
