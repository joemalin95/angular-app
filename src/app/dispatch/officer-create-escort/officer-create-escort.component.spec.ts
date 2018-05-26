import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { EscortService } from '../../services/escort/escort.service';
import { FormsModule }   from '@angular/forms';


import { OfficerCreateEscortComponent } from './officer-create-escort.component';

describe('OfficerCreateEscortComponent', () => {
  let component: OfficerCreateEscortComponent;
  let fixture: ComponentFixture<OfficerCreateEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ OfficerCreateEscortComponent ],
        providers: [
            EscortService,
        ],
        imports: [
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireDatabaseModule,
            FormsModule,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerCreateEscortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
