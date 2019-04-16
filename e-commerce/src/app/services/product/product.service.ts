import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';

@Injectable()
export class ProductService {

  constructor(protected http: HttpClient, public base : BaseService) {
   }
  
  
  public GetByID(id: string): Observable<any> {
    debugger;
    return this.http.get<any>(this.base.path + "product/" + id);
  }

  public Update(value:any){
    return this.http.post(this.base.path + "product/InsertOrUpdate", value);
  }

  
public GetByCategories(categoryIds:string[] = []): Observable<any>{
  return this.http.post(this.base.path + "product/products", categoryIds);
}

}
