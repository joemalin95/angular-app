import { Component, OnInit } from '@angular/core';
import { OfficerAuthGuard } from '../services/auth/auth-guard.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from '../services/auth/auth.service';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dispatch', title: 'Dispatch',  icon: 'ti-truck'},
    { path: '/review', title: 'Review',  icon: 'ti-menu'},
    { path: '/graph', title: 'Analyze',  icon: 'ti-stats-up'},
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

    ngOnInit() { }

    isMobileMenu(){
        return ($(window).width() <= 991);
    }

    getTitle(){
        var titlee = window.location.pathname;
        for(var item = 0; item < this.menuItems.length; item++){
            if(this.menuItems[item].path === titlee){
                return this.menuItems[item].title;
            }
        }
        return 'DePaul Safety Escort Service';
    }
}
