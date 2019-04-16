import { Component, OnInit } from "@angular/core";
import { OnlineCustomer } from "src/app/helpers/OnlineCustomer";
import { Router } from "@angular/router";
import { BaseService } from "src/app/services/base.service";
import { AddressService } from "src/app/services/address/address.service";
import { CardService } from "src/app/services/card/card.service";
import { BasketProducts } from 'src/app/models/basketProducts';
import { OrderService } from 'src/app/services/order/order.service';
import { AlertifyService } from 'src/app/services/alertify-service/alertify.service';

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
  providers: [AddressService, OrderService, CardService]
})
export class PaymentComponent implements OnInit {
  constructor(
    private route: Router,
    private base: BaseService,
    private addressService: AddressService,
    private cartList: CardService,
    private orderService:OrderService,
    private alertify:AlertifyService
  ) {}

  billingAddress: string = "You have no billing address";

  shippingAddress: string = "You have no shipping address";
  total: number = 0;
  count: number = 0;
  basketProducts:BasketProducts[];
  basketId:string;

  ngOnInit() {
    if (!this.base.OnlineCustomer) {
      this.route.navigateByUrl("/auth");
    } else {
      this.SetAddresses();
      this.FillList();
    }
  }
  SetAddresses(){
    this.addressService
        .GetCustomBillingAddressByCustomerId(this.base.OnlineCustomer.id)
        .subscribe(data => {
          if (data) {
            this.billingAddress =
              data.street +
              " " +
              data.district +
              " " +
              data.town +
              "/" +
              data.city +
              "\n\n" +
              "Note: " +
              data.description;
          }
        });

      this.addressService
        .GetCustomShippingAddressByCustomerId(this.base.OnlineCustomer.id)
        .subscribe(data => {
          if (data) {
            this.shippingAddress =
              data.street +
              " " +
              data.district +
              " " +
              data.town +
              "/" +
              data.city +
              "\n\n" +
              "Note: " +
              data.description;
          }
        });
  }
  FillList() {


    this.cartList.get.then(data => {
      this.count = data.length;

      if (this.count) {
        this.cartList.get.then(data => {
          this.basketProducts = data;
          this.basketId = data[0].basketId;

          this.basketProducts.forEach(element => {
            this.total += element.quantity * element.price;
          });
        });
      }
    });
  }

  AddOrder(orderModel:any){
    this.orderService.AddNewOrder(orderModel).subscribe(data=>{
      this.alertify.success("Payment Successfull");
      this.route.navigateByUrl("/order");
    })
  }
}
