import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-content-banner',
  templateUrl: './private-content-banner.component.html',
  styleUrls: ['./private-content-banner.component.css']
})
export class PrivateContentBannerComponent implements OnInit {

  private isEnrollSelected:boolean;

  constructor() { }

  ngOnInit() {
  }

}
