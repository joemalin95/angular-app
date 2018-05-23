import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateEscortComponent } from './student-create-escort.component';

describe('StudentCreateEscortComponent', () => {
  let component: StudentCreateEscortComponent;
  let fixture: ComponentFixture<StudentCreateEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCreateEscortComponent ]
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
