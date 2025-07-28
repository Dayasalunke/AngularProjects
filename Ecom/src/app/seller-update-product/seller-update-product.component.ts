import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  standalone: false,
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.css'
})
export class SellerUpdateProductComponent implements OnInit {
    productData:undefined | product
    productMessage:undefined | string;
    constructor(private route : ActivatedRoute ,private product:ProductService){ }

    ngOnInit(): void {
      let productId = this.route.snapshot.paramMap.get(`id`)
      console.warn(productId)
      productId && this.product.getProduct(productId).subscribe((data)=>{
      this.productData = data;
      });
    }
submit(data: product) {
  console.warn(data);
  if (!data.price || data.price <= 0) {
    this.productMessage = "Price must be greater than 0";
    setTimeout(() => (this.productMessage = undefined), 3000);
    return;
  }

  if (this.productData) {
    data.id = this.productData.id;
  }

  this.product.updateProduct(data).subscribe((result) => {
    if (result) {
      this.productMessage = "Product has been updated";
    }
  });

  setTimeout(() => {
    this.productMessage = undefined;
  }, 3000);
}
}