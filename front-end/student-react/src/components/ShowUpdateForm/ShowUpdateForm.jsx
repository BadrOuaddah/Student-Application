import React from "react";
import "./ShowUpdateForm.css";

export default function ShowUpdateForm() {
  return (
    <div>
      <div>
        <div className="card text-left">
          <div className="card-body colorCard">
            Name:
            <input className="form-control" type="text" />
            <br />
            Email:
            <input className="form-control" type="text" />
            <br />
            Date of birthday
            <input className="form-control" type="date" />
            <br />
            Age:
            <input className="form-control" type="text" />
            <br />
          </div>
        </div>
      </div>
      <br />
      {/* //! button for submit update  */}
      <div>
        <input
          name=""
          id=""
          className="btn btn-primary"
          type="button"
          value="OK"
        />
      </div>
    </div>
  );
}
