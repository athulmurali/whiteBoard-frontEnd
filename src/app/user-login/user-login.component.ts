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
  constructor(private router: Router, service: UserService) { }

  onClickLogin() {
    console.log('asdasd');
    // if(true) {this.router.navigate(['/studentProfile']); } else { this.loginError = true; }
    this.router.navigate(['/studentProfile']);
  }


  ngOnInit() {
  }

}
