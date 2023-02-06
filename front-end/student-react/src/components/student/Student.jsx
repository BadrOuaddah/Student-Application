import React, { Component } from "react";
import "./Student.css";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };

    // ! attributes of student from database
    // private Long id;
    // private String name;
    // private String email;
    // private LocalDate dob;
    // private Integer age;

    // *http Request
    fetch("http://localhost:8080/api/v1/student")
      .then((response) => response.json())
      .then((json) => this.setState({ students: json }));
  }

  // changeName = () => {
  //   this.setState({ name: "ali" });
  // };

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
                          <button className="btn btn-danger">
                            <span className="fa fa-trash"></span> DELETE
                          </button>
                        </div>
                        <div className="col-2">
                          <button className="btn btn-warning">
                            <span className="fa fa-refresh"></span> UPDATE
                          </button>
                        </div>
                      </div>
                      {/* <button
                        type="button"
                        class="btn btn-default"
                        aria-label="Left Align"
                      >
                        <span
                          class="fa fa-trash-o fa-lg"
                          aria-hidden="true"
                        ></span>
                      </button> */}
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

// {this.state.students.map((student) => {
//   return (
//   );
// })}
//     <div>
//       {/* //! table from API   */}
//        <p>Id : {student.id}</p>
//        <p>Name : {student.name}</p>
//        <p>Email : {student.email}</p>
//        <p>Date of birthday : {student.dob}</p>
//        <p>Age : {student.age}</p>
//       {/* write some code ... */}
//     </div>

/* <h1>
    Hello {this.state.name}
  </h1>
  <button onClick={this.changeName}>click here </button> */
