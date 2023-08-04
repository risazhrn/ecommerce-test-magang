import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdukService } from '../produk.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-produk-detail',
  templateUrl: './produk-detail.component.html',
  styleUrls: ['./produk-detail.component.scss']
})
export class ProdukDetailComponent implements OnInit{

  productId!: string;
  product!: Product;
  productForm!: FormGroup;
  isEdit: boolean = false;
  categoryList!: Category[];
  gambar!: string;
  

  constructor (
    private activateRoute : ActivatedRoute,
    private service : ProdukService,
    private router : Router,
    private formBuilder : FormBuilder
    ){}

    ngOnInit(): void {
      this.activateRoute.params.subscribe(param => {
        this.productId = param['id']; 
      })

      this.getListCategories();
      this.getProdukById();
      

      this.productForm = this.formBuilder.group({
        name: this.formBuilder.control(null),
        category_id: this.formBuilder.control(null),
        stock: this.formBuilder.control(null),
        description: this.formBuilder.control(null),
        price: this.formBuilder.control(null),
        url_image: this.formBuilder.control(null)
      })      


    }

    getProdukById(){
      this.service.findById(Number(this.productId)).subscribe(resp => {
        this.product = resp.body!;
        this.productForm.patchValue(
         { 
          name : this.product.name,
          category_id : this.product.categoryId,
          stock : this.product.stock
        }
        );
      })
    }
  
    toggleEdit(){
      this.isEdit =! this.isEdit
    }

    update(){
      console.log(this.productForm.value)
      this.service.update(this.productForm.value, Number(this.productId)).subscribe(resp => {
        if (resp.status == 200) {
          console.log('berhasil')
          this.router.navigate(['/', 'dashboard', 'product'])
        }
      })
    }

    getListCategories(){
      this.service.findCategories().subscribe((resp) => {
        this.categoryList = resp.body!;
        console.log(`status code : ${resp.status}`)
        console.log(this.categoryList)
      })
    }
  
    setGambar($event:any) {
      this.gambar = $event.target.value;
    }

  
}
