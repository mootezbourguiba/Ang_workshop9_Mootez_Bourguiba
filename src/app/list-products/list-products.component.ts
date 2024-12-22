import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ShortList } from '../models/short-list.model';

@Component({
  standalone: true,
  imports: [CommonModule, CardComponent],
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  listProducts = [
    {"id":1,"title":"Cuisinière","image":"assets/images/grand_electromenagers/cuisiniere.png", "description":"699 dt", "promotion":false, "quantity":50, "categoryId":1},
    {"id":2,"title":"Réfrigérateur","image":"assets/images/grand_electromenagers/refrigerateur.jpg", "description":"1500 dt", "promotion":false, "quantity":20, "categoryId":1},
    {"id":3,"title":"Robot Pétrin","image":"assets/images/petit_electromenager/robot_petrin.jpg", "description":"430 dt", "promotion":false, "quantity":150, "categoryId":2},
    {"id":4,"title":"Fer à repasser","image":"assets/images/petit_electromenager/fer_a_repasser.jpg", "description":"130 dt", "promotion":false, "quantity":100, "categoryId":2},
    {"id":5,"title":"Oppo","image":"assets/images/smart_phones/Oppo.jpg", "description":"920 dt", "promotion":false, "quantity":10, "categoryId":4},
    {"id":6,"title":"TV Téléfunkun", "image":"assets/images/tv_images_son/tv1.jpg","description":"845 dt", "promotion":false, "quantity":50, "categoryId":5},
  ];

  shortList: ShortList[] = [];

  onAddShortList(id: number) {
    const idUser = 1;
    if (!this.shortList.some(item => item.idElement === id && item.idUser === idUser)) {
      this.shortList.push({ id: Date.now(), idUser, idElement: id, typeElement: 'Product' });
    }
  }
}
