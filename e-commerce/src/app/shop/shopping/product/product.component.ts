import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Cart } from "src/app/models/cart";
import { CustomerProduct } from "src/app/models/customerProduct";
import { CardService } from "src/app/services/card/card.service";
import { ProductService } from "src/app/services/product/product.service";
import { BasketProducts } from "src/app/models/basketProducts";
import { BaseService } from "src/app/services/base.service";
import { BasketService } from "src/app/services/basket/basket.service";
import { NavComponent } from '../../nav/nav.component';
import { AlertifyService } from 'src/app/services/alertify-service/alertify.service';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService, CardService]
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private base: BaseService,
    private basketService: BasketService,
    private cartList: CardService,
    private alertify: AlertifyService
  ) {}
  products: any;
  cart: Cart;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryIds"]) {
        var categoryIds: string[];
        categoryIds = params["categoryIds"].split(",");
        this.FillList(categoryIds);
      } else {
        this.FillList();
      }
    });
  }

  FillList(categoryIds: string[] = []) {
    this.productService.GetByCategories(categoryIds).subscribe(data => {
      this.products = data;
    });
  }
  AddToCart(product: CustomerProduct) {
    this.cartList.get.then(data=>{
      if (data) {
        let cartList: BasketProducts[];
        var count = data.length;
        cartList = data;
        var addItem = cartList.find(t => t.productId == product.productId);
        if (addItem) {
          addItem.quantity += 1;
          if (this.base.OnlineCustomer) {
            addItem.customerId = this.base.OnlineCustomer.id;
            this.basketService.AddToBasket(addItem);
          } else {
            this.cartList.RefreshList(cartList);
          }
        } else {
          let basket = new BasketProducts();
          basket.productId = product.productId;
          basket.name = product.productName;
          basket.price = product.productPrice;
          basket.quantity = 1;
          basket.totalPrice = product.productPrice;
          basket.customerId = this.base.OnlineCustomer
            ? this.base.OnlineCustomer.id
            : null;
          this.cartList.set = basket;
          count += 1;
        }
        
        debugger;
        var cardCount = document.getElementById("cardCount");
        cardCount.innerText = count.toString();

        this.alertify.success("Product is added your card");
      }
    })
    
  }
}
