import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerActiveEscortsComponent } from './officer-active-escorts.component';

describe('OfficerActiveEscortsComponent', () => {
  let component: OfficerActiveEscortsComponent;
  let fixture: ComponentFixture<OfficerActiveEscortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerActiveEscortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerActiveEscortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
