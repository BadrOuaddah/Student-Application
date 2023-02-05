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
          <div class="card row bg-transparent solid-gray">
            <div class="card-body">
              <h4 class="card-title">List of students</h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates repellendus sit consequatur. Aperiam mollitia iure
                nulla quae tempore. Impedit, laboriosam accusantium! Asperiores,
                exercitationem consequuntur! Cupiditate commodi exercitationem
                voluptates dolores facere!
              </p>
            </div>
            <ul class="list-group list-group-flush">
                {this.state.students.map((student) => {
                  return (
                    <div>

<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Info of student
    <span class="badge badge-primary"></span>
  </li>
</ul>
                      <p>Id : {student.id}</p>
                      <p>Name : {student.name}</p>
                      <p>Email : {student.email}</p>
                      <p>Date of birthday : {student.dob}</p>
                      <p>Age : {student.age}</p>
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
