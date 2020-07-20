import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-basics',
  templateUrl: './login-form-basics.component.html',
  styleUrls: ['./login-form-basics.component.css']
})
export class LoginFormBasicsComponent implements OnInit {
   namee='';
   email='';
   address='';
   number='';


  constructor() { }

  ngOnInit(): void {
  }
  onButtonClicked()
  {
    
    console.log("Name : "+this.namee+"\nEmail :"+this.email+"\nNumber : "+this.number+"\nAddress : "+this.address)
    window.alert("Name : "+this.namee+"\nEmail :"+this.email+"\nNumber : "+this.number+"\nAddress : "+this.address)
  }

}
