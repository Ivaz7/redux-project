import { useSelector } from "react-redux";
import RightNowInfo from "./rightNowInfo";
import { formatDate } from "../../ultils/formatDate";

const TodayWeather = () => {
  const data = useSelector((state) => state.weatherDataSlice.data);

  const { city, country, dayWeatherList } = data;

  const todayWeatherList = dayWeatherList[0] || [];

  const rightNowWeather = todayWeatherList[0] || [];

  const { timePlace } = rightNowWeather;

  return (
    <>
      <section className="today d-flex flex-column p-3 gap-3">
        <div className="today_header d-flex flex-row justify-content-around">
          <div className="d-flex flex-row gap-2 align-items-center">
            <h2>{city}</h2>
            <img src={`https://flagcdn.com/${country}.svg`} alt="Country Flag" />
          </div>

          <h2>{formatDate(timePlace)}</h2>
        </div>

        <div className="today_body">
          <RightNowInfo rightNowWeather={rightNowWeather} />
        </div>  

        <div className="today_footer">

        </div>
      </section>
    </>
  )
}

export default TodayWeather