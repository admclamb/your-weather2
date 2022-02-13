import React from "react";
const Settings = ({ unitOfMeasure, setUnitOfMeasure }) => {
  console.log(unitOfMeasure);
  if (!unitOfMeasure) return <h1 className="text-center">Error :(</h1>;

  const handleChange = (event) => {
    setUnitOfMeasure(event.target.value);
  };
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-9 bg-light p-4 border mt-4 ">
          <h4 className="">SETTINGS</h4>
          <form className="units d-flex justify-content-between align-items-center">
            <h6>Units</h6>
            <select value={unitOfMeasure} onChange={handleChange}>
              <option value={"imperial"}>Imperial (°F, MPH, In)</option>
              <option value={"metric"}>Imperial (°C, Km/H, Mm)</option>
            </select>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Settings;
