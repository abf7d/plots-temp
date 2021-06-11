import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavChartComponent } from './nav-chart.component';

describe('NavChartComponent', () => {
  let component: NavChartComponent;
  let fixture: ComponentFixture<NavChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
