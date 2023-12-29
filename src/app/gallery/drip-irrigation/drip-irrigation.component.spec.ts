import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DripIrrigationComponent } from './drip-irrigation.component';

describe('DripIrrigationComponent', () => {
  let component: DripIrrigationComponent;
  let fixture: ComponentFixture<DripIrrigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DripIrrigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DripIrrigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
