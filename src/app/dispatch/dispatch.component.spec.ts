import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { OfficerActiveEscortsComponent } from './officer-active-escorts/officer-active-escorts.component';
import { OfficerCreateEscortComponent } from './officer-create-escort/officer-create-escort.component';
import { DispatchComponent } from './dispatch.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

import { EscortService } from '../services/escort/escort.service';
import { FormsModule }   from '@angular/forms';


describe('DispatchComponent', () => {
  let component: DispatchComponent;
  let fixture: ComponentFixture<DispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ 
            DispatchComponent,
            OfficerActiveEscortsComponent,
            OfficerCreateEscortComponent,
        ],
        imports: [
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireDatabaseModule,
            FormsModule,
        ],
        providers: [
            EscortService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
