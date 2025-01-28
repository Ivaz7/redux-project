import ChangeUnits from "./changeUnitsBtn";
import ResetButton from "./resetButton";

const HeaderEl = () => {
  return (
    <header className="d-flex flex-row justify-content-around p-3">
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <i className="fa-solid fa-cloud"></i>
        <h1>WeatherApp</h1>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
        <ChangeUnits />
        <ResetButton />
      </div>
    </header>
  )
}

export default HeaderEl;