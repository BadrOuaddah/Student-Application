import React, { useState } from "react";
import "./ShowUpdateForm.css";

export default function ShowUpdateForm() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <button className="btn btn-warning" onClick={handleClick}>
        <span className="fa fa-refresh"></span> UPDATE
      </button>
      <br />
      <br />
      {isShown && (
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
      )}
    </div>
  );
}
