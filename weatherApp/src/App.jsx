import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderEl from "./components/headerEl";
import ChoicePlacePages from './mainPages/choicePages/choiceWeatherPages';
import WeatherPages from './mainPages/weatherPages/weatherPages';

function App() {

  return (
    <>
      <HeaderEl />
      <Router>
        <Routes >
          <Route path="/" element={<ChoicePlacePages />} />
          <Route path="/weatherPages" element={<WeatherPages />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
