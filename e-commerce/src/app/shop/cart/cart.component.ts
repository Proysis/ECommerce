import { Component, OnInit } from "@angular/core";
import { BasketProducts } from "src/app/models/basketProducts";
import { CardService } from "src/app/services/card/card.service";
import { Basket } from 'src/app/models/basket';
import { ProductBasket } from 'src/app/models/productBasket';
import { BasketService } from 'src/app/services/basket/basket.service';
import { AlertifyService } from 'src/app/services/alertify-service/alertify.service';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
  providers: [CardService]
})
export class CartComponent implements OnInit {
  constructor(private cartList: CardService, private basketService:BasketService, private alertify:AlertifyService) {}

  basketProducts: BasketProducts[] = [];
  total: number = 0.0;
  count:number;
  ngOnInit() {
    this.FillList();
  }

  FillList(){
    this.cartList.get.then(data => {
      this.count = data.length;

      if (this.count) {
        this.cartList.get.then(data => {
          this.basketProducts = data;
  
          this.basketProducts.forEach(element => {
            this.total += element.quantity * element.price;
          });
        });
      }else{
        this.basketProducts = [];
      }
      
      var cardCount = document.getElementById("cardCount");
      cardCount.innerText = data.length.toString();
    });
  }

  RefreshCart() {
    
    this.cartList.get.then(data=>{
      this.count = data.length
    })
    if (this.count) {
      this.cartList.RefreshList(this.basketProducts);
      this.total = 0;
      this.basketProducts.forEach(element => {
        this.total += element.quantity * element.price;
      });
    }
  }

  Delete(productBasket:ProductBasket){
    this.basketService.DeleteFromBasket(productBasket).subscribe(data=>{
      this.alertify.success("Delete operation successfull");
      this.FillList();
    })
  }
}
