import React, { Component } from "react";
import "./ShowEditForm.css";

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

  render() {
    return (
      <div>
        <div className="boxShadow">
          <form>
            {/* onSubmit={(event) => handleSubmit(event)} */}
            <div className="form-row">
              <div className="col">
                <i className="fa fa-user-circle" aria-hidden="true"></i> Name :
                <input
                  type="text"
                  className="form-control"
                  // onChange={handleInput}
                  placeholder="Name"
                  id="name_id"
                />
              </div>
              <div className="col">
                <i className="fa fa-envelope" aria-hidden="true"></i> Email :
                <input
                  type="email"
                  // onChange={handleInput}
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
                  // onChange={handleInput}
                  className="form-control"
                  id="dob_id"
                />
              </div>
              <div className="col">
                <i className="fa fa-user-plus" aria-hidden="true"></i> Age :
                <input
                  type="number"
                  // onChange={handleInput}
                  className="form-control"
                  placeholder="Age"
                  id="age_id"
                />
              </div>
            </div>
            <br />
            <div className="center">
              <button
                // onClick={handleInput}
                type="submit"
                className="btn btn-primary"
                id="submit_id"
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
