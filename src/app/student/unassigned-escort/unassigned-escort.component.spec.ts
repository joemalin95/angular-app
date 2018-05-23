import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedEscortComponent } from './unassigned-escort.component';

describe('UnassignedEscortComponent', () => {
  let component: UnassignedEscortComponent;
  let fixture: ComponentFixture<UnassignedEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnassignedEscortComponent ]
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
