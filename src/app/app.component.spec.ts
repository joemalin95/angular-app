import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './navbar/navbar.module';

import { DispatchComponent }   from './dispatch/dispatch.component';
import { ReviewComponent } from './review/review.component';

import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



import { FilterPipe } from './pipes/filter.pipes';
import { ReversePipe} from './pipes/reverse.pipes';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth-guard.service';
import { StudentComponent } from './student/student.component'
import { OfficerCreateEscortComponent } from './dispatch/officer-create-escort/officer-create-escort.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { StudentCreateEscortComponent } from './student/student-create-escort/student-create-escort.component';
import { ActiveEscortsComponent } from './student/active-escorts/active-escorts.component';
import { OfficerActiveEscortsComponent } from './dispatch/officer-active-escorts/officer-active-escorts.component';
import { MapComponent } from './student/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import {NgxPaginationModule} from 'ngx-pagination';


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let authService: AuthService;
    let spy: jasmine.Spy;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [
              AppComponent,
              DispatchComponent,
              ReviewComponent,
              LoginComponent,
              FilterPipe,
              ReversePipe,
              StudentComponent,
              OfficerCreateEscortComponent,
              MainLayoutComponent,
              StudentCreateEscortComponent,
              ActiveEscortsComponent,
              OfficerActiveEscortsComponent,
              MapComponent,
          ],
          imports: [
              BrowserModule,
              RouterTestingModule,
              SidebarModule,
              NavbarModule,
              AngularFireModule.initializeApp(environment.firebaseConfig),
              AngularFireDatabaseModule,
              FormsModule,
              NgxPaginationModule,
              AgmCoreModule,
              AgmDirectionModule,
          ],
          providers: [
              AuthService,
              AngularFireAuth,
              AuthGuard
          ],
    }).compileComponents()
}));


    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        authService = de.injector.get(AuthService);

        fixture.detectChanges();
    });

    it('should create the app', (() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should return is logged in', (() => {
        spy = spyOn(authService, 'isLoggedIn').and.returnValue(true);
        expect(component.isLoggedIn()).toBe(true);
    }));

    it('should return is not logged in', (() => {
        spy = spyOn(authService, 'isLoggedIn').and.returnValue(false);
        expect(component.isLoggedIn()).toBe(false);
    }));

    it('should return is initialized', (() => {
        spy = spyOn(authService, 'isInitialized').and.returnValue(true);
        expect(component.isInitialized()).toBe(true);
    }));

    it('should return is not initialized', (() => {
        spy = spyOn(authService, 'isInitialized').and.returnValue(false);
        expect(component.isInitialized()).toBe(false);
    }));

    it('should contain router outlet', () => {
        expect(de.query(By.css('router-outlet'))).toBeTruthy();
    });

    it('should contain splash loader element', () => {
        expect(de.query(By.css('.loader'))).toBeTruthy();
    });
});
