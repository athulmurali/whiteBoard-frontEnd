import { Component, OnInit } from '@angular/core';
import {WAIT_TIME} from '../constants/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    this.removeTokens();

    this.redirectToHome();
  }

  removeTokens() {
    localStorage.clear();
  }

  redirectToHome() {
    const router = this.router;

    window.setTimeout(function () {

      location.reload();
      router.navigate(['/']);
    }, WAIT_TIME);
  }
}
