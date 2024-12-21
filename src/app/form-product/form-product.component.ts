import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormProductComponent {
  list: Product[] = [];
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]],
      categoryId: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      description: [''],
      brand: [''],
      promotion: ['', Validators.pattern('^(0|[1-9][0-9]?)$')],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = {...this.productForm.value, id: Date.now()};
      this.list.push(newProduct);
      console.log('Product added to the list:', newProduct);
      this.productForm.reset();
    }
  }
}
