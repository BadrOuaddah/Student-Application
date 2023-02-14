import React, { Component } from 'react';
import "./ShowEditForm.css";
import axios from 'axios';

const baseURL = "http://localhost:8080/api/v1/student"; 

export default class ShowEditForm extends Component {

  constructor(props){
    super(props);
    this.state={
      students: []
    };
  };

  // TODO: solve a bug POST method
  //! solve a bug POST method
  AddStudent(){
    const nameInput = document.getElementById("name_id");
    const emailInput = document.getElementById("email_id");
    const dateOfBirthdayInput = document.getElementById("dob_id");
    const ageInput = document.getElementById("age_id");
    const submitButton = document.getElementById("submit_id");
    
    submitButton.addEventListener("click",() => {
      const name = nameInput.value;
      const email = emailInput.value;
      const dob = dateOfBirthdayInput.value;
      const age = ageInput.value;

      axios.post(baseURL,{
        name:name,
        email:email,
        dob:dob,
        age:age
      }).then(() =>{
        const students = this.state.students;
        this.setState({students});
      })
    })

    // then((res) => setData(res.data.id));
    
    // response => {
    //   const students = response.json();
    //   this.setState({ students });
    // }
  }

  render() {
    return (
      <div>
        <div className="boxShadow">
<form>
  <div className="form-row">
    <div className="col">
      <i className="fa fa-user-circle" aria-hidden="true"></i> Name :
      <input type="text" className="form-control" placeholder="Name" id='name_id' />
    </div>
    <div className="col">
      <i className="fa fa-envelope" aria-hidden="true"></i> Email :
      <input type="email" className="form-control" placeholder="Email" id='email_id' />
    </div>
  </div>
  <br />
  <div className="form-row">
    <div className="col">
      <i className="fa fa-birthday-cake" aria-hidden="true"></i> Date of
      birthday :
      <input type="date" className="form-control" id='dob_id' />
    </div>
    <div className="col">
      <i className="fa fa-user-plus" aria-hidden="true"></i> Age :
      <input type="number" className="form-control" placeholder="Age" id='age_id' />
    </div>
  </div>
  <br />
  <div className="center">
  <button type="submit" onClick={this.AddStudent} className="btn btn-primary" id='submit_id'>Submit</button>
  </div>
  <br />
</form>
</div>
      </div>
    )
  }
}
