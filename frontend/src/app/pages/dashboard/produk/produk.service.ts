import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product, ProductInput } from 'src/app/model/product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProdukService {

  constructor(private httpclient : HttpClient) { }

  findAll(){
    return this.httpclient.get<Product[]>(`${environment.api}/api/product`, {observe: "response" });
  }

  findById(id : number){
    return this.httpclient.get<Product>(`${environment.api}/api/product/${id}`, {observe: "response" });
  }

  delete(id : number){
    return this.httpclient.delete(`${environment.api}/api/product/${id}`, {observe: "response" });
  }

  findCategories(){
    return this.httpclient.get<Category[]>(`${environment.api}/api/category`, {observe: "response"});
  }

  save(productInput : ProductInput){
    return this.httpclient.post(`${environment.api}/api/product`, productInput, {observe: "response" });
  }

  update(productInput : ProductInput, id : number){
    return this.httpclient.put(`${environment.api}/api/product/${id}`,productInput, {observe: "response" });
  }
}
