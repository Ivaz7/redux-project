import { useDispatch } from "react-redux";
import { formatDate } from "../../../ultils/formatDate";
import { setWeatherChoice } from '../../../service/redux/slice/weatherChoiseSlice';
import { useWeatherData } from "../../../hooks/useWeatherData";
import WeatherCard from "../../../components/weatherCard";
import { formatTemp } from "../../../ultils/formatTemp";
import { useUnits } from "../../../hooks/useUnits";

const LaterDay = (prop) => {
  const units = useUnits();

  const { data, day, hour } = useWeatherData();

  const dispatch = useDispatch();

  const { dayWeatherList } = data;

  const handleClick = (index) => {
    if (prop.mainInfoRef.current) {
      window.scrollTo({
        top: prop.mainInfoRef.current.offsetTop,
        behavior: 'smooth',
      });    
    }
    
    setTimeout(() => {
      dispatch(setWeatherChoice({ dayAct : index }));
    }, 150);
  }

  const renderLaterDayList = dayWeatherList.map((info, index) => {
    if (index === day) {
      return;
    }

    const weatherInfoList = info[hour];

    const { timePlace, tempAvg, tempFeels, icon, windDirection, windSpeed, description, humidity, weather } = weatherInfoList;
    const wdDirec = windDirection || 0;

    return (
      <button 
        key={index}
        onClick={() => handleClick(index)}
      >
        <h2>{formatDate(timePlace)}</h2>
        <div className="d-flex flex-row justify-content-around w-100 align-items-center">
          <div>
            <div className="d-flex flex-row align-items-center justify-content-center gap-1">
              <h3>{weather}</h3>
              <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
            </div>

            <h5 className="d-flex align-items-center justify-content-center">{description}</h5>

            <h6>{formatTemp(tempAvg, units)}</h6>
          </div>

          <div>
            <WeatherCard 
              label={"Humidity"}
              icon={"fa-droplet"}
              value={humidity}
              headingLevel={"h6"}
            />

            <WeatherCard 
              label={"Feels"}
              icon={"fa-user"}
              unitsStatus={"temp"}
              value={tempFeels}
              headingLevel={"h6"}
            />

            <WeatherCard 
              icon={"fa-compass"}
              value={wdDirec}
              unitsStatus={"deg"}
              rotate={windDirection}
              headingLevel={"h6"}
            />    

            <WeatherCard 
              label={"Wind"}
              icon={"fa-wind"}
              value={windSpeed}
              unitsStatus={"speed"}
              headingLevel={"h6"}
            />   
          </div>
        </div>
      </button>
    )
  })

  return (
    <section className="laterDayWeather">
      {renderLaterDayList}
    </section>
  )
}

export default LaterDay;