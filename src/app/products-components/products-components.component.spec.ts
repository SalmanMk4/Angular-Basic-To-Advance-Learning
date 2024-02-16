import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponentsComponent } from './products-components.component';

describe('ProductsComponentsComponent', () => {
  let component: ProductsComponentsComponent;
  let fixture: ComponentFixture<ProductsComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponentsComponent]
    });
    fixture = TestBed.createComponent(ProductsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
