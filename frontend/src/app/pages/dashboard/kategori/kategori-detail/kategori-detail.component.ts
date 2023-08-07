import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { KategoriService } from '../kategori.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kategori-detail',
  templateUrl: './kategori-detail.component.html',
  styleUrls: ['./kategori-detail.component.scss']
})
export class KategoriDetailComponent implements OnInit{

  categoryId!: string;
  category?: Category;
  categoryForm!: FormGroup;
  isEdit: boolean = false;

  constructor (
    private activateRoute : ActivatedRoute,
    private service : KategoriService,
    private formBuilder : FormBuilder,
    private router : Router
  ){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.categoryId = param['id'];
    })

    this.getCategoryById();

    this.categoryForm = this.formBuilder.group({
      name: this.formBuilder.control(null)
    })
  }

  getCategoryById(){
    this.service.findById(Number(this.categoryId)).subscribe(resp => {
      this.category = resp.body!;
      console.log(`status code : ${resp.status}`)
      console.log(this.category)
    })
  }

  toggleEdit(){
    this.isEdit =! this.isEdit
  }

  update(){
    console.log(this.categoryForm.value)
    this.service.update(this.categoryForm.value, Number(this.categoryId)).subscribe(resp => {
      if (resp.status == 200) {
        console.log('berhasil')
        this.router.navigate(['/', 'dashboard', 'category'])
      }
    })
  }

  get name() : any{
    return this.categoryForm.get('name')
  }

}
