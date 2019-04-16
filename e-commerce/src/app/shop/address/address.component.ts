import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { MatDialog } from '@angular/material';
import { AddressUpdateComponent } from './address-update/address-update.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private base:BaseService, private dialog:MatDialog) { }

  addresses:any;
  ngOnInit() {
    this.FillList();
  }

  FillList(){
    this.base.GetAll("IAddressService").subscribe(data=>{
      this.addresses = data;
    })
  }

  ShowDialog(id:string = null){
    if (id != null) {
      this.base.GetByID(id, "IAddressService").subscribe(data => {
        let dialogRef = this.dialog.open(AddressUpdateComponent, {
          height: "600px",
          width: "700px",
          data: data
        });
        dialogRef.componentInstance.lblOperationName = "Address Update";
        dialogRef.afterClosed().subscribe(result => {
          this.FillList();
        });
      });
    } else {
      let dialogRef = this.dialog.open(AddressUpdateComponent, {
        height: "600px",
        width: "700px"
      });
      dialogRef.componentInstance.lblOperationName = "New Address";
      dialogRef.afterClosed().subscribe(result => {
        this.FillList();
      });
    }
  }

}
