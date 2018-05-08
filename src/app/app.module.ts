import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './navbar/navbar.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssignComponent } from './assign/assign.component';
import { ReviewComponent } from './review/review.component';

import { FilterPipe} from './pipes/filter.pipes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssignComponent,
      ReviewComponent,
      FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    AngularFireModule.initializeApp(environment.firebase, 'safety-escort'),
    AngularFireDatabaseModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBk40AU-WAyeI8O7xjgpXKeJkvOMbwSse0'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
