import React, { Component } from "react";
import "./Student.css";
import axios from "axios";
import ShowEditForm from "../ShowEditForm/ShowEditForm";
import ShowUpdateForm from "../ShowUpdateForm/ShowUpdateForm";

const baseURL = "http://localhost:8080/api/v1/student";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    this.getStudents();
  }

  getStudents() {
    axios.get(baseURL).then((response) => {
      const students = response.data;
      this.setState({ students });
    });
  }

  deleteStudent(id, e) {
    axios.delete(`${baseURL}/${id}`).then((response) => {
      console.log(response);
      this.getStudents();
    });
  }

  updateStudent(student, e) {
    axios.put(`${baseURL}/${student.id}`, student).then((response) => {
      console.log(response);
      this.getStudents();
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="col card row bg-transparent solid-gray">
            <div className="card-body">
              <h4 style={{ textAlign: "center" }} className="card-title">
                List of students
              </h4>
              <br />
              <div>
                <ShowEditForm />
              </div>
              <hr />
            </div>
            <ul className="list-group list-group-flush">
              {this.state.students.map((student) => {
                return (
                  <div key={student.id}>
                    <ul className="list-group-item list-group-item-action list-group-item-secondary">
                      <li>Id : {student.id}</li>
                      <li>Name : {student.name}</li>
                      <li>Email : {student.email}</li>
                      <li>Date of birthday : {student.dob}</li>
                      <li>Age : {student.age}</li>
                      <br />
                      <div>
                        <button
                          onClick={(e) => this.deleteStudent(student.id, e)}
                          className="btn btn-danger"
                        >
                          <span className="fa fa-trash"></span> DELETE
                        </button>
                      </div>
                      <br />
                      <ShowUpdateForm
                        {...student}
                        onUpdate={(updatedStudent) =>
                          this.updateStudent(updatedStudent)
                        }
                      />
                    </ul>
                    <div>
                      <h3>Item #{student.id}</h3>
                    </div>
                    <br />
                  </div>
                );
              })}
            </ul>
          </div>
          <br />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <ul>{/* <Pagination /> */}</ul>
        </div>
      </div>
    );
  }
}
