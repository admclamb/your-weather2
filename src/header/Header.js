import React from "react";
import Navbar from "./Navbar";
const Header = ({ weather, setCoords, location }) => {
  return (
    <header>
      <Navbar weather={weather} setCoords={setCoords} location={location} />
    </header>
  );
};

export default Header;
