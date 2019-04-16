import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './shopping/product/product.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order/orderDetails/orderDetails.component';

export const routes: Routes = [
  {path:"", component:ShopComponent, children:[
    {path:"home",component:HomeComponent},
    {path:"shopping",component:ShoppingComponent, children:[
      {path:'products', component:ProductComponent},
      {path:'', redirectTo:'products', pathMatch:'full'},
      {path:'products/category/:categoryIds', component:ProductComponent}
    ]},
    {path:"auth",component:AuthComponent},
    {path:"card",component:CartComponent},
    {path:"payment", component:PaymentComponent},
    {path:"address",component:AddressComponent},
    {path:"order",component:OrderComponent}
  ]},
  
];

export const ShopRoutes = RouterModule.forChild(routes);
