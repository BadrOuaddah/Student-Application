import React, { Component } from "react";
import "./Student.css";
import axios from "axios";


const baseURL = "http://localhost:8080/api/v1/student";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };

    // ! attributes of student from database
    // *http Request : GET
    axios.get(baseURL)
    .then(response => {
  const students = response.data;
    this.setState ({students});
  })}

  deleteStudent(){
    console.log("hello")
  }



  render() {
    return (
      <div>
        <div class="container">
          <div class="col card row bg-transparent solid-gray">
            <div class="card-body">
              <h4 style={{ textAlign: "center" }} class="card-title">
                List of students
              </h4>
              <div className="row col-2">
                <button className="btn btn-success">
                  <span className="fa fa-plus"></span> ADD
                </button>
              </div>
              <hr />
            </div>
            <ul class="list-group list-group-flush">
              {this.state.students.map((student) => {
                return (
                  <div>
                    <ul className="list-group-item list-group-item-action list-group-item-secondary">
                      <li>Id : {student.id}</li>
                      <li>Name : {student.name}</li>
                      <li>Email : {student.email}</li>
                      <li>Date of birthday : {student.dob}</li>
                      <li>Age : {student.age}</li>
                      <br />
                      <div className="row col">
                        <div className="col-2">
                          <button onClick={this.deleteStudent()} className="btn btn-danger">
                            {/* //TODO: onClick={deleteStudent(student.id)} */}
                            <span className="fa fa-trash"></span> DELETE
                          </button>
                        </div>
                        <div className="col-2">
                          <button className="btn btn-warning">
                            <span className="fa fa-refresh"></span> UPDATE
                          </button>
                        </div>
                      </div>
                    </ul>
                    <br />
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
