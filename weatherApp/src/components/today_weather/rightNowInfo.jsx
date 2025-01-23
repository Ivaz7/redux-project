import { formatWindDirection } from "../../ultils/formatDeg";
import { formatSpeedWind } from "../../ultils/formatSpeed";
import { formatTemp } from "../../ultils/formatTemp";
import { useDirection } from "../customHooks/useDirection";

const RightNowInfo = (prop) => {
  const { description, humidity, icon, tempAvg, tempFeels, tempMax, tempMin, weather, windDirection, windSpeed } = prop.rightNowWeather;

  const windArrow = useDirection(windDirection);
  
  return (
    <div className="rightNowInfo d-flex flex-row gap-2">
      <div className="rightNowInfo_header d-flex flex-column align-items-center text-center gap-2">
        <div className="rightNowInfo_header_top d-flex flex-row gap-1 align-items-center justify-content-center">
          <h2>{weather}</h2>
          <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        </div>

        <div className="rightNowInfo_header_bottom">
          <h3>{description}</h3>
          <h2>{tempAvg}°C</h2>
          <h2>{formatTemp(tempAvg)}°F</h2>
        </div>
      </div>

      <div className="rightNowInfo_body">
        <h3><span>Humidity</span> <i className="fa-solid fa-droplet"></i> {humidity}%</h3>
        <h3><span>Highest</span> <i className="fa-solid fa-fire"></i> {tempMax}°C | {formatTemp(tempMax)}°F</h3>
        <h3><span>Lowest</span> <i className="fa-solid fa-icicles"></i> {tempMin}°C | {formatTemp(tempMin)}°F</h3>
        <h3><span>Feels</span> <i className="fa-solid fa-user"></i> {tempFeels}°C | {formatTemp(tempFeels)}°F</h3>
        <h3><span>Wind</span> <i className="fa-solid fa-compass"></i> {formatWindDirection(windDirection)}   <i style={{ transform: `rotate(${windArrow.rotate}deg)` }} className={`fa-solid ${windArrow.direction} arrow`}></i></h3>
        <h3><span>Wind</span> <i className="fa-solid fa-wind"></i> {formatSpeedWind(windSpeed, "kilo")} | {formatSpeedWind(windSpeed, "mile")}</h3>
      </div>
    </div>
  )
}

export default RightNowInfo