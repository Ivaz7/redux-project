import { useDispatch } from "react-redux";
import { setUnits } from "../../service/redux/slice/unitsSlice";
import { useUnits } from "../../hooks/useUnits";

const ChangeUnits = () => {
  const dispatch = useDispatch();
  const units = useUnits();

  const handleClick = () => {
    dispatch(setUnits());
  };

  return (
    <button 
      className="changeUnitsBtn d-flex flex-row justify-content-center align-items-center"
      onClick={() => handleClick()}
    >
      <h5 className="d-flex flex-row justify-content-center aling-items-center gap-1">
        {units}
        <i className="fa-solid fa-ruler"></i>
      </h5>
    </button>
  )
}

export default ChangeUnits;