import { Component, OnInit } from '@angular/core';
import { login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  standalone: false,
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent implements OnInit {
  showLogin:boolean=true;

  constructor(private user:UserService){}

  ngOnInit(): void {
    this.user.userAuthReload();
  }
  signUp(data:SignUp){ 
  this.user.userSignUp(data);
  }
   login(data:login){
    this.user.userLogin(data);
   }
   openSignUp(){
    this.showLogin=false;
    
   }
   openLogin(){
    this.showLogin=true;
   }

}