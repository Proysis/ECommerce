import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUser } from 'src/app/models/loginUser';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[AdminAuthService]
})
export class AuthComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private adminService:AdminAuthService) { }

  adminLoginForm:FormGroup;

  admin:LoginUser = new LoginUser();

  createAdminLoginForm(){
    this.adminLoginForm = this.formBuilder.group({
      userName:["",Validators.required],
      password:["",Validators.required]
    })
  }

  ngOnInit() {
    this.createAdminLoginForm();
  }

  add(){
    if(this.adminLoginForm.valid){
      this.admin = Object.assign({},this.adminLoginForm.value);
    }
    this.adminService.Login(this.admin);

  }

}
