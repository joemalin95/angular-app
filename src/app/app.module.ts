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

import { DispatchComponent }   from './dispatch/dispatch.component';
import { ReviewComponent } from './review/review.component';

import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { FilterPipe} from './pipes/filter.pipes';
import { ReversePipe} from './pipes/reverse.pipes';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth/auth.service';
import { EscortService } from './services/escort/escort.service';
import { AuthGuard, OfficerAuthGuard } from './services/auth/auth-guard.service';
import { StudentComponent } from './student/student.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { StudentCreateEscortComponent } from './student/student-create-escort/student-create-escort.component';
import { OfficerCreateEscortComponent } from './dispatch/officer-create-escort/officer-create-escort.component';
import { OfficerActiveEscortsComponent } from './dispatch/officer-active-escorts/officer-active-escorts.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { GraphComponent } from './graph/graph.component';
import { PickupGraphComponent } from './graph/pickup-graph/pickup-graph.component';
import { DriverGraphComponent } from './graph/driver-graph/driver-graph.component';
import { MapComponent } from './student/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { DailyGraphComponent } from './graph/daily-graph/daily-graph.component';
import { ActiveEscortsComponent } from './student/active-escorts/active-escorts.component';

@NgModule({
  declarations: [
    AppComponent,
    DispatchComponent,
    ReviewComponent,
    LoginComponent,
    FilterPipe,
    ReversePipe,
    StudentComponent,
    MainLayoutComponent,
    StudentCreateEscortComponent,
    OfficerCreateEscortComponent,
    OfficerActiveEscortsComponent,
    GraphComponent,
    PickupGraphComponent,
    DriverGraphComponent,
    MapComponent,
    DailyGraphComponent,
    ActiveEscortsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI'
    }),
    AgmDirectionModule,
  ],
  providers: [
      AuthService,
      AngularFireAuth,
      AuthGuard,
      EscortService,
      OfficerAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
