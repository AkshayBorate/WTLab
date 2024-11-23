import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import projectroute from "./projectroute";
var createElement = document.getElementById("root");
var result = ReactDOM.createRoot(createElement);

// result.render(<App />);
result.render(<RouterProvider router={projectroute} />);
