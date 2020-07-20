import { environment } from './../../environments/environment';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auth } from './auth.model';
import { DataSource } from '@angular/cdk/collections';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private token : string;
  private timerHandler : any;
  private userid : string = "";
  private isAuthenticated : boolean = false;
  getToken(){
    return this.token
  }
  setToken(token){
    this.token=token
  }

  getAuthenticated() {
    return this.isAuthenticated;
  }

  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  /* get and set id function written by me */
  getid(){
    if(this.userid){
      return this.userid;   
    }
    else{
      return this.getAuthLocally().userId;
    }
  }

  setid(userid){
    this.userid = userid;
  }
  
  
  constructor(private http: HttpClient, private router : Router,private notifier : NotifierService) { }

  doSignUp(email, password) {
    const signUpObj: auth = {
      id:null,
      email: email,
      password: password,
      //creator : null
    }
    return this.http.post(environment.AUTH_BASE_PATH+"signup", signUpObj);
  }

  onLogin(email, password){
    const loginObj: auth = {
      id : null,
      email: email,
      password: password
      }
    return this.http.post<{message:string , token:string,expiresIn: number, /*written by me */ userId : string}>(environment.AUTH_BASE_PATH+"Login", loginObj);
  }

  onLogout() {
    console.log("Logout occurs...");
    this.setToken(null);
    this.setid(null)
    this.setAuthenticated(false);
    this.deRegisterLogoutTimer();
    this.clearStorage();
  }
  
  saveAuthLocally(data:any) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('expireAt', data.expireAt.toString());
    localStorage.setItem('userId', data.userId)
  }

  getAuthLocally() {
    return {
      token: localStorage.getItem('token'),
      expireAt: new Date(localStorage.getItem('expireAt')),
      userId : localStorage.getItem('userId')
    }
  }

  clearStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('expireAt');
    localStorage.removeItem('userId');
  }

  autoLogin() {
    const token = this.getAuthLocally().token;
    const expireAt = this.getAuthLocally().expireAt;

    if(token && expireAt) {
      console.log("Doing auto login...");
      const now = new Date();
      const expiryTime = expireAt.getTime() - now.getTime();
      console.log()
      if(expiryTime > 0) {
        this.setAuthenticated(true);
        this.setToken(token);
        this.deRegisterLogoutTimer();
        this.registerLogoutTimer(expiryTime/1000);
      }
    }
  }

  postLoginActivity(result){
    this.setToken(result.token)
      this.setAuthenticated(true)

      this.setid(result.userId)    /* Written By me */
      
      const now = new Date();
      const expireAt = new Date(now.getTime() + result.expiresIn * 1000);

      const authobj = {
        token : result.token,
        expireAt : expireAt,
        userId : result.userId
      }
      this.saveAuthLocally(authobj);
      console.log("Token will expires at: " + expireAt);

      this.registerLogoutTimer(result.expiresIn);
      this.notifier.notify('Success','Login Succesfull..')
  }

  registerLogoutTimer(expiresIn: number) {
    console.log("Logout will occurs in : "+ expiresIn * 1000)
    this.timerHandler = setTimeout(() => {
      this.onLogout();
    }, expiresIn * 1000);
  }
  deRegisterLogoutTimer() {
    clearTimeout(this.timerHandler);
  }
}