import React from "react";
import Navbar from "./Navbar";
import PageNavigation from "./PageNavigation";
const Header = ({ weather, setCoords, location }) => {
  return (
    <header>
      <Navbar weather={weather} setCoords={setCoords} location={location} />
      <PageNavigation />
    </header>
  );
};

export default Header;
