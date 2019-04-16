import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "src/app/services/product/product.service";
import { AlertifyService } from "src/app/services/alertify-service/alertify.service";
import { BaseService } from "src/app/services/base.service";
import { AddressService } from "src/app/services/address/address.service";

@Component({
  selector: "app-address-update",
  templateUrl: "./address-update.component.html",
  styleUrls: ["./address-update.component.css"],
  providers:[AddressService]
})
export class AddressUpdateComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddressUpdateComponent>,
    private formBuilder: FormBuilder,
    private alert: AlertifyService,
    private base: BaseService,
    private addressService:AddressService
  ) {}

  addressForm: FormGroup;
  lblOperationName: string;
  address: any = {};

  ngOnInit() {
    this.CreateForm();
  }

  CreateForm() {
    debugger;
    if (!this.data) {
      this.addressForm = this.formBuilder.group({
        city: ["", Validators.required],
        town: ["", Validators.required],
        district: ["", Validators.required],
        street: ["", Validators.required],
        phoneNumbers: ["", Validators.required],
        description: [""],
        isCustomBillingAddress: [false],
        isCustomShippingAddress: [false]
      });
    }
    else{
      this.addressForm = this.formBuilder.group({
        city: [this.data.city, Validators.required],
        town: [this.data.town, Validators.required],
        district: [this.data.district, Validators.required],
        street: [this.data.street, Validators.required],
        phoneNumbers: [this.data.phoneNumbers, Validators.required],
        description: [this.data.description],
        isCustomBillingAddress: [this.data.isCustomBillingAddress],
        isCustomShippingAddress: [this.data.isCustomShippingAddress]
      });
    }
  }

  AddAddress() {
    debugger;
    if (this.addressForm.valid) {
      this.address = Object.assign(this.address, this.addressForm.value);
      if (this.data) {
        debugger;
        this.address.id = this.data.id;
      }
    }
    this.address.customerId = JSON.parse(
      sessionStorage.getItem("ONLINECUSTOMER")
    ).id;
    this.addressService.AddAddress(this.address).subscribe(
      data => {
        this.alert.success("Action successfuly");
        if (this.dialogRef != null) {
          this.dialogRef.close("closed");
        }
      },
      err => {
        this.alert.error(
          "An error was encountered during the process. Error :" + err
        );
      }
    );
  }
}
