import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProdukComponent } from './produk/produk.component';
import { KategoriComponent } from './kategori/kategori.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { ProdukDetailComponent } from './produk/produk-detail/produk-detail.component';
import { KategoriDetailComponent } from './kategori/kategori-detail/kategori-detail.component';
import { UserAddProductComponent } from './user/user-add-product/user-add-product.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { KategoriAddComponent } from './kategori/kategori-add/kategori-add.component';
import { ProdukAddComponent } from './produk/produk-add/produk-add.component';
import { IndexComponent } from './index/index.component';
import { UserAddProductDetailComponent } from './user/user-add-product-detail/user-add-product-detail.component';
import { UserDetailTransactionComponent } from './user/user-detail-transaction/user-detail-transaction.component';
import { UserListTransactionComponent } from './user/user-list-transaction/user-list-transaction.component';

const routes: Routes = [
  {
    path : "",
    component : IndexComponent,
  },
  {
    path : "user",
    component : UserComponent,
  },
  {
    path : "user/add",
    component : UserAddComponent
  },
  {
    path : "user/:userId",
    component : UserDetailComponent
  },

  {
    path : "catalog-product/:id",
    component : UserAddProductComponent
  },
  {
    path : "product-detail/:userId/:productId",
    component : UserAddProductDetailComponent
  },
  
  {
    path : "user/:userId/transaction",
    component : UserListTransactionComponent
  },
  {
    path : "user/:userId/transaction/:productId",
    component : UserDetailTransactionComponent
  },
  {
    path : "product",
    component : ProdukComponent
  },
  {
    path : "product/add",
    component : ProdukAddComponent
  },
  {
    path: "product/:id",
    component: ProdukDetailComponent
  },
  {
    path : "category",
    component : KategoriComponent
  },
  {
    path : "category/add",
    component : KategoriAddComponent
  },
  {
    path : "category/:id",
    component : KategoriDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
