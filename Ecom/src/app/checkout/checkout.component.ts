import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, order } from '../data-type';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  totalPrice:number | undefined;
  cartData:cart[] |undefined;
  orderMsg:string | undefined;
  isProcessing: boolean = false;

  constructor(private product:ProductService,private router:Router, @Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(){
       this.product.currentCart().subscribe((result) => {
      let price = 0;
      this.cartData = result;
      result.forEach((item) => {
        if(item.quantity){
          price = price + (+item.price * + item.quantity);
        }
      });
      this.totalPrice = price+(price/10)+100-(price/10);
      // console.warn(this.totalPrice);
    });
  }

  orderNow(data: { email: string, address: string, contact: string }, form: NgForm) {
    this.isProcessing = true;
    let userId;
    if(isPlatformBrowser(this.platformId)) {
      let user = localStorage.getItem('user');
      userId = user && JSON.parse(user).id;
    }

    if(this.totalPrice){
      let orderData:order = {
        ...data,
        totalPrice: this.totalPrice,
        userId,
        id:undefined
      }
      
      // Delete cart items immediately
      this.cartData?.forEach((item) =>{
        if(item.id) {
          this.product.deleteCartItems(item.id).subscribe((result: any) =>{
            if(result.status === 200){
              // Cart count will be updated automatically by the service
            }
          });
        }
      });

      this.product.orderNow(orderData).subscribe((result: any) =>{
        if(result){
           this.orderMsg = "your order has been placed";
           form.reset();
           // Navigate immediately after order placement
           setTimeout(() => {
             this.router.navigate(['/my-orders']);
             this.orderMsg = undefined;
             this.isProcessing = false;
           }, 1000);
        }
      })
  
    }
  
  }
}
