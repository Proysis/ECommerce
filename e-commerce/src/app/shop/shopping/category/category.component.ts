import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private base:BaseService, private categoryService:CategoryService,private router: Router, private activatedRoute:ActivatedRoute) { }

  categories:any;
  categoryIds:string[]=[];

  ngOnInit() {
    this.FillList();
    this.Filter();
  }

  FillList(){
    this.base.GetAll('ICategoryService').subscribe(data=>{
      this.categories = data;
    })
  }

  Filter(categoryId:string = null){
    if(categoryId){
      if(this.categoryIds.find(t=>t == categoryId)){
        this.categoryIds.splice(this.categoryIds.indexOf(categoryId),1);
      }else{
        this.categoryIds.push(categoryId);
      }
      this.router.navigateByUrl('shopping/products/category/'+this.categoryIds);
    }else{
      this.categoryIds = [];
      this.router.navigateByUrl('shopping/products');
    }
  }

  isActive(categoryId:string){
    return this.categoryIds.find(t=>t == categoryId) ? true : false
  }
}
