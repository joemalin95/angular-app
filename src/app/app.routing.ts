import { Routes } from '@angular/router';

import { DispatchComponent }   from './dispatch/dispatch.component';
import { StudentComponent }   from './student/student.component';
import { ReviewComponent }   from './review/review.component';
import { LoginComponent }   from './login/login.component';
import { AuthGuard, OfficerAuthGuard } from './services/auth-guard.service'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'


export const AppRoutes: Routes = [

    // Officer View routes goes here here
    { 
        path: '',
        component: MainLayoutComponent, 
        canActivate: [AuthGuard, OfficerAuthGuard],
        children: [
          { path: '', redirectTo: 'dispatch', pathMatch: 'full'},
          { path: 'dispatch', component: DispatchComponent},
          { path: 'review', component: ReviewComponent }
        ]
    },

    // Student View routes goes here here
    { 
        path: '',
        component: MainLayoutComponent, 
        canActivate: [AuthGuard],
        children: [
          { path: 'student', component: StudentComponent },
        ]
    },

    // non-authorized routes goes here here
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full'},
]
