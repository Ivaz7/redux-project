import { useSelector, useDispatch } from "react-redux";
import { formatDate } from "../../../ultils/formatDate";
import { setWeatherChoice } from "../../../service/redux/slice/weatherChoiseSlice";
import { formatTemp } from "../../../ultils/formatTemp";
import { formatSpeedWind } from "../../../ultils/formatSpeed";
import { useUnits } from "../../../hooks/useUnits";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "../../../components/customSwiper";

const LaterHourInfo = (prop) => {
  const isSmallScreen = useWindowSize();
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

    const styleBtn = "buttonLaterInfo text-center d-flex flex-column align-items-center justify-content-center gap-0"

    const button = (
      <button 
        className={isSmallScreen ? styleBtn : `col-auto ${styleBtn}`} 
        key={index} 
        id={index}
        onClick={() => handleClick(index)}
      >
        <p>{formatDate(timePlace)}</p>

        <p><strong>{description}</strong></p>

        <div className="d-flex flex-row align-items-center justify-content-center gap-2">
          <img style={{margin: "0.4rem 0"}} src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />

          <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-row align-items-center gap-1">
              <p><i style={{ transform: `rotate(${wdDirec}deg)` }} className={`fa-solid fa-arrow-up arrow`}></i></p>
              <p>{formatSpeedWind(windSpeed, units)}</p>
            </div>

            <div className="d-flex flex-row align-items-center gap-1">
              <p><i className="fa-solid fa-droplet"></i></p>
              <p>{humidity}</p>
            </div>
          </div>
        </div>

        <p><strong>{formatTemp(tempAvg, units)}</strong></p>
      </button>
    )

    return isSmallScreen ? (
      <SwiperSlide key={index}>
        {button}
      </SwiperSlide>
    ) : (
      button
    )
  })

  return (
    isSmallScreen ? (
      <div style={{ width: "85vw" }} className="laterHourInfo d-flex px-2 gap-2 py-2">
        <CustomSwiper space={120} countSlide={3} slides={renderTodayWeatherList}/>
      </div>
    ) : (        
      <div className="laterHourInfo row mx-2 p-2 p-md-3 d-flex justify-content-around align-items-center gap-2 gap-md-3">
        {renderTodayWeatherList}
      </div>
    )
  )
} 

export default LaterHourInfo;