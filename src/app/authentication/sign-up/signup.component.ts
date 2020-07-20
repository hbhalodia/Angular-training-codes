import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
    
  }
  onSignUp(form: NgForm) {
    if(form.invalid) {
      return
    }

    console.log(form.value)
    const email = form.value.email
    const pass = form.value.password
    this.authService.doSignUp(email,pass).subscribe(data => {
      console.log(data)
      this.authService.onLogin(email,pass).subscribe(result => {
        this.authService.postLoginActivity(result)
        this.router.navigate(['/students']);
      })
    });
    form.resetForm()
  }

}
