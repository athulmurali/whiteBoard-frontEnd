import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  profile: User;

  constructor(private  userService: UserService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getProfileFromServer();
  }

  getProfileFromServer = () => {
    this.userService.getProfile().subscribe(data => {
      console.log(data);
      this.profile = data;
      console.log(this.profile);
    }, err => {
      console.log(JSON.stringify(err));
    });
  }

  handleClickEditProfile = () => {

    this.router.navigate(['/editProfile']);

  }
}
