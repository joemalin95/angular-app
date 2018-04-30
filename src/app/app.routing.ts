import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssignComponent }   from './assign/assign.component';
import { ReviewComponent }   from './review/review.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'assign',
        component: AssignComponent
    },
    {
        path: 'review',
        component: ReviewComponent
    }
]
