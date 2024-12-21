import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormProductComponent } from './form-product/form-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-product', component: FormProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };
