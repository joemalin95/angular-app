import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

import { EscortService } from '../services/escort/escort.service';
import { FormsModule }   from '@angular/forms';

import { AuthService } from '../services/auth/auth.service';
import { OfficerAuthGuard } from '../services/auth/auth-guard.service';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                NavbarComponent,
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
                OfficerAuthGuard,
                AuthService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get title of page', () => {
        expect(component.getTitle()).toEqual('DePaul Safety Escort Service');
    });

    it('should toggle sidebar on', () => {
        component.sidebarVisible = false;
        component.sidebarToggle();
        expect(component.sidebarVisible).toBe(true);
    });

    it('should toggle sidebar off', () => {
        component.sidebarVisible = true;
        component.sidebarToggle();
        expect(component.sidebarVisible).toBe(false);
    });

});
