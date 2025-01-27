import { useDispatch } from "react-redux";
import { setChagePosition, setIsPosition } from "../service/redux/slice/positionSlice";
import { useNavigate } from "react-router-dom";
import { setDataWeather } from "../service/redux/slice/weatherDataSlice";

const ResetButton = ( prop ) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = () => {
    dispatch(setIsPosition(false));
    dispatch(setChagePosition({ lat: "", lon: "", city: "" }));
    dispatch(setDataWeather({}));
    
    if (prop.resetQuery) prop.resetQuery(); 

    navigate("/", { replace: true });
  };

  return (
    <button className="buttonResetLocation" onClick={handleReset}>
      <i className="fa-solid fa-rotate">
        <i className="fa-solid fa-location-dot"></i>
      </i>
      <p className="text-reset-button">Reset Location</p>
    </button>
  );
};

export default ResetButton;
