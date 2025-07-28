import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  standalone: false,
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage:string|undefined;
  messageColorClass: string = '';


  constructor(private product: ProductService){ }

  ngOnInit():void {

  }
submit(data: product) {
  //  console.warn(data);
  if (!data.price || data.price <= 0) {
    this.addProductMessage = "Price must be greater than 0";
     this.messageColorClass = "text-danger"; // Red color
    setTimeout(() => (this.addProductMessage = undefined), 3000);
    return;
  }

  this.product.addProduct(data).subscribe((result) => {
    if (result) {
      this.addProductMessage = "Product is successfully added";
      this.messageColorClass = "text-success"; // Green color
    }
    setTimeout(() => (this.addProductMessage = undefined), 3000);
  });
}

}