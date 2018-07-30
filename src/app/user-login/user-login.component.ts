import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {SectionService} from '../services/section.service';
import {saveAuthToken} from '../common-utils';
import {USER_ROLES} from '../constants/roles';

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
  constructor(private router: Router, private userService: UserService, private  sectionService: SectionService) { }

  onClickLogin() {
    // if(true) {this.router.navigate(['/studentProfile']); } else { this.loginError = true; }
    console.log(this.userCredentials);
    // this.router.navigate(['/studentProfile']);
    this.userService.loginUser(this.userCredentials).subscribe(
      data => {
        saveAuthToken(data.token);
      console.log(data);
      location.reload();

        this.router.navigate(['/studentProfile']);
    },
        error => { this.loginError = true; console.log(error.toString()); });
  }
  ngOnInit() {
  }

}
