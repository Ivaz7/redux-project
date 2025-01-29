import MainInfoWeather from "./mainInfo";
import { formatDate } from "../../../ultils/formatDate";
import LaterHourInfo from "./laterHour";
import { useWeatherData } from "../../../hooks/useWeatherData";

const TodayWeather = (prop) => {
  const { data, hour, day } = useWeatherData();

  const { city, country, dayWeatherList } = data;

  const todayWeatherList = dayWeatherList[day || 0] || [];

  const mainInfoWeather = todayWeatherList[hour || 0] || [];

  const { timePlace } = mainInfoWeather;

  return (
    <>
      <section ref={prop.mainInfoRef} className="today d-flex flex-column p-2 p-md-3 gap-1 gap-md-3">
        <div className="today_header d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
          <div className="d-flex flex-row gap-2 align-items-center">
            <h2>{city || "Unknown Place"}</h2>
            {country && <img className="flagCountry" src={`https://flagcdn.com/${country}.svg`} alt="Country Flag" />}
          </div>

          <h2>{formatDate(timePlace)}</h2>
        </div>

        <div className="today_body">
          <MainInfoWeather mainInfoWeather={mainInfoWeather} />
        </div>  

        <div className="today_footer">
          <LaterHourInfo mainInfoRef={prop.mainInfoRef} todayWeatherList={todayWeatherList} />
        </div>
      </section>
    </>
  )
}

export default TodayWeather