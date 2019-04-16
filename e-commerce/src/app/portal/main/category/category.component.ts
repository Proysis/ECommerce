import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:any;
  serviceName:string;
  
  constructor(private dialog: MatDialog, private base:BaseService) { 
    this.serviceName = "ICategoryService"
  }

  ngOnInit() {
    this.FillList();
  }


  ShowDialog(id: string = null) {
    if (id != null) {
      this.base.GetByID(id, this.serviceName).subscribe(data => {
        let dialogRef = this.dialog.open(CategoryUpdateComponent, {
          height: "600px",
          width: "700px",
          data: data
        });
        dialogRef.componentInstance.lblOperationName = "User Update";
        dialogRef.afterClosed().subscribe(result => {
          this.FillList();
        });
      });
    } else {
      let dialogRef = this.dialog.open(CategoryUpdateComponent, {
        height: "600px",
        width: "700px"
      });
      dialogRef.componentInstance.lblOperationName = "New User";
      dialogRef.afterClosed().subscribe(result => {
        this.FillList();
      });
    }
  }

  FillList() {
    this.base.GetAll(this.serviceName).subscribe(data => {
      this.categories = data;
    });
  }
}
