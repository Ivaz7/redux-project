import { formatSpeedWind } from "../ultils/formatSpeed";
import { formatTemp } from "../ultils/formatTemp";
import { formatWindDirection } from "../ultils/formatDeg";

const WeatherCard = (prop) => {
  const { label, icon, value, units, rotate, headingLevel = "h4" } = prop;

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

  const HeadingTag = headingLevel;
  
  return (
    <div className={headingLevel === "h4" ? "col-lg-4 col-12" : ""}>
      <HeadingTag className="d-flex flex-row align-items-center justify-content-center gap-1">
        {label && <span>{label}</span>}
        <i className={`fa-solid ${icon}`} />
        <span>{renderValue()}</span>
        {rotate && (
          <i style={{ transform: `rotate(${rotate}deg)` }} className="fa-solid fa-arrow-up arrow" />
        )}
      </HeadingTag>
    </div>
  );
};

export default WeatherCard;
