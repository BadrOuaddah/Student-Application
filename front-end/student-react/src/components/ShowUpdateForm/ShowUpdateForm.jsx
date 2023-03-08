import React, { useState } from "react";
import "./ShowUpdateForm.css";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/student";
export default function ShowEditForm() {
  const [isShown, setIsShown] = useState(false);
  const [student, setStudent] = useState({
    name: "",
    email: "",
    dob: "",
    age: 0,
  });


  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  };
  

  // const handleInput = (event) => {
  //   const nameInput = document.getElementById("name_id");
  //   const emailInput = document.getElementById("email_id");
  //   const dateOfBirthdayInput = document.getElementById("dob_id");
  //   const ageInput = document.getElementById("age_id");

  //   const name = nameInput.value;
  //   const email = emailInput.value;
  //   const dob = dateOfBirthdayInput.value;
  //   const age = ageInput.value;

  //   const studentArray = {
  //     name,email,dob,age
  //   }

  //   const student = JSON.stringify(studentArray)

  //   //! bug
  //   setStudent({...student, [event.target.name]: event.target.event})
  // };
  const handleSubmit = async (event) => {
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

    const studentJSON = JSON.stringify(studentArray);

    //! bug
    // setStudent({...student, [event.target.name]: event.target.event})

    // Send a POST request
    axios({
      method: "post",
      url: baseURL,
      data: {
        studentJSON,
      },
    });

    // axios.post(baseURL,{
    //   studentJSON
    // },{headers: {'Content-Type': 'application/json'}}).then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });

    // axios.post(baseURL,{student
    // }).then(() =>{
    //   const students = event;
    //   this.setState({students});
    // })

    // then(() =>{
    //   const students = this.state.students;
    //   this.setState({students});

    // event.preventDefault()
    // await axios.post(baseURL,{student}).then(response => console.log(response)).catch(err => console.log(err))
  };

  return (
    <div>
      <button className="btn btn-warning" onClick={handleClick}>
      <span className="fa fa-refresh"></span> UPDATE
      </button>
       {isShown && (
         <div className="boxShadow">
        <br />
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
              <i className="fa fa-birthday-cake" aria-hidden="true"></i> Date of
              birthday :
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
              onClick={handleSubmit}
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
       )}
    </div>
  );





function editStudent(){
  

  return(
  <div></div>
  )
}



}
