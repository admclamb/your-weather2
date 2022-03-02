import { Link } from "react-router-dom";

const PageNavigation = () => {
  return (
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
  );
};

export default PageNavigation;
