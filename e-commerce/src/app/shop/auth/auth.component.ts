import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/MustMatch';
import { CustomerAuthService } from 'src/app/services/customer-auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private auth: CustomerAuthService) { }

  registerForm: FormGroup;
  loginForm: FormGroup;
  customer: any = {};
  loginCustomer:any = {};

  ngOnInit() {
    this.CreateForms();
  }

  CreateForms() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      phone: ["", Validators.required],
      password: ["", Validators.required],
      passwordConfirm: ["", Validators.required]
    }, {
        validator: MustMatch('password', 'passwordConfirm')
      });
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required]
    })
  }

  Register() {
    if (this.registerForm.valid) {
      this.customer = Object.assign({}, this.registerForm.value);
      delete this.customer["passwordConfirm"];
    }
    this.auth.Register(this.customer);
  }
  Login(){
    if (this.loginForm.valid) {
      this.loginCustomer = Object.assign({}, this.loginForm.value);
    }
    this.auth.Login(this.loginCustomer);
  }
}
