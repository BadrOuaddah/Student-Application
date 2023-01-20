import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  bool = false;
  searchStudent:any;
  showEditForm = false;
  showForm = false;
  students: any;
  student: any;
  id:any;
  myStudent: Student ={
    name: '',
    email: '',
    dob: '',
    age: 0
  }
  page: number = 1;
  itemsPerPage: number = 3;
  itemsPerPages: number[] = [3, 5, 10, 25, 50, 100];
  count: number = 0;

  // TODO:add component or div Items Per Page


  // totalStudent = Object.keys(this.studentService.findAll()).length;

  constructor(private studentService: StudentServiceService) { }

  ngOnInit() {
    this.studentService.findAll().subscribe(students => {
      this.students = students;
    });
}

// findByStudentId(){
//   console.log("Find by student ID method called");
//   console.log(this.studentService.findAll(this.id).subscribe(data => {
//     this.data = data;
//   }));


// }

// ! The delete method is when the button is clicked
deleteStudent(id: number){
  if (confirm("Are you sure to delete student !")) {
    this.studentService.deleteById(id).subscribe(
      () => {
        this.students = this.students.filter((student: { id: number; }) => student.id != id)
      }
    );
  }
  this.ngOnInit();
}

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

addStudent(){
  if (confirm("Are you sure the information is correct about student ?")){
    this.studentService.addNewStudent(this.myStudent).subscribe((student) => {
      this.students = [student, ...this.students]
    });
    this.ngOnInit();
  }
}

resetStudent(){
  this.myStudent = {
    name: '',
    email: '',
    dob: '',
    age: 0
  }
}

editStudent(student: Student){
  this.myStudent = student;
  this.showEditForm = true;
  this.bool = true;
  // this.studentService.putStudent(this.id);
}

updateStudent(id:number, student:Student){
  this.studentService.putStudent(id, student).subscribe(
    () => {
      this.resetStudent();
      this.showEditForm = true;
    }
    )
    console.log(this.updateStudent);
}


// TODO: Add methods for pagination and items per page

handlePageSizeChange(event: any): void {
  this.itemsPerPage = event.target.value;
  this.page = 1;
  this.ngOnInit();
}
}
