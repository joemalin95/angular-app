import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateEscortComponent } from './student-create-escort/student-create-escort.component';
import { AssignedEscortComponent } from './assigned-escort/assigned-escort.component';
import { UnassignedEscortComponent } from './unassigned-escort/unassigned-escort.component';
import { FormsModule }   from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';


import { EscortService } from '../services/escort.service';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ 
            StudentComponent,
            StudentCreateEscortComponent,
            AssignedEscortComponent,
            UnassignedEscortComponent,
        ],
        imports: [
            FormsModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireDatabaseModule,
        ],
        providers: [
            EscortService,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
