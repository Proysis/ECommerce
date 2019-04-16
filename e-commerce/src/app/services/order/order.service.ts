import { Injectable } from "@angular/core";
import { BaseService } from "../base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class OrderService {
  constructor(private base: BaseService, private http: HttpClient) {}

  AddNewOrder(orderModel: any) {
    return this.http.post(this.base.path + "order/addNewOrder", orderModel);
  }

  GetOrders(customerId: string): Observable<any> {
    debugger;
    return this.http.get<any>(
      this.base.path + "order/customerOrders/" + customerId
    );
  }

  GetOrderDetails(orderId: string): Observable<any> {
    return this.http.get<any>(this.base.path + "order/orderDetails/" + orderId);
  }
}
