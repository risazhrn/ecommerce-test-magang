import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { DetailTransaction, ListUserTransaction, UserProduct } from 'src/app/model/userProduct';

@Component({
  selector: 'app-user-detail-transaction',
  templateUrl: './user-detail-transaction.component.html',
  styleUrls: ['./user-detail-transaction.component.scss']
})
export class UserDetailTransactionComponent implements OnInit {

  userId!: string;
  productId!: string;
  transactionList!: ListUserTransaction[];
  transaction?: DetailTransaction;
  total = 0;

  constructor(
    private service: UserService,
    private activateRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.userId = param['userId']; 
      this.productId = param['productId']
    })

    this.detailTransaction();
  }

  detailTransaction(){
    this.service.detailTransaction(Number(this.productId)).subscribe(resp => {
      this.transaction = resp.body!;
      this.total += this.transaction.price * this.transaction.quantity;
      console.log(`status code : ${resp.status}`)
      console.log(this.transaction)
    })
  }

  
  
}
