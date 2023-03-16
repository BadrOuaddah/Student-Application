import React, { useEffect, useState } from "react";
import "./ShowUpdateForm.css";
import axios from "axios";
// import Student from "../Student/Student";

const baseURL = "http://localhost:8080/api/v1/student";

export default function ShowEditForm({ student: { name, email, dob, age } }) {


  const [isShown, setIsShown] = useState(false);
  const [updateState, setUpadateState] = useState(-1);
  const [student, setStudent] = useState([]);
  useEffect(() => {
    const getStudentAPI = async () => {
      axios.get(baseURL).then((response) => {
        const studentJSON = response.data; //* GET in form JSON
        setStudent(studentJSON);
        console.log(studentJSON);
      });
    };
    getStudentAPI();
  }, []);
  // const [student, setStudent] = useState({
  //   student:[]
  // });

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  //TODO: ADD FETCH TO IMPORT DATA FROM DATABASE AND SHOW IT INTO isShown DIV
  // const getStudentAPI = event => {
  //  setStudent()
  // };

  // function getStudentAPI(){
  //   const [studentAPI, setStudentAPI] = useState();
  //   fetch(baseURL).then((response) => response.json())
  //   this.setStudentAPI
  // }

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
      {/* {student.map((std)=>(
        <div>
          updateState === std.id ? <EditStudentList/> :
        </div>))} */}
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
                  <i className="fa fa-user-circle" aria-hidden="true"></i> Name
                  :
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={name}
                    // placeholder={name}
                    // onChange={handleInput}
                    id="name_id"
                  />
                </div>
                <div className="col">
                  <i className="fa fa-envelope" aria-hidden="true"></i> Email :
                  <input
                    type="email"
                    defaultValue={email}
                    // onChange={handleInput}
                    // placeholder={email}
                    className="form-control"
                    id="email_id"
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
                    defaultValue={dob}
                    // onChange={handleInput}
                    // placeholder={dob}
                    className="form-control"
                    id="dob_id"
                  />
                </div>
                <div className="col">
                  <i className="fa fa-user-plus" aria-hidden="true"></i> Age :
                  <input
                    type="number"
                    defaultValue={age}
                    // onChange={handleInput}
                    // placeholder={age}
                    className="form-control"
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
            </div>
            <br />
          </form>
        </div>
      )}
    </div>
  );

  // ! EDIT LIST !!!
  // function EditStudentList({ current, setStudent, student }) {
  //   function handleInput(event) {
  //     const name = event.target.name;
  //     const value = event.value;
  //     const newList = student.map((st) =>
  //       st.id === current.id ? { ...st, name: value } : st
  //     );
  //     setStudent(newList);
  //   }

  //   return (
  //     <tr>
  //       <td>
  //         <input
  //           type="text"
  //           name="name"
  //           onChange={handleInput}
  //           value={current.name}
  //         />
  //       </td>
  //       <td>
  //         <input type="number" name="price" value={current.price} />
  //       </td>
  //       <td>
  //         <button type="submit">UPDATE</button>
  //       </td>
  //     </tr>
  //   );
  // }
  // ! EDIT LIST !!!
}
