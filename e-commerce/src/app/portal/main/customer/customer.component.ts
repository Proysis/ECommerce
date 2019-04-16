import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private base:BaseService) { }

  customers:any = [];
  ngOnInit() {
    this.FillList();
  }

  FillList(){
    this.base.GetAll("ICustomerService").subscribe(data=>{
      this.customers = data;
    })
  }

}
