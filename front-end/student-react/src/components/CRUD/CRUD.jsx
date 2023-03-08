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
  const [updateState, setUpadateState] = useState(-1)

  return (

    <div>
      <form onSubmit={handleSubmit}>
      <table>
        <tr>

          <th>NAME</th>
          <th>PRICE</th>
        </tr>
        {lists.map((current) => (
          updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
          <tr>
            <td>{current.name}</td>
            <td>{current.price}</td>
            <td>
              <button type="button" className="btn btn-warning space" onClick={() => handleEdit(current.id)}>
                EDIT
              </button>
              <button type="button" className="btn btn-danger ">
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </table>
      </form>
    </div>
  );

  
function handleEdit(id){
  setUpadateState(id)

}
function handleSubmit(event){
  const name = event.target.elements.name.value;
  const price = event.target.elements.price.value;
  const newList = lists.map((li) =>(
    li.id === updateState ? {...li, name: name, price: price}: li
  ))
  setList(newList)
  setUpadateState(-1)
}
 
}

function EditList({current, setList, lists}){

  function handleInput(event){
    const name = event.target.name;
    const value = event.value;
    const newList = lists.map((li) =>(
      li.id === current.id ? {...li, name: value}: li
    ))
    setList(newList)
  }

  return(
    <tr>
      <td><input type="text" name="name" onChange={handleInput} value={current.name}/></td>
      <td><input type="number" name="price" value={current.price} /></td>
      <td><button type="submit">UPDATE</button></td>
    </tr>
  );
} 
