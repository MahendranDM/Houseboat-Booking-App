import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                View Houseboats
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/add">
                Add Houseboat
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/search">
                Search Houseboat
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/delete">
                Delete Houseboat
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;