import React from "react";
import ErrorAlert from "../errors/ErrorAlert";
import Navbar from "./Navbar";
import PageNavigation from "./PageNavigation";
const Header = ({ weather, setCoords, location, errors }) => {
  return (
    <header>
      <ErrorAlert errors={errors} />
      <Navbar weather={weather} setCoords={setCoords} location={location} />
      <PageNavigation />
    </header>
  );
};

export default Header;
