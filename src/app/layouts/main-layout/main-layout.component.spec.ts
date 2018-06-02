import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';

import { MainLayoutComponent } from './main-layout.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing'
import { OfficerAuthGuard } from '../../services/auth/auth-guard.service'
import { AuthService } from '../../services/auth/auth.service'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';



describe('MainLayoutComponent', () => {
    let component: MainLayoutComponent;
    let fixture: ComponentFixture<MainLayoutComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                MainLayoutComponent,
                SidebarComponent,
                NavbarComponent
            ],
            imports: [
                RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireDatabaseModule,
            ],
            providers: [
                OfficerAuthGuard,
                AuthService,
                AngularFireAuth,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainLayoutComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain sidebar element', () => {
        expect(de.query(By.css('sidebar-cmp'))).toBeTruthy();
    });

    it('should contain navbar element', () => {
        expect(de.query(By.css('navbar-cmp'))).toBeTruthy();
    });

    it('should contain router element', () => {
        expect(de.query(By.css('router-outlet'))).toBeTruthy();
    });
});
