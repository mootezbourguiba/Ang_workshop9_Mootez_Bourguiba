import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryQpComponent } from './products-category-qp.component';

describe('ProductsCategoryQpComponent', () => {
  let component: ProductsCategoryQpComponent;
  let fixture: ComponentFixture<ProductsCategoryQpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsCategoryQpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCategoryQpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
