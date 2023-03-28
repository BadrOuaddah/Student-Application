import React, { Component,useEffect, useState } from "react";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import "./Student.css";
import axios from "axios";
import ShowEditForm from "../ShowEditForm/ShowEditForm";
import ShowUpdateForm from "../ShowUpdateForm/ShowUpdateForm";
const baseURL = "http://localhost:8080/api/v1/student";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };

    axios.get(baseURL).then((response) => {
      const students = response.data;
      this.setState({ students });
    });
  }

  DeleteStudent(id, e) {
    axios
      .delete(`http://localhost:8080/api/v1/student/${id}`)
      .then((response) => console.log(response));
    const students = this.state.students.filter((item) => item.id !== id);
    this.setState({ students });
  }

  ButtonToShowEditForm() {
    console.log("Edit Form showed !");
  }

  Items({ currentItems }) {
    return (
      <div className="items">
        {currentItems &&
          currentItems.map((student) => (
            <div>
              <h3>Item #{student}</h3>
            </div>
          ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="col card row bg-transparent solid-gray">
            <div className="card-body">
              <h4 style={{ textAlign: "center" }} className="card-title">
                List of students
              </h4>
              <br />
              <div>
                <ShowEditForm />
              </div>
              <hr />
            </div>
            <ul className="list-group list-group-flush">
              {this.state.students.map((student) => {
                return (
                  <div key={student.id}>
                    <ul className="list-group-item list-group-item-action list-group-item-secondary">
                      <li>Id : {student.id}</li>
                      <li>Name : {student.name}</li>
                      <li>Email : {student.email}</li>
                      <li>Date of birthday : {student.dob}</li>
                      <li>Age : {student.age}</li>
                      <br />
                      <div>
                        <button
                          onClick={(e) => this.DeleteStudent(student.id, e)}
                          className="btn btn-danger"
                        >
                          <span className="fa fa-trash"></span> DELETE
                        </button>
                      </div>
                      <br />
                      <ShowUpdateForm student={student} />
                    </ul>
                    <br />
                  </div>
                );
              })}
            </ul>
          </div>
          <br />
          <div>
            <Pagination/>
          </div>
        </div>
      </div>
    );
  }
}

function Pagination() {
  return <div>
    <ReactPaginate
    nextLabel="next >"
    // onPageChange={handlePageClick}
    pageRangeDisplayed={3}
    marginPagesDisplayed={2}
    // pageCount={pageCount}
    previousLabel="< previous"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    previousClassName="page-item"
    previousLinkClassName="page-link"
    nextClassName="page-item"
    nextLinkClassName="page-link"
    breakLabel="..."
    breakClassName="page-item"
    breakLinkClassName="page-link"
    containerClassName="pagination"
    activeClassName="active"
    renderOnZeroPageCount={null}
    />
  </div>;
}
