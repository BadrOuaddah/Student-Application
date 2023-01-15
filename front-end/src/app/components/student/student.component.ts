import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  searchStudent:any;
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
  itemsPerPages: number[] = [3, 6, 9];
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
  }
  this.ngOnInit();
}

updateStudent(){
  // TODO: add update method !
  console.log("updateStudent called !");
  // this.studentService.putStudent(this.id);
}



// TODO: Add methods for pagination and items per page
// getRequestParams(searchTitle, page, pageSize): any {
//   // tslint:disable-next-line:prefer-const
//   let params = {};

//   if (searchTitle) {
//     params[`title`] = searchTitle;
//   }

//   if (page) {
//     params[`page`] = page - 1;
//   }

//   if (pageSize) {
//     params[`size`] = pageSize;
//   }

//   return params;
// }

// retrieveTutorials(): void {
//   const params = this.getRequestParams(this.title, this.page, this.pageSize);

//   this.tutorialService.getAll(params)
//     .subscribe(
//       response => {
//         const { tutorials, totalItems } = response;
//         this.tutorials = tutorials;
//         this.count = totalItems;
//         console.log(response);
//       },
//       error => {
//         console.log(error);
//       });
// }

// handlePageChange(event): void {
//   this.page = event;
//   this.retrieveTutorials();
// }

// handlePageSizeChange(event): void {
//   this.pageSize = event.target.value;
//   this.page = 1;
//   this.retrieveTutorials();
// }

}
