import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductsComponent
  ]
})
export class ProductsModule { }
