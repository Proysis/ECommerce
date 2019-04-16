import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "./base.service";
import { Router } from "@angular/router";
import { LoginUser } from '../models/loginUser';

@Injectable()
export class AdminAuthService {
  path: string;

  constructor(
    private http: HttpClient,
    private route: Router,
    private base: BaseService
  ) {
    this.path = this.base.path + "admin/";
  }

  Login(loginUser: LoginUser) {
    debugger;
    this.http.post(this.path + "login", loginUser).subscribe(data => {
      debugger;
      if (data != null) {
        sessionStorage.setItem("ONLINEADMIN", JSON.stringify(data));
        this.route.navigateByUrl("/portal/home");
      } else {
      }
    });
  }
}
