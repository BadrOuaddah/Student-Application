import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'

})
export class StudentServiceService {

  // private students: Array<Student>;

  apiUrlSpring = "http://localhost:8080/api/v1/student" ;

  constructor(private http:HttpClient) { }


  findAll(){
    return this.http.get(this.apiUrlSpring);
  }


  deleteById(id: number){
    return this.http.delete(this.apiUrlSpring + '/' + id);
  }

  addNewStudent(student: any){
    return this.http.post<Student>(this.apiUrlSpring,student);
  }

  // updateStudent(){
  // write some codes...
  // }

}
