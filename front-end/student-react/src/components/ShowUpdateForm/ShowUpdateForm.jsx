import React, { useEffect, useState } from "react";
import "./ShowUpdateForm.css";
import axios from "axios";
import Student from "../Student/Student";

const baseURL = "http://localhost:8080/api/v1/student";
export default function ShowUpdateForm(theStudent) {
  const id = theStudent.id;

  const [isShown, setIsShown] = useState(false);
  const [student, setStudent] = useState([]);
  const [name, setName] = useState(theStudent.name);
  const [email, setEmail] = useState(theStudent.email);
  const [dob, setDob] = useState(theStudent.dob);
  const [age, setAge] = useState(theStudent.age);
  const [studentId, setStudentId] = useState(null);

  const studentUpdate = {name,email,dob,age};

  useEffect(() => {
    getStudent();
  },[])
  function getStudent(){
    fetch(baseURL).then((response) =>{
      response.json().then((result) =>{
        setStudent(result);
        setName(setStudent[0].name);
        setEmail(setStudent[0].email);
        setDob(setStudent[0].dob);
        setAge(setStudent[0].age);
        setStudentId(setStudent[0].studentId);
      })
    })
  }

  function selectStudent(id){
    let item =student[id];
    setName(item.name);
    setEmail(item.email);
    setDob(item.dob);
    setAge(item.age);
  }

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    studentUpdate(id,studentUpdate)
  }

  // ! function to use set put variable 
  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPut(response.data);
  //   });
  // }, []);


  // ! function to update student 
  // function PutStudent(id) {
  //   const student = axios.get(`http://localhost:8080/api/v1/student/${id}`).then(r => r.data)
  //   axios.put(`http://localhost:8080/api/v1/student/${id}`,{
  //     name:student.name,
  //     email:student.email,
  //     dob:student.dob,
  //     age:student.age
  
  //   })
  // }
  return (
    <div>
      <button className="btn btn-warning" onClick={handleClick}>
        <span className="fa fa-refresh"></span> UPDATE
      </button>
      <br />
      <br />
      {isShown && (
        <div>
          <form onSubmit={handleSubmit}>
          <div>
            <div className="card text-left">
              {/* filter */}
            {theStudent.map((student, index) =>{
               const id = studentId;
              return(
              <div className="card-body colorCard" key={index}>
                Name:
                <input className="form-control" type="text" value={student.name} />
                <br />
                Email:
                <input className="form-control" type="text" value={student.email} />
                <br />
                Date of birthday
                <input className="form-control" type="date" value={student.dob} />
                <br />
                Age:
                <input className="form-control" type="text" value={student.age} />
                <br />
                <div>
                  <button>UPDATE</button>
                </div>
              </div>
              )
            })}
            </div>
          </div>
          </form>
          <br />
        </div>
      )}
    </div>
  );
}
