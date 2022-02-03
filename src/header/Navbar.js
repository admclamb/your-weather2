import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import "./Navbar.css";

const Navbar = ({ setLocation, weather, tempConv }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex align-items-center">
            <a className="navbar-brand">Weatherly</a>
            <div className="text-light d-flex ">
              <p className="me-2"></p>
              <p></p>
            </div>
          </div>

          <SearchForm setLocation={setLocation} />
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
