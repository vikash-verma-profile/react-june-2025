import { useState } from "react";
import { Link, Router } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link class="navbar-brand" to="/">
          MyApp
        </Link>



        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
             <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
