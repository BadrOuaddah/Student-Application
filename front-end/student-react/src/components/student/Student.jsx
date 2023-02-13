import React, { Component} from "react";
import "./Student.css";
import axios from "axios";
import ShowEditForm from "../ShowEditForm/ShowEditForm";


const baseURL = "http://localhost:8080/api/v1/student";

export default class Student extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };

    // const [showForm, setShowForm] = useState(false);

    // const [show, setShow] = useState();


    // *http Request : GET
    axios.get(baseURL).then((response) => {
      const students = response.data;
      this.setState({ students });
    });
  }

  DeleteStudent(id,e) {
    axios.delete(`http://localhost:8080/api/v1/student/${id}`)
    .then(response => console.log(response));
    const students = this.state.students.filter(item => item.id !== id);  
    this.setState({ students });  
    }

  ButtonToShowEditForm(){ 
    console.log("Edit Form showed !");
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
              <div className="row col-2">
                <button onClick={() => this.ButtonToShowEditForm()} className="btn btn-success">
                  <span className="fa fa-plus"></span> ADD
                </button>
              </div>
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
                      <div className="row col">
                        <div className="col-2">
                          <button
                            onClick={(e) =>this.DeleteStudent(student.id,e)}
                            className="btn btn-danger">
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
