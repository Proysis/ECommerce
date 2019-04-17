import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
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
      this.FillList();
    
  }

  FillList() {
    this.base.GetAll("IVwOrderService").subscribe(data=>{
      this.orders = data;
    });
  }

  GetOrderDetails(id:string){
    this.orderService.GetOrderDetails(id).subscribe(data=>{
      this.orderDetails = data;
    })
  }
}
