import axios from "axios";
import React, { Component} from "react";
import './ShowEditForm.css';

const baseURLStudent = "http://localhost:8080/api/v1/student";


export default class ShowEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      dob: "",
      age: 0,
    };
  }

  changeHandler = (event) => {
    const nameInput = document.getElementById("name_id");
    const emailInput = document.getElementById("email_id");
    const dateOfBirthdayInput = document.getElementById("dob_id");
    const ageInput = document.getElementById("age_id");
    const name = nameInput.value;
    const email = emailInput.value;
    const dob = dateOfBirthdayInput.value;
    const age = ageInput.value;
    this.setState({
      name: name,
      email: email,
      dob: dob,
      age: age,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post(baseURLStudent, this.state);
    window.location.reload(false);
  };

  render() {
    return (
      <div>
        <div className="row col-2">
          <button className="btn btn-success">
            <span className="fa fa-plus"></span> ADD
          </button>
        </div>
        <br />
        <div className="boxShadow">
          <form onSubmit={this.submitHandler}>
            <div className="form-row">
              <div className="col">
                <i className="fa fa-user-circle" aria-hidden="true"></i> Name :
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="name_id"
                />
              </div>
              <div className="col">
                <i className="fa fa-envelope" aria-hidden="true"></i> Email :
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
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
                  className="form-control"
                  id="dob_id"
                />
              </div>
              <div className="col">
                <i className="fa fa-user-plus" aria-hidden="true"></i> Age :
                <input
                  type="number"
                  className="form-control"
                  placeholder="Age"
                  id="age_id"
                />
              </div>
            </div>
            <br />
            <div className="center">
              <button
                onClick={this.changeHandler}
                type="submit"
                className="btn btn-primary"
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