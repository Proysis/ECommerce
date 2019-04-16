import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

constructor(protected http: HttpClient, public base : BaseService) {
 }


public GetByID(id: string): Observable<any> {
  return this.http.get<any>(this.base.path + "category/" + id);
}


}
