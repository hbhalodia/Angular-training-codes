import { AngularMaterial } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { StudentsComponent, DialogContentExampleDialog } from './students/students.component';
import { LoginFormBasicsComponent } from './login-form-basics/login-form-basics.component';
import { AngBasicsComponent } from './ang-basics/ang-basics.component';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './Custom_input/Custom_input.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { DropDownMenuComponent } from './drop-down-menu/drop-down-menu.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { LoginComponent } from './authentication/login-page/login.component';
import { SignupComponent } from './authentication/sign-up/signup.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';

import { AuthInterceptor } from './authentication/auth-interceptor.service';
import { ErrorInterceptor } from './authentication/error-interceptor.service';
import { LogoutPageComponent } from './authentication/logout-page/logout-page.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';



const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};






@NgModule({
  declarations: [
    AppComponent,
    AngBasicsComponent,
    CustomInputComponent,
    LoginFormBasicsComponent,
    StudentsComponent,
    AutocompleteComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    DropDownMenuComponent,
    NewStudentComponent,
    DialogContentExampleDialog,
    LoginComponent,
    SignupComponent,
    ErrorPopupComponent,
    LogoutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterial,
    NotifierModule.withConfig(customNotifierOptions)  
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,useClass : AuthInterceptor,multi : true },
    { provide : HTTP_INTERCEPTORS,useClass : ErrorInterceptor,multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
