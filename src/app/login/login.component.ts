import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

    constructor(
        private authService: AuthService, 
        private router: Router
    ) { }

    ngOnInit() { }

    signInWithGoogle() {
        this.authService.signInWithGoogle()
            .then((res) => { 
                this.router.navigate(['dispatch'])
            })
            .catch((err) => console.log(err));
    }
}
