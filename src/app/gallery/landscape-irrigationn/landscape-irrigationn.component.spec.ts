import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeIrrigationnComponent } from './landscape-irrigationn.component';

describe('LandscapeIrrigationnComponent', () => {
  let component: LandscapeIrrigationnComponent;
  let fixture: ComponentFixture<LandscapeIrrigationnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandscapeIrrigationnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeIrrigationnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
