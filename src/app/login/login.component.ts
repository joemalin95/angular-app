import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

    user = {
       email: '',
       password: ''
    };

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

    signInWithEmail() {
       this.authService.signInRegular(this.user.email, this.user.password)
          .then((res) => {
             console.log(res);
       
             this.router.navigate(['dashboard']);
          })
          .catch((err) => console.log('error: ' + err));
    }

}
