import { Component, OnInit, Inject } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Product } from "src/app/models/product";
import { AlertifyService } from "src/app/services/alertify-service/alertify.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ProductService } from "src/app/services/product/product.service";
import { ProductCategory } from "src/app/models/productCategory";
import { BaseService } from "src/app/services/base.service";
import { Category } from "src/app/models/category";
declare var $: any;
@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
  providers:[ProductService]
})
export class ProductUpdateComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductUpdateComponent>,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private alert: AlertifyService,
    private base: BaseService
  ) {}
  updateForm: FormGroup;
  lblOperationName;
  productCategory: any = {};

  categories: Category[];

  createProductUpdateForm() {
    if (this.data) {
      this.updateForm = this.formBuilder.group({
        product: this.formBuilder.group({
          name: [this.data.product.name, Validators.required],
          description: [this.data.product.description, Validators.required],
          stock: [this.data.product.stock, Validators.required],
          price: [this.data.product.price, Validators.required],
          imageUrl: [this.data.product.imageUrl]
        }),
        categoryIds: [this.data.categoryIds, Validators.required]
      });
    } else {
      this.updateForm = this.formBuilder.group({
        product: this.formBuilder.group({
          name: ["", Validators.required],
          description: ["", Validators.required],
          stock: ["", Validators.required],
          price: ["", Validators.required],
          imageUrl: [""]
        }),
        categoryIds: ["", Validators.required]
      });
    }
  }

  ngOnInit() {
    this.base.GetAll("ICategoryService").subscribe(data => {
      this.categories = data;
      $("select").selectpicker();
    });

    this.createProductUpdateForm();
  }

  Update() {
    if (this.updateForm.valid) {
      this.productCategory = Object.assign(
        this.productCategory,
        this.updateForm.value
      );
      if (this.data) {
        debugger;
        this.productCategory.product.id = this.data.product.id;
      }
    }
    this.productService.Update(this.productCategory).subscribe(
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
