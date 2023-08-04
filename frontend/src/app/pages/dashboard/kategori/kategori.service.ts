import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, CategoryInput } from 'src/app/model/category';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class KategoriService {

  constructor(private httpclient : HttpClient) { }

  findAll(){
    return this.httpclient.get<Category[]>(`${environment.api}/api/category`, {observe: "response"});
  }

  findById(id : number){
    return this.httpclient.get<Category>(`${environment.api}/api/category/${id}`, {observe: "response"});
  }

  delete(id : number){
    return this.httpclient.delete(`${environment.api}/api/category/${id}`, {observe: "response"});
  }

  save(categoryInput: CategoryInput){
    return this.httpclient.post(`${environment.api}/api/category`, categoryInput, {observe: "response"});
  }

  update(categoryInput: CategoryInput, id: number){
    return this.httpclient.put(`${environment.api}/api/category/${id}`, categoryInput, {observe: "response"});
  }
}
