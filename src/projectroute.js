import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Show from "./components/Show";
import Add from "./components/Add";
import Update from "./components/Update";
import Delete from "./components/Delete";
var projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "showpage",
        element: <Show />,
      },
      {
        path: "addpage",
        element: <Add />,
      },
      {
        path: "updatepage",
        element: <Update />,
      },
      {
        path: "deletepage",
        element: <Delete />,
      },
    ],
  },
]);
export default projectroute;
