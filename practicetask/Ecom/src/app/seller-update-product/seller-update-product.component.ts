import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  standalone: false,
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.css'
})
export class SellerUpdateProductComponent implements OnInit {
    constructor(private route : ActivatedRoute ,private product:ProductService){ }

    ngOnInit(): void {
      let productId = this.route.snapshot.paramMap.get(`id`)
      console.warn(productId)
      productId && this.product.getProduct(productId).subscribe((data)=>{

      });
    }
    submit(data:any){

    }
}
