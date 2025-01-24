import TodayWeather from "./today_weather/todayWeather";
import { useSelector } from "react-redux";
import LaterDay from "./laterDay";
import ChoicePlace from "./choicePlace";

const MainEl = () => {
  const isPosition = useSelector((state) => state.positionSlice.isPosition);  

  return (
    <main className="d-flex flex-column gap-2 justify-content center align-items-center">
      { isPosition 
          ? <>
              <TodayWeather />
              <LaterDay />
            </>
          : <ChoicePlace />
      }
    </main>
  )
}

export default MainEl;