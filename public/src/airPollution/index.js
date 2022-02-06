import { useEffect, useState } from "react/cjs/react.development";
import { getAirPollution } from "../api/getAirPollution";
import { isObject } from "../helpers/isObject";
import { rotate180 } from "../helpers/rotate180";
import Spinner from "../helpers/Spinner";

const AirPollution = ({ weather }) => {
  const [airPollution, setAirPollution] = useState({});
  useEffect(() => {
    setAirPollution({});
    const abortController = new AbortController();
    if (isObject(weather)) {
      const { lat, lon } = weather.locationInfo[0];
      const coords = { lat, lon };
      getAirPollution(coords, setAirPollution, abortController.signal);
    }
    return () => {
      abortController.abort();
    };
  }, [weather]);
  if (isObject(weather) && airPollution.list) {
    const { aqi } = airPollution.list[0].main;
    const { co, no2, o3, so2 } = airPollution.list[0].components;
    let quality =
      aqi === 1 ? (
        <p className="text-success display-6">Good</p>
      ) : aqi === 2 ? (
        <p className="text-info display-6">Fair</p>
      ) : aqi === 3 ? (
        <p>Moderate</p>
      ) : aqi === 4 ? (
        <p className="text-warning display-6">Poor</p>
      ) : aqi === 5 ? (
        <p className="text-danger display-6">Very Poor</p>
      ) : (
        "Data Unavailable"
      );
    return (
      <div className="p-3 border bg-light">
        <h5>Air Quality</h5>
        <div className="p-4 text-center">{quality}</div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-between border-bottom pb-2">
              <h6>CO</h6> <p>{co}</p>
            </div>
            <div className="d-flex justify-content-between pt-2">
              <h6>NO2</h6> <p>{no2}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between border-bottom pb-2">
              <h6>O3</h6> <p>{o3}</p>
            </div>
            <div className="d-flex justify-content-between pt-2">
              <h6>SO2</h6> <p>{so2}</p>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="btn-for-dropdown d-flex">
            <button
              className="btn d-inline ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDetails"
              aria-expanded="false"
              aria-controls="collapseDetails"
              onClick={rotate180}
            >
              <i className="fas fa-chevron-down rotateOriginal"></i>
            </button>
          </div>

          <div className="collapse" id="collapseDetails">
            <div className="">
              Besides basic Air Quality Index, the API returns data about
              polluting gases, such as Carbon monoxide (CO), Nitrogen monoxide
              (NO), Nitrogen dioxide (NO2), Ozone (O3), Sulphur dioxide (SO2),
              Ammonia (NH3), and particulates (PM2.5 and PM10).
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="p-3 border">
      <Spinner />
    </div>
  );
};

export default AirPollution;
