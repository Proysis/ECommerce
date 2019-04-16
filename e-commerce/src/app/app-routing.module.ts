import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  {path:"", component:ShopComponent},
  {path:"portal",redirectTo:"portal/auth",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
