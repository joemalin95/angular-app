import { Component, OnInit } from '@angular/core';
import { OfficerAuthGuard } from '../services/auth-guard.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from '../services/auth.service';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dispatch', title: 'Dispatch',  icon: 'ti-truck'},
    { path: '/review', title: 'Review',  icon: 'ti-stats-up'}
];

export const STUDENT_ROUTES: RouteInfo[] = [
    { path: '/student', title: 'Call Ride',  icon: 'ti-car'},
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    private listTitles: any[];
    location: Location;

    constructor(
        private officerAuthGuard: OfficerAuthGuard,
        public authService: AuthService,
        location: Location, 
    ) { 
        this.location = location;

        if (officerAuthGuard.canActivate()) {
            this.menuItems = ROUTES;
        } else {
            this.menuItems = STUDENT_ROUTES;
        }
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
    }

    isMobileMenu(){
        return ($(window).width() <= 991);
    }

    getTitle(){
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dispatch';
    }
}
