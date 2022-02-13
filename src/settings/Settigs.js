import React from "react";
import { useNavigate } from "react-router-dom";
const Settings = ({ unitOfMeasure, setUnitOfMeasure }) => {
  const navigate = useNavigate();
  if (!unitOfMeasure) return <h1 className="text-center">Error :(</h1>;

  const handleChange = (event) => {
    setUnitOfMeasure(event.target.value);
    navigate("/");
  };
  return (
    <section className="container mb-3">
      <div className="row">
        <div className="col-12 col-md-9 bg-light p-4 border mt-4 ">
          <header className="d-flex align-items-center">
            <h4 className="">SETTINGS</h4>
            <p className="ms-auto" onClick={() => navigate(-1)}>
              &larr; Go back
            </p>
          </header>

          <form className="units d-flex justify-content-between align-items-center border-bottom pb-2 pt-2 d-flex flex-column">
            <p className="me-auto mb-2 mt-3">Unit of measurement</p>
            <select
              value={unitOfMeasure}
              onChange={handleChange}
              className="form-select"
              aria-label="Unit of measurement"
              id="unit-select"
            >
              <option value={"imperial"}>Imperial (°F, MPH, In)</option>
              <option value={"metric"}>Metric (°C, Km/H, Mm)</option>
            </select>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Settings;
