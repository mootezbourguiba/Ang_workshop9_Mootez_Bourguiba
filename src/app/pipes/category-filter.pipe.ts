import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from '../models/categorie';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(categories: Categorie[], searchText: string): Categorie[] {
    if (!categories || !searchText) {
      return categories;
    }
    return categories.filter(category =>
      category.title.toLowerCase().includes(searchText.toLowerCase()));
  }
}
