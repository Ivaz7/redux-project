import { useDispatch } from "react-redux";
import { formatDate } from "../../../ultils/formatDate";
import { formatTemp } from "../../../ultils/formatTemp";
import { setWeatherChoice } from '../../../service/redux/slice/weatherChoiseSlice';
import { useWeatherData } from "../../../hooks/useWeatherData";
import WeatherCard from "../../../components/weatherCard";

const LaterDay = () => {
  const { data, day, hour } = useWeatherData();

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
            <WeatherCard 
              label={"Humidity"}
              icon={"fa-droplet"}
              units={"%"}
              value={humidity}
              headingLevel={"h6"}
            />

            <WeatherCard 
              icon={"fa-fire"}
              units={"°C"}
              value={tempMax}
              headingLevel={"h6"}
            />

            <WeatherCard 
              icon={"fa-icicles"}
              units={"°C"}
              value={tempMin}
              headingLevel={"h6"}
            />

            <WeatherCard 
              icon={"fa-user"}
              units={"°C"}
              value={tempFeels}
              headingLevel={"h6"}
            />

            <WeatherCard 
              icon={"fa-compass"}
              value={wdDirec}
              units={""}
              rotate={windDirection}
              headingLevel={"h6"}
            />    

            <WeatherCard 
              icon={"fa-wind"}
              value={windSpeed}
              units={"kp/h"}
              headingLevel={"h6"}
            />   
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