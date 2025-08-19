import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ProductService } from '../services/product.service';
import { order } from '../data-type';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-my-orders',
  standalone: false,
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit{
   
  orderData:order[] | undefined
  constructor(private product:ProductService, @Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit():void{
    this.getOrderList();
  }
  
  cancelOrder(orderId:number | undefined){
     if(orderId) {
       this.product.cancelOrder(orderId).subscribe((result) =>{
        this.getOrderList();
       })
     }
  }
  
  getOrderList(){
    this.product.orderList().subscribe((result) =>{
      this.orderData = result;
    })
  }
}
