import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/services/order/order.service";
import { Router } from "@angular/router";
import { BaseService } from "src/app/services/base.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  constructor(
    private base: BaseService,
    private orderService: OrderService,
    private route: Router
  ) {}
  orders:any = [];
  orderDetails:any=[];
  ngOnInit() {
    if (!this.base.OnlineCustomer) {
      this.route.navigateByUrl("/auth");
    } else {
      this.FillList();
    }
  }

  FillList() {
    this.orderService.GetOrders(this.base.OnlineCustomer.id).subscribe(data=>{
      this.orders = data;
    });
  }

  GetOrderDetails(id:string){
    this.orderService.GetOrderDetails(id).subscribe(data=>{
      this.orderDetails = data;
    })
  }
}
