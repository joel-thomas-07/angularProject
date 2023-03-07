import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
username="";
password="";
errorMsg="";
constructor(private auth:AuthService,private router:Router ){}
login(){
  if(this.username.trim().length===0){
    this.errorMsg="username is required";
  }
  else if(this.password.trim().length===0){
    this.errorMsg="password is required";
  }else{
    this.errorMsg="";
    let res = this.auth.login(this.username,this.password);
    if(res===200){
      this.router.navigate(['home']);
    }else if(res===403)
    this.errorMsg="invalid credential";
  }
}
}
