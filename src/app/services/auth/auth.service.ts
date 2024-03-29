import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    private initialized: boolean = false;

    constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
        this.user = _firebaseAuth.authState;
        this.user.subscribe(
            (user) => {
                if (user) {
                    this.userDetails = user;
                    this.router.navigate(['/dispatch']).then(() => {
                        this.initialized = true;
                    });
                } else {
                    this.userDetails = null;
                    this.initialized = true;
                }
            }
        );
    }

    signInWithGoogle() {
        return this._firebaseAuth.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
    }

    signInRegular(email, password) {
       const credential = firebase.auth.EmailAuthProvider.credential( email, password );
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    }

    isLoggedIn() {
        if (this.userDetails == null ) {
            return false;
        } else {
            return true;
        }
    }

    getUserEmail() {
        return this.userDetails ? this.userDetails.email : "";
    }

    isInitialized() {
        return this.initialized;
    }

    logout() {
        this._firebaseAuth.auth.signOut()
            .then((res) => this.router.navigate(['/login']));
    }
}

