import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOrderedEscortComponent } from './student-ordered-escort.component';

describe('StudentOrderedEscortComponent', () => {
  let component: StudentOrderedEscortComponent;
  let fixture: ComponentFixture<StudentOrderedEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOrderedEscortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOrderedEscortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
