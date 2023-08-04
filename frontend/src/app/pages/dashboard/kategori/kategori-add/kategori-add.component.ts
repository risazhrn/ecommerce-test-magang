import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KategoriService } from '../kategori.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategori-add',
  templateUrl: './kategori-add.component.html',
  styleUrls: ['./kategori-add.component.scss']
})
export class KategoriAddComponent implements OnInit{

  categoryForm! : FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private service : KategoriService,
    private router : Router
    ){}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: this.formBuilder.control(null)
    })
  }

  save(){
    console.log(this.categoryForm.value)
    this.service.save(this.categoryForm.value).subscribe(resp=> {
      if (resp.status == 200) {
        console.log('berhasil')
        this.router.navigate(['/', 'dashboard', 'category'])
      }
    })
  }

}
