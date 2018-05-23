import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './navbar/navbar.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssignComponent } from './assign/assign.component';
import { ReviewComponent } from './review/review.component';

import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { EscortListComponent } from './dashboard/escort-list/escort-list.component';


import { FilterPipe } from './pipes/filter.pipes';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';
import { RideService } from './services/ride.service';
import { AuthGuard } from './services/auth-guard.service';
import { StudentComponent } from './student/student.component'


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [
            AppComponent,
            DashboardComponent,
            AssignComponent,
            ReviewComponent,
            EscortListComponent,
            LoginComponent,
            FilterPipe,
            StudentComponent
          ],
          imports: [
            BrowserModule,
            RouterTestingModule,
            SidebarModule,
            NavbarModule,
            NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyA_PdrWE6CaIq-j0HbaiZrvnOQEUuveTI8'}),
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireDatabaseModule,
            FormsModule,
          ],
          providers: [
              AuthService,
              AngularFireAuth,
              AuthGuard
          ],
    }).compileComponents()
  }));

  it('should create the app', (() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  }));

    //  ------- EXAMPLES ------
    //
    //  it(`should have as title 'app'`, (() => {
    //    const fixture = TestBed.createComponent(AppComponent);
    //    const app = fixture.debugElement.componentInstance;
    //    expect(app.title).toEqual('app');
    //  }));
    //
    //  it('should render title in a h1 tag', (() => {
    //    const fixture = TestBed.createComponent(AppComponent);
    //    fixture.detectChanges();
    //    const compiled = fixture.debugElement.nativeElement;
    //    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
    //  }));
});
