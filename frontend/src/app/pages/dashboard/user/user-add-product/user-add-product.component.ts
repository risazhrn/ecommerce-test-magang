import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Product } from 'src/app/model/product';
import { FormGroup } from '@angular/forms';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../local-storage.service';
@Component({
  selector: 'app-user-add-product',
  templateUrl: './user-add-product.component.html',
  styleUrls: ['./user-add-product.component.scss']
})
export class UserAddProductComponent implements OnInit {
  faShoppingCart = faShoppingCart;

  productList: Product[] = [];
  products!: any[];
  userId!: string;
  localCart!: number;


  constructor(
    private localStorageService: LocalStorageService,
    private service: UserService,
    private activateRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.products = this.localStorageService.getItem('cart') || [];
    this.localCart = this.products.length;
    this.activateRoute.params.subscribe(param => {
      this.userId = param['id']
    })
    this.getProducts();
  }

  getProducts(){
    this.service.findProducts().subscribe((resp)=>{
      this.productList = resp.body!;
      console.log(`status code : ${resp.status}`)
      console.log(this.productList)
    })
  }
}
