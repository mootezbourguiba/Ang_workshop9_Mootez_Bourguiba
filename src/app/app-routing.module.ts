import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'products-category/:id', component: ProductsCategoryComponent,
    children: [
      { path: 'details', component: DetailsCategoryComponent }
    ]
  },
  { path: 'products-category-qp', component: ProductsCategoryQPComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
