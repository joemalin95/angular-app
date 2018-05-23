import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ROUTES, STUDENT_ROUTES } from '../sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { OfficerAuthGuard } from '../services/auth-guard.service';

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    providers: [AuthService]
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;

    @ViewChild("navbar-cmp") button;

    constructor(
        location: Location, 
        private renderer : Renderer, 
        private element : ElementRef, 
        public authService: AuthService,
        private officerAuthGuard: OfficerAuthGuard,
    ) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        if (officerAuthGuard.canActivate()) {
            this.listTitles = ROUTES;
        } else {
            this.listTitles = STUDENT_ROUTES;
        }
    }

    ngOnInit(){
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }
    getTitle(){
        var titlee = window.location.pathname;
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'DePaul Safety Escort Service';
    }
    sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
