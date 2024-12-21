import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormProductComponent } from './form-product/form-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-product', component: FormProductComponent },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home' // Route par défaut
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };
