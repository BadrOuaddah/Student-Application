import React, { Component } from "react";

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
        {this.state.students.map((student, index) => {
          return (
            <div>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                  <p>Id : {student.id}</p>
                  <p>Name : {student.name}</p>
                  <p>Email : {student.email}</p>
                  <p>Date of birthday : {student.dob}</p>
                  <p>Age : {student.age}</p>
                </li>
              </ul>
            </div>
          );
        })}
        <p></p>
      </div>
      /* <h1>
          Hello {this.state.name}
        </h1>
        <button onClick={this.changeName}>click here </button> */
    );
  }
}
