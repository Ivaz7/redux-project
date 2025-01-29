import { formatWindDirection } from "../ultils/formatDeg";
import { formatTemp } from "../ultils/formatTemp";
import { formatSpeedWind } from "../ultils/formatSpeed";
import { useUnits } from "../hooks/useUnits";
import { formatPress } from "../ultils/formatPress";

const WeatherCard = (prop) => {
  const units = useUnits();
  const { label, icon, value, rotate, unitsStatus, headingLevel } = prop;

  const HeadingTag = headingLevel;

  const renderValue = () => {
    switch (unitsStatus) {
      case "temp":
        return formatTemp(value, units);
      case "deg":
        return formatWindDirection(value, units);
      case "speed":
        return formatSpeedWind(value, units);
      case "press":
        return formatPress(value, units);
      default:
        return value;
    }
    
  }
  
  return (
    <div className={headingLevel === "h4" ? "col-lg-3 col-12" : ""}>
      <HeadingTag className="d-flex flex-row align-items-center justify-content-center gap-1">
        {label && <span>{label}</span>}
        <i className={`fa-solid ${icon}`} />
        {renderValue()}
        {rotate && (
          <i style={{ transform: `rotate(${rotate}deg)` }} className="fa-solid fa-arrow-up arrow" />
        )}
      </HeadingTag>
    </div>
  );
};

export default WeatherCard;
