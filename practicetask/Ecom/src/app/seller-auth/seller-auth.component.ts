import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  standalone:false,
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'] // typo: use style**Urls**
})
export class SellerAuthComponent implements OnInit {

  showLogin:boolean = false;
  authError:string='';
  constructor(private seller : SellerService, private router:Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller(); // typo fixed
  }

  signUp(data: SignUp): void {
    console.warn(data);
    this.seller.userSignUp(data); // typo fixed
  }
  login(data:SignUp):void{
    this.authError="";
    
    // console.warn(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => { 
      if(isError){
       this.authError="Email or password is not correct"
      }
    })
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }
}
