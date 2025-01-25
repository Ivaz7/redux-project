import { useDispatch, useSelector } from "react-redux";
import RightNowInfo from "./rightNowInfo";
import { formatDate } from "../../ultils/formatDate";
import LaterHourInfo from "./laterHour";
import { setChagePosition, setIsPosition } from "../../service/redux/slice/positionSlice";

const TodayWeather = () => {
  const data = useSelector((state) => state.weatherDataSlice.data);
  const hour = useSelector((state) => state.weatherChoiceSlice.hour);
  const day = useSelector((state) => state.weatherChoiceSlice.day);
  const dispatch =  useDispatch();

  const { city, country, dayWeatherList } = data;

  const todayWeatherList = dayWeatherList[day || 0] || [];

  const rightNowWeather = todayWeatherList[hour || 0] || [];

  const { timePlace } = rightNowWeather;

  const handleResetButton = () => {
    dispatch(setChagePosition({ lan: "", lon: "", city: "" }));
    dispatch(setIsPosition());
  }

  return (
    <>
      <section className="today d-flex flex-column p-3 gap-3">
        <div className="today_header d-flex flex-row justify-content-around align-items-center">
          <div className="d-flex flex-column align-items-center justify-content-center flex-md-row gap-1 gap-md-2">
            <div className="d-flex flex-row gap-2 align-items-center">
              <h2>{city}</h2>
              <img src={`https://flagcdn.com/${country}.svg`} alt="Country Flag" />
            </div>

            <h2>{formatDate(timePlace)}</h2>
          </div>

          <button 
            className="buttonResetLocation"
            onClick={handleResetButton}
          >
            <i className="fa-solid fa-rotate">
              <i className="fa-solid fa-location-dot"></i>
            </i>

            <p className="text-reset-button">Reset Location</p>
          </button>
        </div>

        <div className="today_body">
          <RightNowInfo rightNowWeather={rightNowWeather} />
        </div>  

        <div className="today_footer">
          <LaterHourInfo todayWeatherList={todayWeatherList} />
        </div>
      </section>
    </>
  )
}

export default TodayWeather