import { useDispatch } from "react-redux";
import { setUnits } from "../service/redux/slice/unitsSlice";

const ChangeUnits = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUnits());
  };

  return (
    <button onClick={() => handleClick()}>
      °C || °F
    </button>
  )
}

export default ChangeUnits;