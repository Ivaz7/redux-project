import MainInfoWeather from "./mainInfo";
import { formatDate } from "../../../ultils/formatDate";
import LaterHourInfo from "./laterHour";
import ResetButton from "../../../components/resetButton";
import { useWeatherData } from "../../../hooks/useWeatherData";
import ChangeUnits from "../../../components/changeUnitsBtn";

const TodayWeather = () => {
  const { data, hour, day } = useWeatherData();

  const { city, country, dayWeatherList } = data;

  const todayWeatherList = dayWeatherList[day || 0] || [];

  const mainInfoWeather = todayWeatherList[hour || 0] || [];

  const { timePlace } = mainInfoWeather;

  return (
    <>
      <section className="today d-flex flex-column p-3 gap-3">
        <div className="today_header d-flex flex-row justify-content-around align-items-center">
          <div className="d-flex flex-column align-items-center justify-content-center flex-md-row gap-1 gap-md-2">
            <div className="d-flex flex-row gap-2 align-items-center">
              <h2>{city || "Unknown Place"}</h2>
              {country && <img className="flagCountry" src={`https://flagcdn.com/${country}.svg`} alt="Country Flag" />}
            </div>

            <h2>{formatDate(timePlace)}</h2>
          </div>

          <ChangeUnits />

          <ResetButton />
        </div>

        <div className="today_body">
          <MainInfoWeather mainInfoWeather={mainInfoWeather} />
        </div>  

        <div className="today_footer">
          <LaterHourInfo todayWeatherList={todayWeatherList} />
        </div>
      </section>
    </>
  )
}

export default TodayWeather