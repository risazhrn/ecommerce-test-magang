import { Component, OnInit } from '@angular/core';
import { ListUserTransaction } from 'src/app/model/userProduct';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list-transaction',
  templateUrl: './user-list-transaction.component.html',
  styleUrls: ['./user-list-transaction.component.scss']
})
export class UserListTransactionComponent implements OnInit {

  userId!: string;
  productId!: string;
  transactionList!: ListUserTransaction[];
  
  constructor(
    private service: UserService,
    private activateRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    
    this.activateRoute.params.subscribe(param => {
      this.userId = param['userId']; 
    })
    console.log(this.userId)
    this.listUserTransaction()
  }

  listUserTransaction(){
    this.service.listTransaction(this.userId).subscribe(resp => {
      this.transactionList = resp.body!;
      console.log(this.transactionList)
    })
  }
}
