import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orderDetails',
  templateUrl: './orderDetails.component.html',
  styleUrls: ['./orderDetails.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() orderDetails:any;
  constructor() { }

  ngOnInit() {
  }

}
