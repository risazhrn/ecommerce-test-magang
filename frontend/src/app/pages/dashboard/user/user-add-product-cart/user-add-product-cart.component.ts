import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../../local-storage.service';
import { Subscription, interval } from 'rxjs';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add-product-cart',
  templateUrl: './user-add-product-cart.component.html',
  styleUrls: ['./user-add-product-cart.component.scss'],
})
export class UserAddProductCartComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  userId!: string;
  products!: any[];
  localStorageSub!: Subscription;
  total = 0;

  constructor(
    private localStorageService: LocalStorageService,
    private service: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      this.userId = param['userId'];
    });
    this.products = this.localStorageService.getItem('cart') || [];

    this.localStorageSub = this.localStorageService
      .onLocalStorageChange()
      .subscribe((key: string) => {
        this.products = this.localStorageService.getItem('cart') || [];
      });

    this.products.map((e) => {
      this.total += e.price * e.quantity;
    });
  }

  removeProductCart(id: number) {
    const productIndex = this.products.findIndex((e) => e.id === id);
    this.products.splice(productIndex, 1);
    this.localStorageService.setItem('cart', this.products);

    location.reload();
  }

  checkout() {
    this.products.map((e) => {
      this.service
        .userTransaction({
          user_id: +this.userId,
          product_id: e.id,
          quantity: e.quantity,
        })
        .subscribe((resp) => {
          console.log(resp.body);
          this.router.navigate([
            '/',
            'dashboard',
            'user',
            this.userId,
            'transaction',
          ]);
          localStorage.clear();
        });
    });
  }
}
