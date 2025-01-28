import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLazyGetWeatherQuery } from "../../service/redux/API/weatherAPI";
import { setDataWeather } from "../../service/redux/slice/weatherDataSlice";
import { formatDataWeather } from "../../ultils/formatDataWeather";
import { setIsPosition } from "../../service/redux/slice/positionSlice";
import { useNavigate } from "react-router-dom";
import ResetButton from "../headerEl/resetButton";
import FormInputUser from "./formInputUser";
import FamousCity from "./famousCity";
import ButtonGetMyLocation from "./getMyLocation";

const ChoicePlacePages = () => {
  const position = useSelector((state) => state.positionSlice);
  const { latitude, longitude, city } = position;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [triggerGetWeather, { data, isLoading, isError, error, reset }] = useLazyGetWeatherQuery();

  const changePlace = (e) => {
    e.preventDefault();
    if (!latitude && longitude || !longitude && latitude) {
      alert("Please provide both latitude and longitude.");
      return;
    }
    triggerGetWeather({ q: city, lat: Number(latitude), lon: Number(longitude) });
  };

  useEffect(() => {
    if (data) {
      dispatch(setIsPosition(true));
      const normalizedData = formatDataWeather(data);
      dispatch(setDataWeather(normalizedData));
      navigate("/weatherPages");
    }
  }, [data, dispatch, navigate]);

  if (isLoading) {
    return (
      <div className="loadingError d-flex justify-content-center align-items-center">
        <Bars color="#116466" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="loadingError d-flex justify-content-center align-items-center gap-2">
        <h1>
          {error?.message || "Something went wrong!"}
        </h1>

        <ResetButton resetQuery={reset} />
      </div>
    );
  }

  return (
    <section className="choiceLocation p-2 d-flex flex-column gap-3 justify-content-center align-items-center text-center">
      <h2>Find Out the Weather in Your Desired Location</h2>

      <ButtonGetMyLocation 
        triggerGetWeather={triggerGetWeather}
      />

      <FormInputUser 
        position={position}
        changePlace={changePlace}
      />

      <FamousCity 
        changePlace={changePlace}
        triggerGetWeather={triggerGetWeather}
      />
    </section>
  );
};

export default ChoicePlacePages;
