import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedEscortComponent } from './assigned-escort.component';

describe('AssignedEscortComponent', () => {
  let component: AssignedEscortComponent;
  let fixture: ComponentFixture<AssignedEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedEscortComponent ]
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
