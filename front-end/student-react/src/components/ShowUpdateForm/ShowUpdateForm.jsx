import React, { useState } from "react";
import "./ShowUpdateForm.css";
import axios from "axios";

export default function ShowUpdateForm() {
  const [isShown, setIsShown] = useState(false);
  const [post, setPost] = React.useState(null);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);


  function PutStudent(id) {
    const student = axios.get(`http://localhost:8080/api/v1/student/${id}`).then(r => r.data)
    axios.put(`http://localhost:8080/api/v1/student/${id}`,{
      name:student.name,
      email:student.email,
      dob:student.dob,
      age:student.age
    })
  }


  
  // DeleteStudent(id, e) {
  //   axios
  //     .delete(`http://localhost:8080/api/v1/student/${id}`)
  //     .then((response) => console.log(response));
  //   const students = this.state.students.filter((item) => item.id !== id);
  //   this.setState({ students });
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
              value="UPDATE"
            />
          </div>
        </div>
      )}
    </div>
  );
}
