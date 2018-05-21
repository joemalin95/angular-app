import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscortListComponent } from './escort-list.component';
import { EscortService } from '../../services/escort.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

describe('EscortListComponent', () => {
  let component: EscortListComponent;
  let fixture: ComponentFixture<EscortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscortListComponent ],
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
    fixture = TestBed.createComponent(EscortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
