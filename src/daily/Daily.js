import { objHasProperties } from "../utils/objHasProperties";
import DayCard from "./DayCard";
import Current from "../current/Current";

const Daily = ({ weather, location }) => {
  if (!objHasProperties(weather)) return null;
  const { daily } = weather;
  const dailyArr = adily.map((day, index) => {
    return (
      <div key={index} className="border p-3 mt-3 bg-light">
        <DayCard day={day} index={index} />
      </div>
    );
  });
  return (
    <div className="container">
      <Current weather={weather} location={location} />
    </div>
  );
};

export default Daily;
