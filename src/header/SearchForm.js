import React, { useState } from "react";
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
  console.log(city);
  return (
    <form className="d-flex input-group searchbar">
      <button
        className="input-group-text border-0 search-icon bg-dark text-light"
        id="search-addon"
        onClick={handleSubmit}
        type="submit"
      >
        <i className="fas fa-search"></i>
      </button>
      <input
        type="search"
        className="form-control searchbar-search me-3 rounded-right"
        placeholder="Search City"
        aria-label="Search"
        aria-describedby="search-addon"
        value={city}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
