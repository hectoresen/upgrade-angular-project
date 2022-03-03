import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsCartComponent } from './flights-cart.component';

describe('FlightsCartComponent', () => {
  let component: FlightsCartComponent;
  let fixture: ComponentFixture<FlightsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
