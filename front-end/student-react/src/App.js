import React from "react";
import "./App.css";
import "bootstrap";
import Student from "./components/Student/Student";
import NavigationBar from "./components/NavigationBar/NavigationBar";

export function App() {
  return (
    <div>
      <NavigationBar />
      <h1>Welcome to my first REACT App (JavaScript) &#128187;</h1>
      <br />
      <br />
      <Student />
      <a href="http://localhost:8080/api/v1/student">
        click here for show database
      </a>
    </div>
  );
}

export default App;



//* Last lesson of learn React
// var name = "ahmed" ;
// var score = 8 ;
// let message = "";
// const pi = 3.14;
// if (score >= 10) {
//   message = "PASS";
// } else {
//   message = "FAILED";
// }

// <p>
//   hello {name}
// </p>
// <p>your score is : {score}</p>
// <p>{message}</p>
// <p>{pi}</p>
// <div>
//   <a href="http://localhost:8080/api/v1/student">click here for show database</a>
// </div>
// <br />
//   <ul>enter number :
//   <input type="text" />
//   </ul>
