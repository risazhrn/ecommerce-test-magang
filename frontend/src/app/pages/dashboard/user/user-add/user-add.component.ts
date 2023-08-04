import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  userForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(13)]],
      address: ['', Validators.required],
    });
  }

  save() {
    this.userForm.markAllAsTouched();
    console.log(this.userForm.controls['name'].touched && this.userForm.controls['name'].errors);
    
     if (this.userForm.valid) {
      this.service.save(this.userForm.value).subscribe((resp) => {
        if (resp.status == 200) {
          console.log('berhasil');
          this.router.navigate(['/', 'dashboard', 'user']);
        }
      });
     }
    }
  }

