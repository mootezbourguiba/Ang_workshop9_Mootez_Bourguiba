import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { FormProductComponent } from './form-product/form-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-product', component: FormProductComponent }
=======

export const routes: Routes = [
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
>>>>>>> 407d56a5de5f48c4e8f1f3290d9b3f8795e1e259
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
export { routes };
=======
>>>>>>> 407d56a5de5f48c4e8f1f3290d9b3f8795e1e259
