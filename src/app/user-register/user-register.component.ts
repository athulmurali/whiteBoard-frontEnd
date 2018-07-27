import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  private passwordConfirmed = false;
  private userNameTaken = false;
  private user={
    username:"",
    password:"",
    confirmPassword:"",
    phone:"",
    email:"",
    firstName: "",
    lastName:"",
    role:"student"
  };

  onclickRegister(){
    console.log(this.user)
    alert("registering!")
  }
  ngOnInit() {
  }

}
