import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id!: number;
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() available!: boolean;
  @Input() btnText!: string;

  @Output() addShortList = new EventEmitter<number>();

  addToShortList() {
    this.addShortList.emit(this.id);
  }
}
