import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../../partials/title/title.component';
import { CommonModule } from '@angular/common';
import { TOAST_CONFIG, ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrConfigModule } from '../../../toastr-config.module';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    HttpClientModule, 
    TitleComponent, 
    CommonModule, 
    LoginPageComponent, 
    ToastrConfigModule,
    ToastrModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  providers: [UserService, ToastrConfigModule, ToastrService]
})
export class LoginPageComponent implements OnInit{

  loginForm!:FormGroup;
  isSubmitted = false;
  returnUrl = '';


  constructor(private formBuilder:FormBuilder, private UserService:UserService, private activatedRoute:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    this.UserService.login({
      email: this.fc.email.value,
      password: this.fc.password.value
    }).subscribe(() =>{
      this.router.navigateByUrl(this.returnUrl);
    });
  }

}
