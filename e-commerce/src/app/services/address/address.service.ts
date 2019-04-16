import { Injectable } from "@angular/core";
import { BaseService } from "../base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AddressService {
  constructor(private base: BaseService, private http: HttpClient) {}

  GetCustomShippingAddressByCustomerId(customerId: string): Observable<any> {
    return this.http.get<any>(this.base.path + "address/billing/" + customerId);
  }

  GetCustomBillingAddressByCustomerId(customerId: string): Observable<any> {
    return this.http.get<any>(this.base.path + "address/shipping/" + customerId);
  }

  AddAddress(address:any){
    return this.http.post(this.base.path + "address/addAddress", address);
  }
}
