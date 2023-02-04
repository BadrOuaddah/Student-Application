import React, { Component } from 'react'

export default class Student extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : 0,
      name : 'ahmed',
      email : '',
      dob : '',
      age : 0
      // private Long id;
      // private String name;
      // private String email;
      // private LocalDate dob;
      // private Integer age;
    }
  }
  render() {
    return (
      <div>
        Student component
        <h1>
          Hello {this.state.name}
        </h1>
      </div>
    )
  }
}
