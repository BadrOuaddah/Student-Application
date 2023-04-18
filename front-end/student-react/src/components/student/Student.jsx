import React, { Component } from "react";
import "./Student.css";
import axios from "axios";
import ShowEditForm from "../ShowEditForm/ShowEditForm";
import ShowUpdateForm from "../ShowUpdateForm/ShowUpdateForm";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

const baseURL = "http://localhost:8080/api/v1/student";


function PaginationFunctionComponent(){
  return(
    <div>
      <br />
      <div>
        <Pagination students={this.state.students} />
      </div>
      <br />
    </div>
  );
}


export default function Studentfunction() {

    const [isShownStudent, setIsShownStudent] = useState(false);
      const [isConfirmed, setIsConfirmed] = useState(false);

    const handleClick = (event) => {
    if (!isConfirmed) {
      setIsShownStudent((current) => !current);
    }
  };

  return (
    <div>
      <center>
      <button className="btn btn-secondary" onClick={handleClick}>
      <span className="fa fa-gear"></span> Modify 
       </button>
      </center>
      <br />
             {isShownStudent && (
       <Student onClose={() => setIsShownStudent(false)} />
       )}
    </div>
  )
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
    axios.delete(`${baseURL}/${id}`).then((response) => {
      console.log(response);
      this.getStudents();
    });
  }

  updateStudent(newStudent, id) {
    axios
      .put(`${baseURL}/${id}`, newStudent)
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
          {/* <br />
          <div>
            <Pagination students={this.state.students} />
          </div>
          <br /> */}
        </div>
      </div>
    );
  }
}
