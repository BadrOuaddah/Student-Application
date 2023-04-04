import React, { useState }from "react";
import "./App.css";
import "bootstrap";
import Student from "./components/Student/Student.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/student";


export function App() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ textAlign: "center" }}>
        Welcome to my student App (React) &#128187;
      </h1>
      <br />
      <br />
      <Student />
    </div>
  );
}

export default App;
