import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  private courses = [
    {
      title : 'Web dev - Summer 1',
      isPrivate : true,
      id : 1
    },
    {
      title : 'DBMS',
      isPrivate : false,
      id : 2

    }
  ];

  roles = ['student', 'faculty', 'admin'];
  private loading: boolean;

  constructor(private userService: UserService) {}

  private passwordConfirmed = false;
  private userNameTaken = false;

  private user: User;

  private isRoleSelected: boolean;
  onclickRegister() {
    console.log(this.user);
    alert('registering!');
    this.registerUser();
  }
  ngOnInit() {

    this.user = new User();
  }

  selectRole = (role: string) => {
    this.user.role = role;
    this.isRoleSelected = true;
  }
  registerUser = () => {
    this.loading = true;
    this.userService.registerUser(this.user).subscribe(
      data => {
        this.loading = false;
        this.user = data;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );
  }

}
