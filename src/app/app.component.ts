import { Component } from '@angular/core';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';/*
  names = ['Jayesh', 'Kod Factory', 'Marwadi', 'Rajkot', 'New value'];
  labells=['Enter your Name','Enter your Email','Enter your Address','Enter your Number'];
  //values = [25,55,30,35,40,45,60,78,90,10]
  userInput = '';
  rUserInput = '';
  studata: Array<Object> = [
    {name: 'Hit', marks: 99},
    {name: 'Meet', marks: 89},
    {name: 'Soham', marks: 79},
    {name: 'ayush', marks: 93},
    {name: 'karan', marks: 74},
    {name: 'Smit', marks: 65},
    {name: 'Yash B', marks: 34},
    {name: 'Neev', marks: 69},
    {name: 'Abhi', marks: 54},
    {name: 'Darshit', marks: 70},
];
  onClick() {
    this.names.splice(2,0,this.userInput)
    // this.names.push(this.userInput)
  }

  remove() {
    let index = this.names.indexOf(this.rUserInput)
    if (index != -1) {
      this.names.splice(index, 1)
    }
  }*/
  //show: boolean = true;

  isAuthenticated : boolean =false;

  constructor(private authService : AuthService){}
  ngOnInit(){
    this.authService.autoLogin()
  }
  checkAuth() {
    return this.authService.getAuthenticated()
  }
}
