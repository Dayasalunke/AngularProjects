import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { login, SignUp } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  invalidUserAuth = new EventEmitter<boolean>(false)
  constructor(private http:HttpClient, private router:Router, @Inject(PLATFORM_ID) private platformId: Object) {}
  userSignUp(user: SignUp){
    // console.warn(user);
   this.http.post("  http://localhost:3000/users",user,{observe:'response'})
   .subscribe((result) => {
      if(result && isPlatformBrowser(this.platformId)){
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigate(['/']);
      }
   })
  }
  userLogin(data:login){
    this.http.get<SignUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'})
    .subscribe((result) =>{
      if(result && result.body?.length){
        this.invalidUserAuth.emit(false);
        if(isPlatformBrowser(this.platformId)){
          localStorage.setItem('user',JSON.stringify(result.body[0]));
        }
        this.router.navigate(['/']);
      }else{
        this.invalidUserAuth.emit(true);
      }
    })
  }
  userAuthReload(){
    if(isPlatformBrowser(this.platformId) && localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }
}
