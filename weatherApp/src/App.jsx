import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChoicePlacePages from './mainPages/choicePages/choiceWeatherPages';
import WeatherPages from './mainPages/weatherPages/weatherPages';
import HeaderEl from "./mainPages/headerEl/headerEl";

function App() {

  return (
    <>
      <Router>
        <HeaderEl />

        <main>  
          <Routes >
            <Route path="/" element={<ChoicePlacePages />} />
            <Route path="/weatherPages" element={<WeatherPages />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App;
