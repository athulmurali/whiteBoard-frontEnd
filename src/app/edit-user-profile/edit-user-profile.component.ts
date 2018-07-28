import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

 const WAIT_TIME  = 3000;

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['../student-profile/student-profile.component.css',
    './edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {


  user: User;
  updateError: boolean;
  updateSuccess: boolean;
  constructor(private  userService: UserService, private router:  Router) {
  }

  ngOnInit() {
    this.getProfileFromServer();

  }

  handleSaveProfile = () => {

    // alert('atttempt to save editted profile');
    this.userService.updateProfile(this.user).subscribe(
      data => {
        this.user = data;
        this.updateSuccess = true;
        this.waitAndRedirect();
      },
      err => {
        console.log('Error in updating the profile!');
        console.log(err);
        this.updateError = true;
      }
    );

  }

  getProfileFromServer = () => {
    this.userService.getProfile().subscribe(data => {
      console.log(data);
      this.user = data;
      console.log(this.user);
    }, err => {
      console.log(JSON.stringify(err));
    });
  }

  waitAndRedirect = () => {

    const  router = this.router;
    // Your application has indicated there's an error
    window.setTimeout(function() {
      // Move to a new location or you can do something else
  router.navigate(['/studentProfile']);

    }, WAIT_TIME);
  }

}
