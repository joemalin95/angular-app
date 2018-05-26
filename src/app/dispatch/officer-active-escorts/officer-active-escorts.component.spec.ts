import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';

import { OfficerActiveEscortsComponent } from './officer-active-escorts.component';
import { EscortService } from '../../services/escort/escort.service';

describe('OfficerActiveEscortsComponent', () => {
  let component: OfficerActiveEscortsComponent;
  let fixture: ComponentFixture<OfficerActiveEscortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ OfficerActiveEscortsComponent ],
        providers: [
            EscortService,
        ],
        imports: [
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireDatabaseModule,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerActiveEscortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
