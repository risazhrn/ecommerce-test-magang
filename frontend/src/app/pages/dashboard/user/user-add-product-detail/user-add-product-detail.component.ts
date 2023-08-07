import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProdukService } from '../../produk/produk.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from '../../local-storage.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-user-add-product-detail',
  templateUrl: './user-add-product-detail.component.html',
  styleUrls: ['./user-add-product-detail.component.scss'],
})
export class UserAddProductDetailComponent implements OnInit {
  private updateSubscription!: Subscription;
  faShoppingCart = faShoppingCart;

  productId!: string;
  product?: Product;
  categoryList!: Category[];
  stock = 0;
  local!: any[];
  userId!: string;
  localCart!: number;

  constructor(
    private activateRoute: ActivatedRoute,
    private service: ProdukService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      this.productId = param['productId'];
      this.userId = param['userId'];
    });


    this.local = this.localStorageService.getItem('cart') || [];
    this.localCart = this.local.length;
    this.getListCategories();
    this.getProdukById();
  }

  getProdukById() {
    this.service.findById(Number(this.productId)).subscribe((resp) => {
      this.product = resp.body!;
      console.log(this.product)
    });
  }

  getListCategories() {
    this.service.findCategories().subscribe((resp) => {
      this.categoryList = resp.body!;
      console.log(`status code : ${resp.status}`);
      console.log(this.categoryList);
    });
  }

  setStock($event: any) {
    this.stock = +$event.target.value;
  }

  addCart() {
    if (this.stock >= 1) {
      const index = this.local.findIndex((e) => e.id === this.product?.id);
      if (index === -1) {
        this.localStorageService.setItem('cart', [
          ...this.local,
          {
            id: this.product?.id,
            name: this.product?.name,
            image: this.product?.urlImage,
            price: this.product?.price,
            quantity: this.stock,
          },
        ]);
        this.ngOnInit();
      } else {
        this.local[index].quantity = this.stock;
        this.localStorageService.setItem('cart', this.local);
      }
    }
    location.reload();
  }
}
