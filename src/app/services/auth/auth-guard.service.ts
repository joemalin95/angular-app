import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        if ( this.authService.isLoggedIn() ) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}

@Injectable()
export class OfficerAuthGuard implements CanActivate {

    private officerEmails: Array<String> = [
        "joemalin95@gmail.com",
    ];

    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        if (this.officerEmails.indexOf(this.authService.getUserEmail()) > -1) {
            return true;
        } else {
            this.router.navigate(['/student']);
            return false;
        }
    }
}

