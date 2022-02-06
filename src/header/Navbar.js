import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import "./Navbar.css";

const Navbar = ({ setCoords, location }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex align-items-center">
            <a className="navbar-brand">Weatherly</a>
            <div className="text-light d-flex align-items">
              <p className="me-2">
                {location && location[0].name}, {location && location[0].state}
              </p>
            </div>
          </div>

          <SearchForm setCoords={setCoords} />
        </div>
      </nav>
      <div className="container">
        <nav className="d-flex pt-3 main-nav">
          <Link to="/" className="me-3 p-1">
            <h5>Home</h5>
          </Link>
          <Link to="/today" className="me-3 p-1">
            <h5>Today</h5>
          </Link>
          <Link to="/daily" className="me-3 p-1">
            <h5>Daily</h5>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
