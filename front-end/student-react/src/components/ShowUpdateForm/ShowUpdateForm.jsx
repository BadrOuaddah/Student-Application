import React, { Component,useState } from "react";
import "./ShowUpdateForm.css";

export default class ShowUpdateForm extends Component {
  render() {
    return (
      <div>
        <ButtonShowOrHide/>
      </div>
    );
  }
}

function ButtonShowOrHide(){
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return(
    <div>
        <button className="btn btn-warning" onClick={handleClick}>
          <span className="fa fa-refresh"></span> UPDATE
        </button>
        {isShown && (
          <UpdateStudent />
        )}
    </div>
  )
}

function UpdateStudent() {
  return (
    <div>
      <div className="boxShadow">
        <br />
        <form>
          <div>
            <div className="form-row">
              <div className="col">
                <i className="fa fa-id-card" aria-hidden="true"></i> ID :
                <input
                  type="text"
                  className="form-control"
                  // defaultValue={id}
                  // placeholder={name}
                  // onChange={handleInput}
                  id="idOfId"
                />
              </div>
              <div className="col">
                <i className="fa fa-user-circle" aria-hidden="true"></i> Name :
                <input
                  type="text"
                  className="form-control"
                  // defaultValue={name}
                  // placeholder={name}
                  // onChange={handleInput}
                  id="updateName_id"
                />
              </div>
              <div className="col">
                <i className="fa fa-envelope" aria-hidden="true"></i> Email :
                <input
                  type="email"
                  // defaultValue={email}
                  // onChange={handleInput}
                  // placeholder={email}
                  className="form-control"
                  id="updateEmail_id"
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
                  // defaultValue={dob}
                  // onChange={handleInput}
                  // placeholder={dob}
                  className="form-control"
                  id="updateDob_id"
                />
              </div>
              <div className="col">
                <i className="fa fa-user-plus" aria-hidden="true"></i> Age :
                <input
                  type="number"
                  // defaultValue={age}
                  // onChange={handleInput}
                  // placeholder={age}
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
