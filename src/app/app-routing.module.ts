import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
   { path: '', component: ShopComponent },
  {
    path:'Account', 
    loadChildren: ()=> import('./identity/identity.module').then((m)=> m.IdentityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
