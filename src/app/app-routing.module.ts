import { student } from './sudent';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { LoginComponent } from './authentication/login-page/login.component';
import { SignupComponent } from './authentication/sign-up/signup.component';
import { AuthGuard } from './authentication/auth.guard';
import { LogoutPageComponent } from './authentication/logout-page/logout-page.component';

const routes: Routes = [
  { path: 'student', component: StudentsComponent},
  { path: 'create', component: NewStudentComponent ,  canActivate: [AuthGuard]},
  { path: 'edit/:stdId', component: NewStudentComponent,  canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component : LogoutPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
