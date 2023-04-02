import React, { Component } from "react";
import "./ShowUpdateForm.css";
import { useState } from "react";

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
              <div className="center">
                <button
                  // onSubmit={handleInput}
                  //  onClick={() => handleInput()}
                  type="submit"
                  className="btn btn-primary"
                  id="submit_id"
                >
                  Submit
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
