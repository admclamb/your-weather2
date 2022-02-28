import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import "./Navbar.css";
import HamburgerMenu from "../utils/HamburgerMenu";

const Navbar = ({ setCoords, location }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container d-flex">
          <div className="navbar-brand d-flex align-items-center">
            <Link to="/" className="navbar-brand text-light">
              Weatherly
            </Link>
            <div className="text-light d-none d-sm-flex align-items">
              <p className="me-2">
                {location && location[0] && location[0].name},{" "}
                {location && location[0] && location[0].state}
              </p>
            </div>
          </div>
          <div className=" d-flex align-items-center">
            <div className="d-flex d-sm-none">
              <HamburgerMenu />
            </div>

            <div className="d-none d-sm-flex">
              <SearchForm setCoords={setCoords} />
              <Link to="/settings ms-4">
                <i className="fas fa-sliders-h fa-lg text-light mt-2 pt-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <nav className="d-flex pt-3 main-nav">
          <Link to="/" className="me-3 p-1">
            <h5>Home</h5>
          </Link>
          <Link to="/hourly" className="me-3 p-1">
            <h5>Hourly</h5>
          </Link>

          <Link to="/daily" className="me-3 p-1">
            <h5>8 Days</h5>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
