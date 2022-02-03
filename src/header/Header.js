import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header>
      <Navbar weather={weather} />
    </header>
  );
};

export default Header;
