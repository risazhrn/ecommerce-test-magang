import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Product } from 'src/app/model/product';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-add-product',
  templateUrl: './user-add-product.component.html',
  styleUrls: ['./user-add-product.component.scss']
})
export class UserAddProductComponent implements OnInit {

  productList: Product[] = [];
  userProductForm!: FormGroup

  constructor(
    private service: UserService
  ){}

  ngOnInit(): void {
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
