import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/model/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{

  userId!: string;
  user!: User;
  userForm! : FormGroup
  isEdit: boolean = false;
  

  constructor(
    private activateRoute: ActivatedRoute,
    private service : UserService,
    private router : Router,
    private formBuilder : FormBuilder
    ){}


  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.userId = param['id']; 
    })

    this.getUserById(); 

    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      phone: this.formBuilder.control(null),
      address: this.formBuilder.control(null)
    })

  }

  getUserById(){
    this.service.findById(Number(this.userId)).subscribe(resp => {
      this.user = resp.body!;
      console.log(`status code : ${resp.status}`)
      console.log(this.user)
    })
  }

  toggleEdit(){
    this.isEdit =! this.isEdit
  }

  update(){
    console.log(this.userForm.value)
    this.service.update(this.userForm.value,Number(this.userId)).subscribe(resp => {
      if (resp.status == 200) {
        console.log('berhasil')
        this.router.navigate(['/', 'dashboard', 'user'])
      }
    })
  }


}
