import React from "react";
import "./ShowEditForm.css";

export default function ShowEditForm() {
  return (
    <div>
      <div className="boxShadow">
      <form>
        <div className="form-row">
          <div className="col">
            <i className="fa fa-user-circle" aria-hidden="true"></i> Name :
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col">
            <i className="fa fa-envelope" aria-hidden="true"></i> Email :
            <input type="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <br />
        <div className="form-row">
          <div className="col">
            <i className="fa fa-birthday-cake" aria-hidden="true"></i> Date of
            birthday :
            <input type="date" className="form-control" />
          </div>
          <div className="col">
            <i className="fa fa-user-plus" aria-hidden="true"></i> Age :
            <input type="number" className="form-control" placeholder="Age" />
          </div>
        </div>
        <br />
        <div className="center">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <br />
      </form>
      </div>
    </div>
  );
}
