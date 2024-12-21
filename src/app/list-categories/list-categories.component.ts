import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Categorie } from '../models/categorie';
import { CategoryFilterPipe } from '../pipes/category-filter.pipe';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CategoryFilterPipe, HighlightDirective],
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categories: Categorie[] = [
    { id: 1, title: 'Grand électroménager', image: 'assets/images/categorie_electromenager.jpg', description: 'Description 1', available: true },
    { id: 2, title: 'Petit électroménager', image: 'assets/images/categorie_petit_electromenager.jpg', description: 'Description 2', available: true },
    { id: 3, title: 'Produits informatiques', image: 'assets/images/categorie_produits_informatiques.jpg', description: 'Description 3', available: true },
    { id: 4, title: 'Smart Phones', image: 'assets/images/categorie_smartPhone.jpg', description: 'Description 4', available: true },
    { id: 5, title: 'TV, images et son', image: 'assets/images/categorie_tv_image_son.jpg', description: 'Description 5', available: true },
    { id: 6, title: 'Produits voiture', image: 'assets/images/produits_nettoyages.jpg', description: 'Description 6', available: false }
  ];

  showDescription(description: string) {
    alert(description);
  }
}