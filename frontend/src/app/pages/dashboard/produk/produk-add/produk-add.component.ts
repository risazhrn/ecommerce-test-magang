import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdukService } from '../produk.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-produk-add',
  templateUrl: './produk-add.component.html',
  styleUrls: ['./produk-add.component.scss']
})
export class ProdukAddComponent implements OnInit {

  productForm!: FormGroup
  categoryList: Category[] = [];
  gambar!: string;

  constructor(
    private formBuilder :  FormBuilder,
    private service : ProdukService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.getListCategories();

    this.productForm = this.formBuilder.group({
      name: this.formBuilder.control(null),
      category_id: this.formBuilder.control(null),
      stock: this.formBuilder.control(null),
      description: this.formBuilder.control(null),
      price: this.formBuilder.control(null),
      url_image: this.formBuilder.control(null)
    })
  }

  save(){
    console.log(this.productForm.value)
    this.service.save(this.productForm.value).subscribe(resp=> {
      if(resp.status == 200){
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
