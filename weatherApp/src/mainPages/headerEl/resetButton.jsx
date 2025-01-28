import { useDispatch } from "react-redux";
import { setChagePosition, setIsPosition } from "../../service/redux/slice/positionSlice";
import { useNavigate } from "react-router-dom";
import { setDataWeather } from "../../service/redux/slice/weatherDataSlice";

const ResetButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = () => {
    localStorage.removeItem("weatherData");
    dispatch(setIsPosition(false));
    dispatch(setChagePosition({ lat: "", lon: "", city: "" }));
    dispatch(setDataWeather({}));
    navigate("/", { replace: true });
  };

  return (
    <button 
      className="buttonResetLocation d-flex flex-row justify-content-center align-items-center" 
      onClick={handleReset}
    >
      <h5 className="d-flex flex-row justify-content-center aling-items-center gap-1">
        Reset
        <i className="fa-solid fa-location-dot"></i>
      </h5>
    </button>
  );
};

export default ResetButton;
