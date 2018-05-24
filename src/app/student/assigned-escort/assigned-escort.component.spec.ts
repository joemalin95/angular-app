import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { EscortService } from '../../services/escort.service';
import { AssignedEscortComponent } from './assigned-escort.component';

describe('AssignedEscortComponent', () => {
  let component: AssignedEscortComponent;
  let fixture: ComponentFixture<AssignedEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ AssignedEscortComponent ],
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
    fixture = TestBed.createComponent(AssignedEscortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
