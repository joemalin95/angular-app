import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscortsDailyGraphComponent } from './escorts-daily-graph.component';

describe('EscortsDailyGraphComponent', () => {
  let component: EscortsDailyGraphComponent;
  let fixture: ComponentFixture<EscortsDailyGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscortsDailyGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscortsDailyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
