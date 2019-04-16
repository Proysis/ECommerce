import { Injectable } from "@angular/core";
import { BaseService } from "../base.service";
import { BasketService } from "../basket/basket.service";
import { BasketProducts } from "src/app/models/basketProducts";
import { resolve } from "q";

@Injectable()
export class CardService {
  constructor(
    private base: BaseService,
    private basketService: BasketService
  ) {}

  get get(): Promise<BasketProducts[]> {
    let cartList: BasketProducts[] = [];
    if (this.base.OnlineCustomer) {
      return new Promise((resolve, reject) => {
        this.basketService
          .GetByCustomerId(this.base.OnlineCustomer.id)
          .subscribe(data => {
            cartList = data;
            resolve(cartList);
          });
      });
    } else {
      if (sessionStorage.getItem("CARDLIST")) {
        cartList = JSON.parse(sessionStorage.getItem("CARDLIST"));
      }

      return new Promise((resolve, reject) => {
        resolve(cartList);
      });
    }
  }

  public set set(basketProduct: BasketProducts) {
    if (this.base.OnlineCustomer) {
      this.basketService.AddToBasket(basketProduct);
    } else {
      let cartList: BasketProducts[] = [];
      if (sessionStorage.getItem("CARDLIST")) {
        cartList = JSON.parse(sessionStorage.getItem("CARDLIST"));
      }
      cartList.push(basketProduct);
      sessionStorage.setItem("CARDLIST", JSON.stringify(cartList));
    }
  }

  public RefreshList(cartList: BasketProducts[]) {
    sessionStorage.setItem("CARDLIST", JSON.stringify(cartList));
  }
}
