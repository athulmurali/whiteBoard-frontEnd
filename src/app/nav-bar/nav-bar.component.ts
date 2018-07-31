import { Component, OnInit } from '@angular/core';
import {TOKEN_NAME} from '../constants/http';
import {UserService} from '../services/user.service';
import {User} from '../models/User';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  profile: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getRole();
  }

  getRole() {
    const token = localStorage.getItem(TOKEN_NAME);
    if (token) {
        this.userService.getProfile().subscribe(
          data => {this.profile = data;});
    }
  }
}
