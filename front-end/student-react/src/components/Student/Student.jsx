import React, { Component } from "react";
import "./Student.css";
import axios from "axios";
import ShowEditForm from "../ShowEditForm/ShowEditForm";
import ShowUpdateForm from "../ShowUpdateForm/ShowUpdateForm";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

const baseURL = "http://localhost:8080/api/v1/students";
const baseURLStudent = "http://localhost:8080/api/v1/student";

function PaginationFunctionComponent() {
  return (
    <div>
      <br />
      <div>
        <Pagination />
      </div>
      <br />
    </div>
  );
}

export default function Studentfunction() {
  const [isShownStudent, setIsShownStudent] = useState(false);
  const [isConfirmed] = useState(false);
  const [isPaginationVisible, setIsPaginationVisible] = useState(true);

  const handleClick = (event) => {
    if (!isConfirmed) {
      setIsShownStudent(true);
      setIsPaginationVisible(false);
    }
  };
  const handleClose = (event) => {
    setIsShownStudent(false);
    setIsPaginationVisible(true);
  };

  return (
    <div>
      <center>
        <button className="btn btn-secondary" onClick={handleClick}>
          <span className="fa fa-gear"></span> Modify
        </button>
      </center>
      <br />
      <center>
        <button className="btn btn-danger" onClick={handleClose}>
          <span className="fa fa-times"></span> Cancel
        </button>
      </center>
      <br />
      {isShownStudent && <Student />}
      <br />
      {isPaginationVisible && <PaginationFunctionComponent />}
    </div>
  );
}

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
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
    axios.delete(`${baseURLStudent}/${id}`).then((response) => {
      console.log(response);
      this.getStudents();
    });
  }

  updateStudent(newStudent, id) {
    axios
      .put(`${baseURLStudent}/${id}`, newStudent)
      .then((response) => {
        console.log(response);
        this.getStudents();
      })
      .catch((error) => {
        console.log(error);
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
                        onUpdate={(updatedStudent, id) =>
                          this.updateStudent(updatedStudent, id)
                        }
                      />
                      <br />
                    </ul>
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
