import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './sudent';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root' // This service will be available from root scope it means any component can inject it
})
export class ManageNamesService {
  //names = ['Jayesh', 'Kod Factory', 'Marwadi', 'Rajkot', 'from service'];

  
  constructor(private http: HttpClient) { }

  getNames() : Observable<student[]> {
    //return this.names;
    return this.http.get<student[]>(environment.API_BASE_PATH+'student')
  }

  getStudents(currPageSize,currPageIndex){
    const url = environment.API_BASE_PATH+'listStudents?pagesize='+currPageSize+'&pageindex='+currPageIndex
    console.log(url)
    return this.http.get<{message: string, students:student[], maxStudents : number}>(url)
  }

  addStudents(name,branch,email){
    const studentObj : student = {
      id: null,
      name: name,
      branch: branch,
      email: email,
      creator : null    /*written by me */
    }
    return this.http.post(environment.API_BASE_PATH+'addStudent', studentObj);
  }

  deleteStudent(id)
  {
      return this.http.delete(environment.API_BASE_PATH+id)
  }
  updateStudent(id, name, branch,email) {
    const std = {
      name: name,
      branch: branch,
      email:email
    }
    return this.http.put(environment.API_BASE_PATH+id, std)
  }
  getstudent(id){
    return this.http.get<student>(environment.API_BASE_PATH+id)
  }
// updateNames(name) {
   // this.names.push(name)
  //}
}