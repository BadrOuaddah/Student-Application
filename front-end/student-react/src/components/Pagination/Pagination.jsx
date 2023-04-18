import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from 'axios';
import './Pagination.css';
const baseURL = "http://localhost:8080/api/v1/student";



export default function Pagination() {
  const [students, setStudents] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  

  useEffect(() => {
    axios.get(baseURL)
    .then(response => {
      setStudents(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(students.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(students.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, students]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container">
        <div className="col card row bg-transparent solid-gray">
          <ul className="list-group list-group-flush">
            {currentItems &&
              currentItems.map((student) => (
                <li key={student.id}>
                  <ul className="list-group-item list-group-item-action list-group-item-secondary">
                    <li>Id : {student.id}</li>
                    <li>Name : {student.name}</li>
                    <li>Email : {student.email}</li>
                    <li>Date of birthday : {student.dob}</li>
                    <li>Age : {student.age}</li>
                    <br />
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <ReactPaginate
      className="pagination"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
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
    </>
  );
}
