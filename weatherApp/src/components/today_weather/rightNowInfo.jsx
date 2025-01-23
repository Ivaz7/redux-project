import { formatWindDirection } from "../../ultils/formatDeg";
import { formatSpeedWind } from "../../ultils/formatSpeed";
import { formatTemp } from "../../ultils/formatTemp";
import { useDirection } from "../customHooks/useDirection";

const RightNowInfo = (prop) => {
  const { description, humidity, icon, tempAvg, tempFeels, tempMax, tempMin, weather, windDirection, windSpeed } = prop.rightNowWeather;

  const windArrow = useDirection(windDirection) || { rotate: 0, direction: '' };
  
  return (
    <div className="rightNowInfo d-flex flex-row gap-2">
      <div className="rightNowInfo_header d-flex flex-column align-items-center text-center gap-2">
        <div className="rightNowInfo_header_top d-flex flex-row gap-1 align-items-center justify-content-center">
          <h2>{weather}</h2>
          <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        </div>

        <div className="rightNowInfo_header_bottom">
          <h4>{description}</h4>
          <h3>{tempAvg}°C</h3>
          <h3>{formatTemp(tempAvg)}°F</h3>
        </div>
      </div>

      <div className="rightNowInfo_body p-2">
        <h4><span>Humidity</span> <i className="fa-solid fa-droplet"></i> {humidity}%</h4>
        <h4><span>Highest</span> <i className="fa-solid fa-fire"></i> {tempMax}°C | {formatTemp(tempMax)}°F</h4>
        <h4><span>Lowest</span> <i className="fa-solid fa-icicles"></i> {tempMin}°C | {formatTemp(tempMin)}°F</h4>
        <h4><span>Feels</span> <i className="fa-solid fa-user"></i> {tempFeels}°C | {formatTemp(tempFeels)}°F</h4>
        <h4><span>Wind</span> <i className="fa-solid fa-compass"></i> {formatWindDirection(windDirection)}   <i style={{ transform: `rotate(${windArrow.rotate || 0}deg)` }} className={`fa-solid ${windArrow.direction} arrow`}></i></h4>
        <h4><span>Wind</span> <i className="fa-solid fa-wind"></i> {formatSpeedWind(windSpeed, "kilo")} | {formatSpeedWind(windSpeed, "mile")}</h4>
      </div>
    </div>
  )
}

export default RightNowInfo