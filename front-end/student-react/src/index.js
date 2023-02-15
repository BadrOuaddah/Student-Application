import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import PaginatedItems from "./components/Pagination/Pagination";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById("container")
// );
