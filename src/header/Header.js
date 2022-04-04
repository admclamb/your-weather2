import React from "react";
import ErrorAlert from "../errors/ErrorAlert";
import Navbar from "./Navbar";
import PageNavigation from "./PageNavigation";
const Header = ({ weather, setCoords, location, error }) => {
  return (
    <header>
      <ErrorAlert errors={error} />
      <Navbar weather={weather} setCoords={setCoords} location={location} />
      <PageNavigation />
    </header>
  );
};

export default Header;
