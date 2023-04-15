import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ students }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(students.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(students.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, students]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul>
        {currentItems &&
          currentItems.map((student) => (
            <li key={student.id}>
              <ul className="list-group-item list-group-item-action list-group-item-secondary">
              <li>Id : {student.id}</li>
              <li>Name : {student.name}</li>
              <li>Email : {student.email}</li>
              <li>Date of birthday : {student.dob}</li>
              <li>Age : {student.age}</li>
              </ul>
            </li>
          ))}
      </ul>
      <ReactPaginate
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
