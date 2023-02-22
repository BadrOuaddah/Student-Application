import axios from "axios";
import React, { Component } from "react";

const baseURL = "http://localhost:8080/api/v1/student";
const nameInput = document.getElementById("name_id");
const emailInput = document.getElementById("email_id");
const dateOfBirthdayInput = document.getElementById("dob_id");
const ageInput = document.getElementById("age_id");
const name = nameInput.value;
const email = emailInput.value;
const dob = dateOfBirthdayInput.value;
const age = ageInput.value;
const studentArray = {
  name,
  email,
  dob,
  age,
};

export default class ShowEditForm extends Component {
  
  

  constructor(props){
    super(props)
    this.state ={
      name: "",
      email: "",
      dob: "",
      age: 0,
    }
  }


  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post(baseURL,this.state);
  }

  render() {
    // const { name, email, dob, age} = this.state
    return (
      <div>
        <div className="boxShadow">
          <form onSubmit={this.submitHandler}>
            {/* onSubmit={(event) => handleSubmit(event)} */}
            <div className="form-row">
              <div className="col">
                <i className="fa fa-user-circle" aria-hidden="true"></i> Name :
                <input
                  type="text"
                  className="form-control"
                  onChange={this.changeHandler}
                  placeholder="Name"
                  // value={name}
                  id="name_id"
                />
              </div>
              <div className="col">
                <i className="fa fa-envelope" aria-hidden="true"></i> Email :
                <input
                  type="email"
                  onChange={this.changeHandler}
                  className="form-control"
                  placeholder="Email"
                  // value={email}
                  id="email_id"
                />
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="col">
                <i className="fa fa-birthday-cake" aria-hidden="true"></i> Date
                of birthday :
                <input
                  type="date"
                  onChange={this.changeHandler}
                  className="form-control"
                  // value={dob}
                  id="dob_id"
                />
              </div>
              <div className="col">
                <i className="fa fa-user-plus" aria-hidden="true"></i> Age :
                <input
                  type="number"
                  onChange={this.changeHandler}
                  className="form-control"
                  placeholder="Age"
                  // value={age}
                  id="age_id"
                />
              </div>
            </div>
            <br />
            <div className="center">
              <button
                // onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
                // id="submit_id"
              >
                Submit
              </button>
            </div>
            <br />
          </form>
        </div>
      </div>
    );
  }
}
