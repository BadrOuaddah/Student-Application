import React, { useEffect, useState } from "react";
import "./ShowUpdateForm.css";
import axios from "axios";
import Student from "../Student/Student";

const baseURL = "http://localhost:8080/api/v1/student";
export default function ShowUpdateForm() {
  const [isShown, setIsShown] = useState(false);
  const [student, setStudent] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0);
  const [studentId, setStudentId] = useState(null);

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
          <div>
            <div className="card text-left">
            {student.map((student, index) =>{
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
                <input className="form-control" type="text" value={student.age}/>
                <br />
                <div>
                  <button>UPDATE</button>
                </div>
              </div>
              )
            })}
            </div>
          </div>
          <br />
        </div>
      )}
    </div>
  );
}
