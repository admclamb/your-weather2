import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCoordsFromPlace } from "../api/getCoordsFromPlace";
import "./SearchForm.css";

const SearchForm = ({ setCoords }) => {
  const [city, setCity] = useState("");
  const handleChange = ({ target }) => {
    setCity(target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { lat, lon } = await getCoordsFromPlace(city);
    setCity("");
    if (lat && lon) {
      setCoords({ lat, lon });
    }
  };

  return (
    <form className="d-flex input-group w-auto searchbar">
      <button
        className="input-group-text border-0 search-icon"
        id="search-addon"
        onClick={handleSubmit}
        type="submit"
      >
        <i className="fas fa-search"></i>
      </button>
      <input
        type="search"
        className="form-control searchbar-search me-3 rounded-right"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={city}
        onChange={handleChange}
      />
      <Link to="/settings">
        <i className="fas fa-sliders-h fa-lg text-light mt-2 pt-1"></i>
      </Link>
    </form>
  );
};

export default SearchForm;