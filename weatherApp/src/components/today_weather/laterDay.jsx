import { formatDate } from "../../ultils/formatDate";
import { formatSpeedWind } from "../../ultils/formatSpeed";
import { formatTemp } from "../../ultils/formatTemp";
import { useDirection } from "../customHooks/useDirection";

const LaterDayInfo = (prop) => {
  const lengthArray = prop.todayWeatherList.length - 1;

  const renderTodayWeatherList = prop.todayWeatherList.map((info, index) => {
    if (index === 0) {
      return;
    }

    const { timePlace, tempAvg, icon, windDirection, windSpeed, description } = info;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const windArrow = useDirection(windDirection);

    return (
      <div className={`${index !== lengthArray ? "borderRight" : ""} d-flex flex-column align-items-center flex-fill`} key={index}>
        <div>{formatDate(timePlace)}</div>

        <div><strong>{description}</strong></div>

        <div className="d-flex flex-row align-items-center gap-2">
          <img style={{margin: "0.4rem 0"}} src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
          <div><i style={{ transform: `rotate(${windArrow.rotate}deg)` }} className={`fa-solid ${windArrow.direction} arrow`}></i></div>

          <div>
            <div>{formatSpeedWind(windSpeed, "kilo")}</div>
            <div>{formatSpeedWind(windSpeed, "mile")}</div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-around align-items-center w-100">
          <div><strong>{tempAvg}°C</strong></div>
          <div><strong>{formatTemp(tempAvg)}°F</strong></div>
        </div>
      </div>
    )
  })

  return(
    <div className="laterDayInfo d-flex flex-row align-items-center p-3 mx-2 gap-5">
      {renderTodayWeatherList}
    </div>
  )
} 

export default LaterDayInfo;