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
        this.product.getCartList(userData.id); 
      } else {
        this.menuType = 'default';

        
      }
    }
  });
 
  
// if( localStorage.getItem('localCart')){
  let cartData = localStorage.getItem('localCart');
  console.log()
  if(cartData){
    //  console.log(JSON.parse(cartData).length)
    this.cartItems = JSON.parse(cartData).length
  }
  // console.log(this.product)
  this.product.cartData.subscribe((items) =>{
    // console.log(items)
  if(items.length >0){
   this.cartItems = items.length
  }
    
  })
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