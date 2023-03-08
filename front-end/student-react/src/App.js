import React from "react";
import "./App.css";
import "bootstrap";
import Student from "./components/Student/Student.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import CRUD from "./components/CRUD/CRUD";


export function App() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ textAlign: "center" }}>
        Welcome to my student App (React) &#128187;
      </h1>
      <br />
      <br />
      {/* <Student /> */}
      <div>
        <CRUD />
      </div>
    </div>
  );
}

export default App;
