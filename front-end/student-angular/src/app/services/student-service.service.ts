import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'

})
export class StudentServiceService {

  apiUrlSpring = "http://localhost:8080/api/v1/student";

  constructor(private http: HttpClient) { }
  private _index: number;

  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  findAll() {
    return this.http.get(this.apiUrlSpring);
  }

  findStudentById(id: number) {
    return this.http.get(this.apiUrlSpring + '/' + id);
  }


  deleteById(id: number) {
    return this.http.delete(this.apiUrlSpring + '/' + id);
  }

  addNewStudent(student: any) {
    return this.http.post<Student>(this.apiUrlSpring, student);
  }

  putStudent(id: number, student: any) {
    return this.http.put(`${this.apiUrlSpring}/${id}`, student);
  }

}
