import React, { Component} from "react";
import "./Student.css";
import axios from "axios";
// import { click } from "@testing-library/user-event/dist/click";

const baseURL = "http://localhost:8080/api/v1/student";

export default class Student extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };



    // const [showForm, setShowForm] = useState(false);


    // *http Request : GET
    axios.get(baseURL).then((response) => {
      const students = response.data;
      this.setState({ students });
    });
  }

  DeleteStudent(id,e) {
    console.log("h3110 W0r1d!");
    // axios.delete('http://localhost:8080/api/v1/student'+"/"+{id})
    // .then(response => console.log(response));
    // const posts = this.state.posts.filter(item => item.id !== id);  
    // this.setState({ posts }); 
    }

  //TODO: solved delete method bug !!!
  // deleteStudent(id) {
  //   axios.delete('http://localhost:8080/api/v1/student/{id}').then(response => console.log(response));
  //   console.log(Response.data);
  // }

  render() {
    return (
      <div>
        <div className="container">
          <div className="col card row bg-transparent solid-gray">
            <div className="card-body">
              <h4 style={{ textAlign: "center" }} className="card-title">
                List of students
              </h4>
              <div className="row col-2">
                <button className="btn btn-success">
                  <span className="fa fa-plus"></span> ADD
                </button>
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
                      <div className="row col">
                        <div className="col-2">
                          <button
                            onClick={(e) =>this.DeleteStudent(student.id,e)}
                            className="btn btn-danger">
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
