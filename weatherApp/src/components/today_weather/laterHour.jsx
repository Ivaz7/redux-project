import { useSelector, useDispatch } from "react-redux";
import { formatDate } from "../../ultils/formatDate";
import { formatSpeedWind } from "../../ultils/formatSpeed";
import { formatTemp } from "../../ultils/formatTemp";
import { changeWeatherChoice } from "../../service/redux/slice/weatherChoiseSlice";

const LaterHourInfo = (prop) => {
  const hour = useSelector((state) => state.weatherChoiceSlice.hour);
  const dispatch = useDispatch();

  const renderTodayWeatherList = prop.todayWeatherList.map((info, index) => {
    if (index === hour) {
      return;
    }

    const { timePlace, tempAvg, icon, windDirection, windSpeed, description } = info;

    const wdDirec = windDirection || 0;

    return (
      <button 
        className="buttonLaterInfo col-auto text-center" 
        key={index} 
        id={index}
        onClick={() => dispatch(changeWeatherChoice({ hourAct: index }))}
      >
        <div>{formatDate(timePlace)}</div>

        <div><strong>{description}</strong></div>

        <div className="d-flex flex-row align-items-center gap-2">
          <img style={{margin: "0.4rem 0"}} src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
          <div><i style={{ transform: `rotate(${wdDirec}deg)` }} className={`fa-solid fa-arrow-up arrow`}></i></div>

          <div>
            <div>{formatSpeedWind(windSpeed, "kilo")}</div>
            <div>{formatSpeedWind(windSpeed, "mile")}</div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-around align-items-center w-100">
          <div><strong>{tempAvg}°C</strong></div>
          <div><strong>{formatTemp(tempAvg)}°F</strong></div>
        </div>
      </button>
    )
  })

  return(
    <div className="laterHourInfo row mx-2 p-3 d-flex justify-content-around align-items-center gap-3">
      {renderTodayWeatherList}
    </div>
  )
} 

export default LaterHourInfo;