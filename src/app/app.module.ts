import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './navbar/navbar.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssignComponent } from './assign/assign.component';
import { ReviewComponent } from './review/review.component';


import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

class Book {
    constructor(public title) { }
}

@Component({
    selector: 'app-root',
    template: `
        <ul>
            <li *ngFor="let book of books | async">
                <pre>{{ book | json }}</pre>
            </li>
        </ul>
    `
})
export class AppComponent {
    public books: FirebaseListObservable<Book[]>;
    constructor(db: AngularFireDatabase) {
        this.books = db.list('/books');
    }
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssignComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'something'),
        AngularFireDatabaseModule
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBk40AU-WAyeI8O7xjgpXKeJkvOMbwSse0'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
