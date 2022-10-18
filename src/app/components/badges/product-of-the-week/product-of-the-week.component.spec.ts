import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfTheWeekComponent } from './product-of-the-week.component';

describe('ProductOfTheWeekComponent', () => {
  let component: ProductOfTheWeekComponent;
  let fixture: ComponentFixture<ProductOfTheWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOfTheWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
