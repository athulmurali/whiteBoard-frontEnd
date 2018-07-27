import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private loginError = false;
  private userCredentials = {
    username : '',
    password : ''
  };
  constructor(private router: Router) { }

  onClickLogin() {
    // if(true) {this.router.navigate(['/studentProfile']); } else { this.loginError = true; }
    console.log(this.userCredentials)
    alert(this.userCredentials.username)
    // this.router.navigate(['/studentProfile']);
  }
  ngOnInit() {
  }

}
