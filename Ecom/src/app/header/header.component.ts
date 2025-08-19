import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  searchResult: undefined|product[];
  userName:string="";
  searchInput: any;
  cartItems=0;
  constructor(private route: Router, private product: ProductService,@Inject(PLATFORM_ID) private platformId: Object) {}

 ngOnInit(): void {

  if(isPlatformBrowser(this.platformId)){
  this.route.events.subscribe((val: any) => {
    if (val.url) {
      if (localStorage.getItem('seller')) {
        this.menuType = 'seller';
        this.sellerName = JSON.parse(localStorage.getItem('seller')!).name;
      } else if (localStorage.getItem('user')) {
        this.menuType = 'user';
        let userData = JSON.parse(localStorage.getItem('user')!); // ✅ fix
        this.userName = userData.name;
        this.product.getCartList(userData.id).subscribe(); 
      } else {
        this.menuType = 'default';
      }
    }
  });
 
  // Initialize cart count from localStorage
  let cartData = localStorage.getItem('localCart');
  if(cartData){
    this.cartItems = JSON.parse(cartData).length;
  }
  
  // Subscribe to cart data changes
  this.product.cartData.subscribe((items) =>{
    if(items && items.length >= 0){
      this.cartItems = items.length;
    } else {
      this.cartItems = 0;
    }
  })
  
  // Also listen for local cart changes
  if (localStorage.getItem('user')) {
    let userData = JSON.parse(localStorage.getItem('user')!);
    this.product.getCartList(userData.id).subscribe();
  }
  }
  
}

  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
    this.product.cartData.emit([]);
  }

searchProduct(event: KeyboardEvent) {
  const query = (event.target as HTMLInputElement).value;

  if (query && query.trim().length > 0) {
    this.product.searchProduct(query).subscribe((result) => {
      // Filter only products where name includes query
      this.searchResult = result.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    });
  } else {
    this.searchResult = [];
  }
}

  clearSearchBox() {
    if (this.searchInput) {
      this.searchInput.nativeElement.value = '';
      this.searchResult = [];
    }
  }
  

  hideSearch() {
    setTimeout(() => {
      this.searchResult = [];
    }, 400);
  }
  
  redirectToDetails(id:string){
  this.route.navigate(['/details/'+ id]);
  }
submitSearch(val: string) {
  this.route.navigate([`search/${val}`])
    this.searchResult = []; // clear suggestions

}

}