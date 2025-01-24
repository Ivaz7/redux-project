import { formatWindDirection } from "../../ultils/formatDeg";
import { formatSpeedWind } from "../../ultils/formatSpeed";
import { formatTemp } from "../../ultils/formatTemp";

const RightNowInfo = (prop) => {
  const { description, humidity, icon, tempAvg, tempFeels, tempMax, tempMin, weather, windDirection, windSpeed } = prop.rightNowWeather;

  const wdDirec = windDirection || 0;
  
  return (
    <div className="rightNowInfo d-flex flex-sm-row flex-column gap-1">
      <div className="rightNowInfo_header d-flex flex-column align-items-center text-center gap-2">
        <div className="rightNowInfo_header_top d-flex flex-row gap-1 align-items-center justify-content-center">
          <h2>{weather}</h2>
          <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        </div>

        <div className="rightNowInfo_header_bottom">
          <h5>{description}</h5>
          <h3>{tempAvg}°C | {formatTemp(tempAvg)}°F</h3>
        </div>
      </div>

      <div className="rightNowInfo_body row p-2 d-flex justify-content-center align-items-center mx-0 mx-sm-2">
        <div className="col-lg-4 col-12">
          <h4><span>Highest</span> <i className="fa-solid fa-fire"></i> {tempMax}°C | {formatTemp(tempMax)}°F</h4>
        </div>

        <div className="col-lg-4 co-12">
          <h4><span>Lowest</span> <i className="fa-solid fa-icicles"></i> {tempMin}°C | {formatTemp(tempMin)}°F</h4>
        </div>

        <div className="col-lg-4 col-12">
          <h4><span>Feels</span> <i className="fa-solid fa-user"></i> {tempFeels}°C | {formatTemp(tempFeels)}°F</h4>
        </div>

        <div className="col-lg-4 col-12">
          <h4><span>Humidity</span> <i className="fa-solid fa-droplet"></i> {humidity}%</h4>
        </div>

        <div className="col-lg-4 col-12">
          <h4><span>Wind</span> <i className="fa-solid fa-compass"></i> {formatWindDirection(windDirection)}   <i style={{ transform: `rotate(${wdDirec}deg)` }} className={`fa-solid fa-arrow-up arrow`}></i></h4>
        </div>

        <div className="col-lg-4 col-12">
          <h4><span>Wind</span> <i className="fa-solid fa-wind"></i> {formatSpeedWind(windSpeed, "kilo")} | {formatSpeedWind(windSpeed, "mile")}</h4>
        </div>
      </div>
    </div>
  )
}

export default RightNowInfo