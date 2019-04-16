import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { PortalModule } from './portal/portal.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeleteComponent } from './general-controls/delete/delete.component';
import { CardService } from './services/card/card.service';
import { OrderService } from './services/order/order.service';
@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ShopModule,
      PortalModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [CardService, OrderService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
