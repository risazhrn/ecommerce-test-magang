import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DashboardRoutingModule } from './dahboard-routing.module';
import { ProdukComponent } from './produk/produk.component';
import { KategoriComponent } from './kategori/kategori.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from './user/user.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { ProdukService } from './produk/produk.service';
import { KategoriService } from './kategori/kategori.service';
import { ProdukDetailComponent } from './produk/produk-detail/produk-detail.component';
import { KategoriDetailComponent } from './kategori/kategori-detail/kategori-detail.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserAddProductComponent } from './user/user-add-product/user-add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KategoriAddComponent } from './kategori/kategori-add/kategori-add.component';
import { ProdukAddComponent } from './produk/produk-add/produk-add.component';
import { IndexComponent } from './index/index.component';
import { UserAddProductDetailComponent } from './user/user-add-product-detail/user-add-product-detail.component';
import { UserAddProductCartComponent } from './user/user-add-product-cart/user-add-product-cart.component';
import { LocalStorageService } from './local-storage.service';
import { UserDetailTransactionComponent } from './user/user-detail-transaction/user-detail-transaction.component';
import { UserListTransactionComponent } from './user/user-list-transaction/user-list-transaction.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ProdukComponent,
    KategoriComponent,
    UserDetailComponent,
    ProdukDetailComponent,
    KategoriDetailComponent,
    UserAddComponent,
    UserAddProductComponent,
    KategoriAddComponent,
    ProdukAddComponent,
    IndexComponent,
    UserAddProductDetailComponent,
    UserAddProductCartComponent,
    UserDetailTransactionComponent,
    UserListTransactionComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    UserService,
    ProdukService,
    KategoriService,
    LocalStorageService
  ]
})
export class DashboardModule { }
