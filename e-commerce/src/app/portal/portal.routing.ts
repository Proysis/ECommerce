import { Routes, RouterModule } from "@angular/router";
import { PortalComponent } from "./portal.component";
import { AuthComponent } from "./auth/auth.component";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from './main/home/home.component';
import { CategoryComponent } from './main/category/category.component';
import { ProductComponent } from './main/product/product.component';
import { CustomerComponent } from './main/customer/customer.component';
import { OrderComponent } from './main/order/order.component';


export const routes: Routes = [
  {
    path: "portal",
    component: PortalComponent,
    children: [
      { path: "auth", component: AuthComponent },
      { path: "", component: MainComponent, children:[
        {path:"home",component:HomeComponent},
        {path:"category",component:CategoryComponent},
        {path:"product",component:ProductComponent},
        {path:"customer",component:CustomerComponent},
        {path:"order",component:OrderComponent},
      ]}
    ]
  }
];

export const PortalRoutes = RouterModule.forChild(routes);
