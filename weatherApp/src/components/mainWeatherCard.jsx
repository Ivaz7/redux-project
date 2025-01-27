import { formatSpeedWind } from "../ultils/formatSpeed";
import { formatTemp } from "../ultils/formatTemp";
import { formatWindDirection } from "../ultils/formatDeg";

const MainWeatherCard = (prop) => {
  const { label, icon, value, units, rotate } = prop;

  const renderValue = () => {
    switch (units) {
      case "°C":
        return `${value}${units} | ${formatTemp(value)}°F`;
      case "%":
        return `${value}${units}`;
      case "kp/h":
        return `${formatSpeedWind(value, "kilo")} | ${formatSpeedWind(value, "mile")}`;
      default:
        return formatWindDirection(value);
    }
  };

  return (
    <div className="col-lg-4 col-12">
      <h4 className="d-flex flex-row align-items-center justify-content-center gap-1">
        <span>{label}</span>
        <i className={`fa-solid ${icon}`} />
        <span>{renderValue()}</span>
        {rotate && (
          <i style={{ transform: `rotate(${rotate}deg)` }} className="fa-solid fa-arrow-up arrow" />
        )}
      </h4>
    </div>
  );
};

export default MainWeatherCard;
