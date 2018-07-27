import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.css']
})
export class EditSectionComponent implements OnInit {

  constructor(private router: Router) { }

  private section = {
    id : 100,
    title : 'As',
    totalSeats: 100,
    enrolledSeats : 50
  };

  onClickSubmit(){
    alert("submitted! ")

  }
  onClickCancel(){
    alert("cancelled! ")
    this.router.navigate(['/home']);


  }

  ngOnInit() {
  }

}
