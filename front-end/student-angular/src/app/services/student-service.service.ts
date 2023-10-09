import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'

})
export class StudentServiceService {

  apiUrlSpringStudents = "http://localhost:8080/api/v1/students";
  apiUrlSpringStudent = "http://localhost:8080/api/v1/student";

  constructor(private http: HttpClient) { }
  private _index: number;

  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  findAll() {
    return this.http.get(this.apiUrlSpringStudents);
  }

  findStudentById(id: number) {
    return this.http.get(this.apiUrlSpringStudent + '/' + id);
  }


  deleteById(id: number) {
    return this.http.delete(this.apiUrlSpringStudent + '/' + id);
  }

  addNewStudent(student: any) {
    return this.http.post<Student>(this.apiUrlSpringStudent, student);
  }

  putStudent(id: number, student: any) {
    return this.http.put(`${this.apiUrlSpringStudent}/${id}`, student);
  }

}
