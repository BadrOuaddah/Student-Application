import React, { useState } from "react";
import "./ShowEditForm.css";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/student";
export default function ShowEditForm() {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    dob: "",
    age: 0,
  });

  const handleInput = (event) => {
    setStudent({...student, [event.target.name]: event.target.event})
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(baseURL,{student}).then(response => console.log(response)).catch(err => console.log(err))
    // axios.post(baseURL,student)
  }

  return (
    <div>
      <div className="boxShadow">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="form-row">
            <div className="col">
              <i className="fa fa-user-circle" aria-hidden="true"></i> Name :
              <input
                type="text"
                className="form-control"
                onChange={handleInput}
                placeholder="Name"
                id="name_id"
              />
            </div>
            <div className="col">
              <i className="fa fa-envelope" aria-hidden="true"></i> Email :
              <input
                type="email"
                onChange={handleInput}
                className="form-control"
                placeholder="Email"
                id="email_id"
              />
            </div>
          </div>
          <br />
          <div className="form-row">
            <div className="col">
              <i className="fa fa-birthday-cake" aria-hidden="true"></i> Date of
              birthday :
              <input
                type="date"
                onChange={handleInput}
                className="form-control"
                id="dob_id"
              />
            </div>
            <div className="col">
              <i className="fa fa-user-plus" aria-hidden="true"></i> Age :
              <input
                type="number"
                onChange={handleInput}
                className="form-control"
                placeholder="Age"
                id="age_id"
              />
            </div>
          </div>
          <br />
          <div className="center">
            <button type="submit" className="btn btn-primary" id="submit_id">
              Submit
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}
