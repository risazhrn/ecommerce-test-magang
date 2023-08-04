import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faPencilAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/model/category';
import { KategoriService } from './kategori.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss']
})
export class KategoriComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  faInfoCircle = faInfoCircle;

  categoryList: Category[] = [];

  constructor(private service: KategoriService){}
  
  ngOnInit(): void {
    this.getTableList();
  }

  getTableList(){
    this.service.findAll().subscribe((resp)=>{
      this.categoryList = resp.body!;
      console.log(`status code : ${resp.status}`)
      console.log(this.categoryList)
    })
  }

  deleteCategory(id: number){
    this.service.delete(id).subscribe(resp=> {
      if(resp.status == 200){
        this.categoryList = this.categoryList.filter(data => data.id != id)
      }
    })
  }
}
