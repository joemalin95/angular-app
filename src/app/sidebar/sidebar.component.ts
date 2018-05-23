import { Component, OnInit } from '@angular/core';
import { OfficerAuthGuard } from '../services/auth-guard.service';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: '/assign', title: 'Assign',  icon: 'ti-car', class: '' },
    { path: '/review', title: 'Review',  icon: 'ti-stats-up', class: '' }
];

export const STUDENT_ROUTES: RouteInfo[] = [
    { path: '/student', title: 'Student',  icon: 'ti-user', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private officerAuthGuard: OfficerAuthGuard) { 
        if (officerAuthGuard.canActivate()) {
            this.menuItems = ROUTES;
        } else {
            this.menuItems = STUDENT_ROUTES;
        }
    }

    ngOnInit() {
    }

    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }
}
