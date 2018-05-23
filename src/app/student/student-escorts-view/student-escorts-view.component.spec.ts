import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEscortsViewComponent } from './student-escorts-view.component';

describe('StudentEscortsViewComponent', () => {
  let component: StudentEscortsViewComponent;
  let fixture: ComponentFixture<StudentEscortsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEscortsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEscortsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
