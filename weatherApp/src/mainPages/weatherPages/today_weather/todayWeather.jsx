import { useSelector } from "react-redux";
import RightNowInfo from "./rightNowInfo";
import { formatDate } from "../../../ultils/formatDate";
import LaterHourInfo from "./laterHour";
import ResetButton from "../../../components/resetButton";

const TodayWeather = () => {
  const data = useSelector((state) => state.weatherDataSlice.data);
  const hour = useSelector((state) => state.weatherChoiceSlice.hour);
  const day = useSelector((state) => state.weatherChoiceSlice.day);

  const { city, country, dayWeatherList } = data;

  console.log(data)

  const todayWeatherList = dayWeatherList[day || 0] || [];

  const rightNowWeather = todayWeatherList[hour || 0] || [];

  const { timePlace } = rightNowWeather;

  return (
    <>
      <section className="today d-flex flex-column p-3 gap-3">
        <div className="today_header d-flex flex-row justify-content-around align-items-center">
          <div className="d-flex flex-column align-items-center justify-content-center flex-md-row gap-1 gap-md-2">
            <div className="d-flex flex-row gap-2 align-items-center">
              <h2>{city || "Unknown Place"}</h2>
              {country && <img src={`https://flagcdn.com/${country}.svg`} alt="Country Flag" />}
            </div>

            <h2>{formatDate(timePlace)}</h2>
          </div>

          <ResetButton />
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