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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }