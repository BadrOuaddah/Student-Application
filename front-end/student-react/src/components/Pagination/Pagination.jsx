import React, { Component } from 'react';
import '../Pagination/Pagination.css';

export default class Pagination extends Component {
  render() {
    const { students, currentPage, totalPages } = this.state;
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div>
        ...
        <ul className="list-group list-group-flush">
          {students.map((student) => {
            return (
              <div key={student.id}>
                ...
              </div>
            );
          })}
        </ul>
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => {
              return (
                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                  <button onClick={() => this.setState({ currentPage: number })} className="page-link">{number}</button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    );
  }
  
}
