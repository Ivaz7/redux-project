import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderEl from "./components/headerEl";
import ChoicePlacePages from './mainPages/choicePages/choiceWeatherPages';
import WeatherPages from './mainPages/weatherPages/weatherPages';

function App() {

  return (
    <>
      <HeaderEl />
      <main>  
        <Router>
          <Routes >
            <Route path="/" element={<ChoicePlacePages />} />
            <Route path="/weatherPages" element={<WeatherPages />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App;
