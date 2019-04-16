import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BaseService } from 'src/app/services/base.service';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  products:any;
  serviceName:string;
  categories:any;
  
  constructor(private dialog: MatDialog, private base:BaseService, private productService:ProductService) { 
    this.serviceName = "IProductService"
  }

  ngOnInit() {
    this.FillList();
  }


  ShowDialog(id: string = null) {
    if (id != null) {
      this.productService.GetByID(id).subscribe(data => {
        let dialogRef = this.dialog.open(ProductUpdateComponent, {
          height: "600px",
          width: "700px",
          data: data
        });
        dialogRef.componentInstance.lblOperationName = "Product Update";
        dialogRef.afterClosed().subscribe(result => {
          this.FillList();
        });
      });
    } else {
      let dialogRef = this.dialog.open(ProductUpdateComponent, {
        height: "600px",
        width: "700px"
      });
      dialogRef.componentInstance.lblOperationName = "New Product";
      dialogRef.afterClosed().subscribe(result => {
        this.FillList();
      });
    }
  }

  FillList() {
    this.base.GetAll(this.serviceName).subscribe(data => {
      this.products = data;
    });
  }

}
