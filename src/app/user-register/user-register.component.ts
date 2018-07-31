import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {saveAuthToken} from '../common-utils';
import {Router} from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) {}

  private passwordConfirmed = false;
  private userNameTaken = false;
  private errorMessage: any;

  private user: User;
  private registerError: boolean;

  private usernameAvailable: boolean;
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
        saveAuthToken(data.token);
        location.reload();
        this.router.navigate(['/studentProfile']);
      },
      err => {
        console.log(err);
        this.loading = false;
        this.registerError = true;
        this.errorMessage = err.error.message;
      }
    );
  }

  isUserNameAvailable = () => {
    this.userService.isUsernameAvailable(this.user.username).subscribe(
      data => {
        this.usernameAvailable = true;
        console.log(this.usernameAvailable);
      },
      error => {
        this.usernameAvailable = false;
        this.errorMessage = error.error.message;
      }
      );
  }

  onTypeUsername( ) {
    this.isUserNameAvailable();
  }
    }
