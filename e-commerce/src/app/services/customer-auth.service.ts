import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from './alertify-service/alertify.service';
import { BasketService } from './basket/basket.service';
import { BasketProducts } from '../models/basketProducts';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthService {

path: string;

  constructor(
    private http: HttpClient,
    private route: Router,
    private base: BaseService,
    private alert:AlertifyService,
    private basketService:BasketService
  ) {
    this.path = this.base.path + "auth/";
  }

  Login(loginCustomer: any) {
    this.http.post(this.path + "login", loginCustomer).subscribe(data => {
      if (data != null) {
        debugger;
        sessionStorage.setItem("ONLINECUSTOMER", JSON.stringify(data));

        this.alert.success("Login successful");
        
        if(sessionStorage.getItem("CARDLIST")){
          let basketProducts:BasketProducts[] = JSON.parse(sessionStorage.getItem("CARDLIST"));
          for(var i = 0; i<basketProducts.length; i++){
            basketProducts[i].customerId = this.base.OnlineCustomer.id;
          }
          this.basketService.AddListToBasket(basketProducts).subscribe(data=>{
            sessionStorage.removeItem("CARDLIST");
          })
        }
        this.route.navigateByUrl("/home");
      } else {
      }
    });
  }

  Register(registerCustomer: any) {
    debugger;
    this.http.post(this.path + "customerRegister", registerCustomer).subscribe(data => {
      debugger;
      if (data == -1) {
        this.alert.error("Customer has already exists with email");
      } else {
        this.alert.success("Registiration successfull");
      }
    });
  }
}
