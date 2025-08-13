import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object  // Inject PLATFORM_ID to check platform
  ) {}

  userSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        console.warn(result);
        if (result) {
          // Only use localStorage if running in browser
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('seller', JSON.stringify(result.body));
          }
          this.router.navigate(['seller-home']);
        }
      });
  }

  reloadSeller() {
    if (isPlatformBrowser(this.platformId)) {  // Check if running in browser
      if (localStorage.getItem('seller')) {
        this.isSellerLoggedIn.next(true);
        this.router.navigate(['seller-home']);
      }
    }
  }

  userLogin(data: login) {
    console.warn(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' })
      .subscribe((result: any) => {
        console.warn(result);

        if (result && result.body && result.body.length) {
          console.warn("user logged in");
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('seller', JSON.stringify(result.body));
          }
          this.router.navigate(['seller-home']);
        } else {
          console.warn("login failed");
          this.isLoginError.emit(true);
        }
      });
  }
}
