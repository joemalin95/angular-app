import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing'

import { LoginComponent } from './login.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

import { EscortService } from '../services/escort/escort.service';
import { FormsModule }   from '@angular/forms';


describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let emptyUser = {
       email: '',
       password: ''
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                LoginComponent,
            ],
            imports: [
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireDatabaseModule,
                FormsModule,
                RouterTestingModule,
            ],
            providers: [
                EscortService,
                AngularFireAuth,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize user data', () => {
        expect(component.user).toEqual(emptyUser);
    });
    
    it('should have signInWithGoogle', () => {
        // Cannot test Firebase Auth sign in...
    });

    it('should have signInWithEmail', () => {
        // Cannot test Firebase Auth sign in...
    });

});
