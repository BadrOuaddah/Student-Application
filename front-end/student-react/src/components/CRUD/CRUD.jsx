import React, { useState } from "react";
import "./CRUD.css";
// import Student from '../Student/Student';

export default function CRUD() {
  const list = [
    {
      id: 1,
      name: "HP",
      price: 1400,
    },
    {
      id: 2,
      name: "DELL",
      price: 2500,
    },
    {
      id: 3,
      name: "LENOVO",
      price: 1200,
    },
    {
      id: 4,
      name: "ASUS",
      price: 1700,
    },
    {
      id: 5,
      name: "ACER",
      price: 1600,
    },
  ];
  const [lists, setList] = useState(list);

  return (
    <div>
      <table>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
            </tr>
        {lists.map((current) => (
            <tr>
              <td>{current.id}</td>
              <td>{current.name}</td>
              <td>{current.price}</td>
            </tr>
       
        ))}
      </table>
    </div>
  );
}
