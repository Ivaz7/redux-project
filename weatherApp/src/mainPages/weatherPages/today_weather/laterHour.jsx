import { useSelector, useDispatch } from "react-redux";
import { formatDate } from "../../../ultils/formatDate";
import { setWeatherChoice } from "../../../service/redux/slice/weatherChoiseSlice";
import { formatTemp } from "../../../ultils/formatTemp";
import { formatSpeedWind } from "../../../ultils/formatSpeed";
import { useUnits } from "../../../hooks/useUnits";

const LaterHourInfo = (prop) => {
  const units = useUnits();
  const hour = useSelector((state) => state.weatherChoiceSlice.hour);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (prop.mainInfoRef.current) {
      window.scrollTo({
        top: prop.mainInfoRef.current.offsetTop,
        behavior: 'smooth',
      });    
    }
    
    setTimeout(() => {
      dispatch(setWeatherChoice({ hourAct: index }))
    }, 150)
  }

  const renderTodayWeatherList = prop.todayWeatherList.map((info, index) => {
    if (index === hour) {
      return;
    }

    const { timePlace, tempAvg, icon, windDirection, windSpeed, description, humidity } = info;

    const wdDirec = windDirection || 0;

    return (
      <button 
        className="buttonLaterInfo col-auto text-center" 
        key={index} 
        id={index}
        onClick={() => handleClick(index)}
      >
        <div>{formatDate(timePlace)}</div>

        <div><strong>{description}</strong></div>

        <div className="d-flex flex-row align-items-center justify-content-center gap-2">
          <img style={{margin: "0.4rem 0"}} src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />

          <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-row align-items-center gap-1">
              <div><i style={{ transform: `rotate(${wdDirec}deg)` }} className={`fa-solid fa-arrow-up arrow`}></i></div>
              <div>{formatSpeedWind(windSpeed, units)}</div>
            </div>

            <div className="d-flex flex-row align-items-center gap-1">
              <div><i className="fa-solid fa-droplet"></i></div>
              <div>{humidity}</div>
            </div>
          </div>
        </div>

        <div><strong>{formatTemp(tempAvg, units)}</strong></div>
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