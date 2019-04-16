import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { routes } from "./main.routing";
import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from "./category/category.component";
import { CustomerComponent } from "./customer/customer.component";
import { OrderComponent } from "./order/order.component";
import {
  MatCheckboxModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSortModule,
  MatTooltipModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CategoryUpdateComponent } from "./category/category-update/category-update.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { GeneralControlsModule } from 'src/app/general-controls/general-controls.module';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" }),
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralControlsModule
  ],
  declarations: [
    MainComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    CustomerComponent,
    OrderComponent,
    CategoryUpdateComponent,
    ProductUpdateComponent,
    OrderDetailComponent
  ],
  entryComponents: [CategoryUpdateComponent, ProductUpdateComponent]
})
export class MainModule {}
