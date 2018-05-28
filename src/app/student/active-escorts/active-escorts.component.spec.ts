import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { EscortService } from '../../services/escort/escort.service';

import { ActiveEscortsComponent } from './active-escorts.component';

describe('ActiveEscortsComponent', () => {
  let component: ActiveEscortsComponent;
  let fixture: ComponentFixture<ActiveEscortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ ActiveEscortsComponent ],
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
    fixture = TestBed.createComponent(ActiveEscortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
