import { Injectable } from "@angular/core";
import { Basket } from "src/app/models/basket";
import { ProductBasket } from "src/app/models/productBasket";
import { Observable } from "rxjs";
import { BasketProducts } from "src/app/models/basketProducts";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "../base.service";

@Injectable({
  providedIn: "root"
})
export class BasketService {
  constructor(private http: HttpClient, private base: BaseService) {}

  GetByCustomerId(customerId: string): Observable<BasketProducts[]> {
    return this.http.get<BasketProducts[]>(
      this.base.path + "basket/getAllByCustomerId/" + customerId
    );
  }

  AddToBasket(basketProduct: BasketProducts) {
    debugger;
    this.http
      .post(this.base.path + "basket/addToBasket", basketProduct)
      .subscribe();
  }

  AddListToBasket(basketProducts: BasketProducts[]) {
    return this.http.post(
      this.base.path + "basket/addListToBasket",
      basketProducts
    );
  }

  DeleteFromBasket(productBasket:ProductBasket){
    return this.http.post(
      this.base.path + "basket/deleteFromBasket",
      productBasket
    );
  }
}
