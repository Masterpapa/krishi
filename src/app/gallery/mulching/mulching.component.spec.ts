import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulchingComponent } from './mulching.component';

describe('MulchingComponent', () => {
  let component: MulchingComponent;
  let fixture: ComponentFixture<MulchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
