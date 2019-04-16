import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShopComponent } from "./shop.component";
import { ProductComponent } from "./shopping/product/product.component";
import { CategoryComponent } from "./shopping/category/category.component";
import { RouterModule } from "@angular/router";
import { routes } from "./shop.routing";
import { ShoppingComponent } from "./shopping/shopping.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { CartComponent } from "./cart/cart.component";
import { PaymentComponent } from "./payment/payment.component";
import { AddressComponent } from "./address/address.component";
import { AddressUpdateComponent } from "./address/address-update/address-update.component";
import { MatTooltipModule, MatDialogModule } from '@angular/material';
import { GeneralControlsModule } from '../general-controls/general-controls.module';
import { OrderDetailsComponent } from './order/orderDetails/orderDetails.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" }),
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatTooltipModule,
    MatDialogModule,
    GeneralControlsModule
  ],
  declarations: [
    ShopComponent,
    NavComponent,
    ShoppingComponent,
    ProductComponent,
    CategoryComponent,
    HomeComponent,
    AuthComponent,
    CartComponent,
    PaymentComponent,
    AddressComponent,
    AddressUpdateComponent,
    OrderComponent,
    OrderDetailsComponent
  ],
  entryComponents: [AddressUpdateComponent],
  exports: [NavComponent]
})
export class ShopModule {}
