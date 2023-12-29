import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprIrrigationnComponent } from './spr-irrigationn.component';

describe('SprIrrigationnComponent', () => {
  let component: SprIrrigationnComponent;
  let fixture: ComponentFixture<SprIrrigationnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprIrrigationnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprIrrigationnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
