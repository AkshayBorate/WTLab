import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/showpage">
                Show
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/addpage">
                Add
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/updatepage">
                Update
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/deletepage">
                Delete
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
