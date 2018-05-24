import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { EscortService } from '../../services/escort.service';

import { UnassignedEscortComponent } from './unassigned-escort.component';

describe('UnassignedEscortComponent', () => {
  let component: UnassignedEscortComponent;
  let fixture: ComponentFixture<UnassignedEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ UnassignedEscortComponent ],
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
    fixture = TestBed.createComponent(UnassignedEscortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
