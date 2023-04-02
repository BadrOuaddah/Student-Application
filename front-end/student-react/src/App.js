import React, { useState }from "react";
import "./App.css";
import "bootstrap";
import Student from "./components/Student/Student.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Pagination from "./components/Pagination/Pagination";
import { useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/student";


export function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

useEffect( () =>{
  const fetchPosts = async() =>{
    setLoading(true);
    const response = await axios.get(baseURL);
    setPosts(response.data);
    setLoading(false);
  }
  fetchPosts();
}, []
);
  
  return (
    <div>
      <NavigationBar />
      <h1 style={{ textAlign: "center" }}>
        Welcome to my student App (React) &#128187;
      </h1>
      <br />
      <br />
      <Student />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <ul>
          <Pagination />
        </ul>
      </div>
    </div>
  );
}

export default App;
