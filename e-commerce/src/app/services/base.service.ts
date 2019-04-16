import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BaseService {

  constructor(protected http: HttpClient) {}

  localPath = "https://localhost:44386/api/";
  serverPath = "http://207.154.248.28:443/api/";
  path = this.serverPath;

  get OnlineCustomer(){
    if(sessionStorage.getItem("ONLINECUSTOMER")){
      return JSON.parse(sessionStorage.getItem("ONLINECUSTOMER"));
    }

    return null;
  }

  Update(value: any) {
    return this.http.post(this.path + "base/update", value);
  }

  Delete(value: any) {
    return this.http.post(this.path + "base/delete", value);
  }

  GetAll(serviceName: string): Observable<any> {
    return this.http.get<any>(this.path + "base/" + serviceName);
  }
  public GetByID(id: string, serviceName: string): Observable<any> {
    return this.http.get<any>(this.path + "base/" + serviceName + "/" + id);
  }
}
