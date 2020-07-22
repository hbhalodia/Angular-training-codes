import { Component, OnInit } from '@angular/core';
import { ManageNamesService } from '../manage-names.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = [];
  panelOpenState = false;
  isDel=false;
  istr=true;

  private user_authid_login: string
  private authen : boolean
  constructor(private nameService: ManageNamesService,public dialog: MatDialog,private authService: AuthService) { }
  

  pageLength = 1;
  currPageSize = 2;
  pageOptions = [1,2,5,10]
  currPageIndex=0



  ngOnInit(): void {

      this.nameService.getStudents(this.currPageSize,this.currPageIndex+1).subscribe(data => {
        console.log(JSON.stringify(data))
        this.students=data.students;
        this.pageLength=data.maxStudents;
        console.log(this.pageLength);
      });
  }

  openDialog(id) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result==true){
        this.onDelete(id)
      }else{
        this.nameService.getStudents(this.currPageSize,this.currPageIndex+1).subscribe(data => {
        this.students=data.students;
        this.pageLength=data.maxStudents;
        });
      }
    });
  }
  


  onDelete(id)
  {
    this.isDel=true;
    this.nameService.deleteStudent(id).subscribe(data => { 
      console.log(data)
      setTimeout(() => 
      {
          this.isDel = false
      },
      1000);
      this.nameService.getStudents(this.currPageSize,this.currPageIndex+1).subscribe(data => {
          this.students=data.students;
        this.pageLength=data.maxStudents;
        });
    });
    
  }
  onPageChange(pageEvn: PageEvent) {
    console.log(pageEvn);
    this.currPageSize=pageEvn.pageSize
    this.currPageIndex=pageEvn.pageIndex
    this.nameService.getStudents(this.currPageSize,this.currPageIndex+1).subscribe(data => {
      this.students=data.students;
      this.pageLength=data.maxStudents;
    });

    
    /*length: 10
    pageIndex: 1
    pageSize: 2
    previousPageIndex: 0*/
  }
  checkAuth() {
    return this.authService.getAuthenticated();
    
  }

  checkcreatorid_studentid(student_creator_id){
    this.user_authid_login = this.authService.getid();    /* written by me */

    /* if and else condition written by me */

    if((this.user_authid_login===student_creator_id)){
      return true;
    }
    else{
      return false;
    }
  }

}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}