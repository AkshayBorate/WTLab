import React from "react";
import Header from "./Header";
import Show from "./Show";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
