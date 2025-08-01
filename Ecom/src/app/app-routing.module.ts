import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';






const routes: Routes = [
  { 
    component:HomeComponent,
    path:"", 
    
  },
  { 
    component:SellerAuthComponent,
    path:"seller-auth",
    },
  { 
    component:SellerHomeComponent,
    path:"seller-home",
    canActivate:[authGuard]
    
  },{
    component:SellerAddProductComponent,
    path:'seller-add-product',
    canActivate:[authGuard]
  },
  {
    component:SellerUpdateProductComponent,
    path:'seller-update-product/:id',
    canActivate:[authGuard]
  },
  {
   component:SearchComponent,
   path: 'search/:query'
  },
  {
    component:ProductDetailsComponent,
     path: 'details/:productId'
  },
  {
    component:UserAuthComponent,
    path: 'user-auth'
  },
  {
    component:CartPageComponent,
    path: 'cart-page'
  },
  {
    component:CheckoutComponent,
    path:'checkout'
  },
  {
    component:MyOrdersComponent,
    path : 'my-orders'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }