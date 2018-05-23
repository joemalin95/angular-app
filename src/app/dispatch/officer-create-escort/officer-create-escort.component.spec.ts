import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerCreateEscortComponent } from './officer-create-escort.component';

describe('OfficerCreateEscortComponent', () => {
  let component: OfficerCreateEscortComponent;
  let fixture: ComponentFixture<OfficerCreateEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerCreateEscortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerCreateEscortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
