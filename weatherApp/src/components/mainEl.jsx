import { useGetWeatherQuery } from "../service/redux/API/weatherAPI";
import TodayWeather from "./today_weather/todayWeather";
import { changeDataWeather } from "../service/redux/slice/weatherDataSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { formatDataWeather } from "../ultils/formatDataWeather";
import { Bars } from "react-loader-spinner";
import LaterDay from "./laterDay";

const MainEl = () => {
  const { data, isLoading, IsError, error } = useGetWeatherQuery({ q:"bandung"})
  const dispatch = useDispatch();
  const normalizeData = formatDataWeather(data);

  useEffect(() => {
    dispatch(changeDataWeather(normalizeData));
  }, [data, dispatch, normalizeData])
  
  if (isLoading) {
    return (
      <div className="loadingError d-flex justify-content-center align-items-center">
        <Bars color="#116466" />
      </div>
    )
  }
  
  if (IsError) {
    return (
      <div className="loadingError d-flex justify-content-center align-items-center">
        {error}
      </div>
    )
  }

  return (
    <main className="d-flex flex-column gap-2 justify-content center align-items-center">
      <TodayWeather />
      <LaterDay />
    </main>
  )
}

export default MainEl;