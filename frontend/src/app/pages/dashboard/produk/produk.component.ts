import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faPencilAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/model/product';
import { ProdukService } from './produk.service';



@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.scss']
})
export class ProdukComponent implements OnInit  {
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  faInfoCircle = faInfoCircle;

  productList: Product[] = [];

  constructor(
    private service: ProdukService
    ){}
  
  ngOnInit(): void {
  
    this.getTableList();
  }

  getTableList(){
    this.service.findAll().subscribe((resp)=>{
      this.productList = resp.body!;
      console.log(`status code : ${resp.status}`)
      console.log(this.productList)
  })
}

deleteProduct(id: number){
  this.service.delete(id).subscribe(resp => {
    if (resp.status == 200){
      this.productList = this.productList.filter(data => data.id != id)
    }
  })
}

}
