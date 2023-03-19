import React, { useEffect, useState } from "react";
import "./ShowUpdateForm.css";
import axios from "axios";

export default function ShowEditForm({ student: { id,name, email, dob, age } }) {
  const [isShown, setIsShown] = useState(false);
  const [student, setStudent] = useState([]);
  const [putStudent, setPutStudent] =useState([]);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };



  useEffect(() => {
    const studentUpdated = { id:id, name: name , email: email, dob:dob, age:age };
    axios.put(`http://localhost:8080/api/v1/student/${id}`, studentUpdated)
        .then(response => {
          setPutStudent(response.data)
          console.log(response);
        });
}, []);


  //! GET method to show data of student
  // useEffect(() => {
  //   const getStudentAPI = async () => {
  //     axios.get(baseURL).then((response) => {
  //       const studentJSON = response.data; //* GET in form JSON
  //       setStudent(studentJSON);
  //       console.log(studentJSON);
  //     });
  //   };
  //   getStudentAPI();
  // }, []);

  //! PUT method to input value into data student 
  // const handleInput = (id,e) => {
  //   const nameInput = document.getElementById("name_id");
  //   const emailInput = document.getElementById("email_id");
  //   const dateOfBirthdayInput = document.getElementById("dob_id");
  //   const ageInput = document.getElementById("age_id");

  //   const name = nameInput.value;
  //   const email = emailInput.value;
  //   const dob = dateOfBirthdayInput.value;
  //   const age = ageInput.value;
  // }


  //! Confirm data to insert into student table of database 
  // const handleSubmit = async (id, event) => {
  //   const nameInput = document.getElementById("name_id");
  //   const emailInput = document.getElementById("email_id");
  //   const dateOfBirthdayInput = document.getElementById("dob_id");
  //   const ageInput = document.getElementById("age_id");

  //   const name = nameInput.value;
  //   const email = emailInput.value;
  //   const dob = dateOfBirthdayInput.value;
  //   const age = ageInput.value;

  //   axios
  //     .post(baseURL, {
  //       name: name,
  //       email: email,
  //       dob: dob,
  //       age: age,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


  return (
    <div>
      <button className="btn btn-warning" onClick={handleClick}>
        <span className="fa fa-refresh"></span> UPDATE
      </button>
      {isShown && (
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
                    defaultValue={id}
                    // placeholder={name}
                    // onChange={handleInput}
                    id="idOfId"/>
                </div>
                <div className="col">
                  <i className="fa fa-user-circle" aria-hidden="true"></i> Name :
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={name}
                    // placeholder={name}
                    // onChange={handleInput}
                    id="name_id"/>
                </div>
                <div className="col">
                  <i className="fa fa-envelope" aria-hidden="true"></i> Email :
                  <input
                    type="email"
                    defaultValue={email}
                    // onChange={handleInput}
                    // placeholder={email}
                    className="form-control"
                    id="email_id"/>
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="col">
                  <i className="fa fa-birthday-cake" aria-hidden="true"></i>{" "}
                  Date of birthday :
                  <input
                    type="date"
                    defaultValue={dob}
                    // onChange={handleInput}
                    // placeholder={dob}
                    className="form-control"
                    id="dob_id"/>
                </div>
                <div className="col">
                  <i className="fa fa-user-plus" aria-hidden="true"></i> Age :
                  <input
                    type="number"
                    defaultValue={age}
                    // onChange={handleInput}
                    // placeholder={age}
                    className="form-control"
                    id="age_id"/>
                </div>
              </div>
              <br />
              <div className="center">
                <button
                 onClick={() => setPutStudent(name,email,dob,age)}
                  type="submit"
                  className="btn btn-primary"
                  id="submit_id">
                  Submit
                </button>
              </div>
            </div>
            <br />
          </form>
        </div>
      )}
    </div>
  );
}
