import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { User, UserInput } from 'src/app/model/user';
import { DetailTransaction, ListUserTransaction, UserProductInput } from 'src/app/model/userProduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient : HttpClient) { }

  findAll(){
    return this.httpclient.get<User[]>(`${environment.api}/api/user`, {observe: "response" });
  }

  findById(id : number){
    return this.httpclient.get<User>(`${environment.api}/api/user/${id}`, {observe: "response" });
  }

  delete(id : number){
    return this.httpclient.delete(`${environment.api}/api/user/${id}`, {observe: "response"});
  }

  save(userInput: UserInput){
    return this.httpclient.post(`${environment.api}/api/user`, userInput, {observe : "response"})
  }

  update(userInput: UserInput, id : number){
    return this.httpclient.put(`${environment.api}/api/user/${id}`,userInput, {observe: "response"});
  }
  
  findProducts(){
    return this.httpclient.get<Product[]>(`${environment.api}/api/product`, {observe: "response" });
  }

  userTransaction(userProductInput : UserProductInput){
    return this.httpclient.post(`${environment.api}/api/user-product`, userProductInput, {observe : "response"})
  }

  listTransaction(id:string){
    return this.httpclient.get<ListUserTransaction[]>(`${environment.api}/api/user-product/${id}/list`, {observe: "response" });
  }

  detailTransaction(id:number){
    return this.httpclient.get<DetailTransaction>(`${environment.api}/api/user-product/${id}`, {observe: "response" });
  }
}
 