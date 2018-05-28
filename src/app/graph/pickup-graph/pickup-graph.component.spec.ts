import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupGraphComponent } from './pickup-graph.component';

describe('PickupGraphComponent', () => {
  let component: PickupGraphComponent;
  let fixture: ComponentFixture<PickupGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
