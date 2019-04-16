import { Component, OnInit, SimpleChanges, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card/card.service';
import { BasketProducts } from 'src/app/models/basketProducts';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[CardService]
})
export class NavComponent implements OnInit {

  constructor(private route:Router, private cartList:CardService) { }

  @Input() cartCount:number;

   ngOnInit() {
    this.cartList.get.then(data=>{
      var cardCount = document.getElementById("cardCount");
      cardCount.innerText = data.length.toString();
    });
  }

  get OnlineCustomer() {
    if (sessionStorage.getItem("ONLINECUSTOMER")){
      return JSON.parse(sessionStorage.getItem("ONLINECUSTOMER"));
    }
    else
      return null
  }

  SingOut(){
    sessionStorage.removeItem("ONLINECUSTOMER");

    this.route.navigateByUrl("/auth");
  }
}
