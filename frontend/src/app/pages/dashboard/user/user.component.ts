import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faPencilAlt, faInfoCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserService } from './user.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  faInfoCircle = faInfoCircle;
  faShoppingCart = faShoppingCart;

  userList: User[] = [];

  constructor(private service: UserService){}

  ngOnInit(): void {
    this.getTableList();
  }

  getTableList(){
    this.service.findAll().subscribe((resp)=>{
      this.userList = resp.body!;
      console.log(`status code : ${resp.status}`)
      console.log(this.userList)
    })
  }

  deleteUser(id:number){
    this.service.delete(id).subscribe(resp => {
      if (resp.status == 200) {
        this.userList = this.userList.filter(data => data.id != id)
      }
    })
  }
}
