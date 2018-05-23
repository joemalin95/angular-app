import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing'
import { OfficerAuthGuard } from '../../services/auth-guard.service'
import { AuthService } from '../../services/auth.service'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';



describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
