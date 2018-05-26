import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { EscortService } from '../../services/escort/escort.service';
import { FormsModule }   from '@angular/forms';
import { StudentCreateEscortComponent } from './student-create-escort.component';

describe('StudentCreateEscortComponent', () => {
  let component: StudentCreateEscortComponent;
  let fixture: ComponentFixture<StudentCreateEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ StudentCreateEscortComponent ],
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
    fixture = TestBed.createComponent(StudentCreateEscortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
