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
        {this.state.students.map((student) => {
          return (
            <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </div>
          );
        })}
      </div>
    );
  }
}


// <div class="card bg-transparent">
// <div class="card-body">
// </div>
// <ul class="list-group list-group-flush">
//   <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent">
//     <p>Id : {student.id}</p>
//     <p>Name : {student.name}</p>
//     <p>Email : {student.email}</p>
//     <p>Date of birthday : {student.dob}</p>
//     <p>Age : {student.age}</p>
//   </li>
// </ul>
// </div>


/* <h1>
    Hello {this.state.name}
  </h1>
  <button onClick={this.changeName}>click here </button> */
