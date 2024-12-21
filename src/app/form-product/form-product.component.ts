import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { Product } from '../models/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
  standalone: true, // Ajoutez cette ligne si le composant est standalone
  imports: [CommonModule, FormsModule] // Ajoutez CommonModule et FormsModule ici
})
export class FormProductComponent {
  list: Product[] = [];
  product: Product = {
    id: 0,
    name: '',
    image: '',
    categoryId: 0,
    description: '',
    price: 0,
    brand: '',
    promotion: 0
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.product.id = this.list.length + 1; // Auto-increment ID
      this.list.push({...this.product});
      form.resetForm();
      alert('Product added successfully!');
    }
  }
}
