import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Category } from "src/app/models/category";
import { BaseService } from "src/app/services/base.service";
import { AlertifyService } from "src/app/services/alertify-service/alertify.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-category-update",
  templateUrl: "./category-update.component.html",
  styleUrls: ["./category-update.component.css"]
})
export class CategoryUpdateComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CategoryUpdateComponent>,
    private formBuilder: FormBuilder,
    private base: BaseService,
    private alert: AlertifyService
  ) {}
  categoryUpdateForm: FormGroup;
  lblOperationName;
  category: Category = new Category();

  createCategoryUpdateForm() {
    if (this.data) {
      this.categoryUpdateForm = this.formBuilder.group({
        name: [this.data.name, Validators.required],
        description: [this.data.description, Validators.required],
        imageUrl: [this.data.imageUrl]
      });
    } else {
      this.categoryUpdateForm = this.formBuilder.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
        imageUrl: [""]
      });
    }
  }

  ngOnInit() {
    debugger;
    if(this.data){
      this.category=this.data;
    }
    this.createCategoryUpdateForm();
  }

  Update() {
    debugger;
    if (this.categoryUpdateForm.valid) {
      this.category = Object.assign(this.category, this.categoryUpdateForm.value);
    }
    this.category.className = "Category";
    this.category.serviceName = "ICategoryService";
    this.base.Update(this.category).subscribe(
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
