import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: product[] = [];

  constructor(private route: ActivatedRoute, private product: ProductService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const query = params['query'];
      if (query) {
        this.product.searchProducts(query).subscribe((res) => {
          this.searchResult = res;
        });
      }
    });
  }
}
