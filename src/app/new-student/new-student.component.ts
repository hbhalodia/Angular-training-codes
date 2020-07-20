import { Component, OnInit } from '@angular/core';
import { student } from '../sudent';
import { ManageNamesService } from '../manage-names.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  
  name="";
  branch="";
  email="";
  isShow=false;
  mode='create'
  stdId = ""
  std:student
  
  constructor(private  nameService: ManageNamesService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data =>{
      if(data.has('stdId')){
          this.mode='edit'
          this.stdId = data.get('stdId');
          this.nameService.getstudent(this.stdId).subscribe(data => {
            this.std=data
          })
      }else{
        this.mode='create'
        this.stdId= null
      }
    })
  }
  onSave(studentForm : NgForm) {
    
    if (studentForm.invalid) {
      return
    }
    this.isShow=true;

    if(this.mode == 'create') {
      this.nameService.addStudents(studentForm.value.name, studentForm.value.branch,studentForm.value.email).subscribe(response => {
        console.log("Api Success: "+ JSON.stringify(response))
      });
    } else {
      this.nameService.updateStudent(this.stdId, studentForm.value.name, studentForm.value.branch,studentForm.value.email).subscribe(response => {
        console.log("Update Api Success: "+ JSON.stringify(response))
      });
    }
     setTimeout(() => 
      {
          this.isShow = false
      },
      1000);
    studentForm.resetForm()
  }

}
