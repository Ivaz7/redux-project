import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../../ultils/formatDate";
import { formatTemp } from "../../../ultils/formatTemp";
import { formatWindDirection } from "../../../ultils/formatDeg";
import { formatSpeedWind } from "../../../ultils/formatSpeed";
import { setWeatherChoice } from '../../../service/redux/slice/weatherChoiseSlice';

const LaterDay = () => {
  const data = useSelector((state) => state.weatherDataSlice.data);
  const hour = useSelector((state) => state.weatherChoiceSlice.hour);
  const day = useSelector((state) => state.weatherChoiceSlice.day);
  const dispatch = useDispatch();

  const { dayWeatherList } = data;

  const renderLaterDayList = dayWeatherList.map((info, index) => {
    if (index === day) {
      return;
    }

    const weatherInfoList = info[hour];

    const { timePlace, tempAvg, tempMax, tempMin, tempFeels, icon, windDirection, windSpeed, description, humidity, weather } = weatherInfoList;
    const wdDirec = windDirection || 0;

    return (
      <button 
        className="col-auto d-flex flex-column align-items-center" 
        key={index}
        onClick={() => dispatch(setWeatherChoice({ dayAct : index }))}
      >
        <h2>{formatDate(timePlace)}</h2>
        <div className="d-flex flex-row justify-content-center align-items-center gap-1">
          <div className="left-side">
            <div className="d-flex flex-row align-items-center justify-content-center gap-1">
              <h3>{weather}</h3>
              <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
            </div>

            <h5>{description}</h5>

            <h6>{tempAvg}°C | {formatTemp(tempAvg)}°F</h6>
          </div>

          <div className="right-side">
            <h6 className="d-flex gap-1 align-items-center justify-content-center">
              Humidity
              <i className="fa-solid fa-droplet"></i>
              {humidity}%
            </h6>

            <h6><i className="fa-solid fa-fire"></i> {tempMax}°C | {formatTemp(tempMax)}°F</h6>

            <h6><i className="fa-solid fa-icicles"></i> {tempMin}°C | {formatTemp(tempMin)}°F</h6>

            <h6><i className="fa-solid fa-user"></i> {tempFeels}°C | {formatTemp(tempFeels)}°F</h6>
              
            <h6 className="d-flex flex-row justify-content-center align-items-center gap-1">
              <i className="fa-solid fa-compass"></i>
              {formatWindDirection(windDirection)}
              <i style={{ transform: `rotate(${wdDirec}deg)` }} className={`fa-solid fa-arrow-up arrow`}></i>
            </h6>

            <h6><i className="fa-solid fa-wind"></i> {formatSpeedWind(windSpeed, "kilo")} | {formatSpeedWind(windSpeed, "mile")}</h6>
          </div>
        </div>
      </button>
    )
  })

  return (
    <section className="laterDayWeather row d-flex justify-content-around p-3 mx-3 gap-3">
      {renderLaterDayList}
    </section>
  )
}

export default LaterDay;