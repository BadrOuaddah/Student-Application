import React, { Component } from "react";
import "./ShowUpdateForm.css";
import { useState } from "react";
import axios from "axios";


const baseURL = "http://localhost:8080/api/v1/student";

export default function ShowUpdateForm({ name, email, dob, age }) {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <div>
      <button className="btn btn-warning" onClick={handleClick}>
        <span className="fa fa-refresh"></span> UPDATE
      </button>
      {isShown && (
        <UpdateStudent name={name} email={email} dob={dob} age={age} />
      )}
    </div>
  );
}

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      email: props.email,
      dob: props.dob,
      age: props.age,
    };
  }

  handleNameChange = (event) => {
    this.setState({name : event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({email : event.target.value });
  }

  handleDobChange = (event) => {
    this.setState({dob : event.target.value });
  }

  handleAgeChange = (event) => {
    this.setState({age : event.target.value });
  }

  handleUpdate = (event) => {
    const name = this.state.name;
    const email = this.state.email;
    const dob = this.state.dob;
    const age = this.state.age;
    console.log("handleUpdate is working !");
    axios.post(baseURL, {
      name: name,
      email: email,
      dob: dob,
      age:age
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="boxShadow">
          <br />
          <form>
            <div>
              <div className="form-row">
                <div className="col">
                  <i className="fa fa-user-circle" aria-hidden="true"></i> Name
                  :
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    id="updateName_id"
                  />
                </div>
                <div className="col">
                  <i className="fa fa-envelope" aria-hidden="true"></i> Email :
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    className="form-control"
                    id="updateEmail_id"
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="col">
                  <i className="fa fa-birthday-cake" aria-hidden="true"></i>{" "}
                  Date of birthday :
                  <input
                    type="date"
                    value={this.state.dob}
                    onChange={this.handleDobChange}
                    className="form-control"
                    id="updateDob_id"
                  />
                </div>
                <div className="col">
                  <i className="fa fa-user-plus" aria-hidden="true"></i> Age :
                  <input
                    type="number"
                    value={this.state.age}
                    onChange={this.handleAgeChange}
                    className="form-control"
                    id="updateAge_id"
                  />
                </div>
              </div>
              <br />
              <ul style={{listStyle: "initial"}}>
              <li>
                <b>
              The student name is {this.state.name} has {this.state.age} year and (his/her) email is {this.state.email}.
                </b>
              </li>
              </ul>
          <br />
          <br />
              <div className="center">
                <button
                  onClick={this.handleUpdate}
                  type="submit"
                  className="btn btn-primary"
                  id="confirm_id"
                >
                  Confirm
                </button>
              </div>
            </div>
            <br />
          </form>
        </div>
      </div>
    );
  }
}
