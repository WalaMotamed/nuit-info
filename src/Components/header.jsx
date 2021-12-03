import React from "react";
//import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
