import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

import { SidebarComponent } from './sidebar.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

import { EscortService } from '../services/escort/escort.service';
import { FormsModule }   from '@angular/forms';

import { AuthService } from '../services/auth/auth.service';
import { OfficerAuthGuard } from '../services/auth/auth-guard.service';

describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;
    let de: DebugElement;
    let spy: jasmine.Spy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                SidebarComponent,
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
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get title of page', () => {
        expect(component.getTitle()).toEqual('DePaul Safety Escort Service');
    });
});
