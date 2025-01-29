import { useEffect, useState } from 'react';
import { famousCity } from '../../data/famousCity';
import { Carousel } from 'react-bootstrap';

const FamousCity = (prop) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 550);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 420);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (cityName) => {
    prop.triggerGetWeather({ q: cityName });
  };

  const renderFamousCity = famousCity.map((city, index) => {
    const FlagUrl = `https://flagcdn.com/${city.countryCode.toLowerCase()}.svg`;

    const button = (
      <button
        style={{ backgroundImage: `url(${FlagUrl})` }}
        className="col-4 col-sm-3 p-2 d-flex flex-column justify-content-center align-items-center"
        onClick={() => handleClick(city.name)}
      >
        <div className="d-flex flex-column gap-1 gap-md-2 align-items-center">
          <h5>{city.name}</h5>
          <h6>{city.country}</h6>
        </div>
      </button>
    )

    return isSmallScreen ? (
      <Carousel.Item key={index}>
        {button}
      </Carousel.Item>
    ) : (
      button
    );
  });

  return (
    <div className="famousCity gap-md-2 gap-1 d-flex flex-column justify-content-center align-items-center text-center">
      <h4>Choose Famous City</h4>

      <div className="row d-flex flex-row gap-md-2 gap-1 justify-content-center align-items-center text-center p-2 w-100">
        {isSmallScreen ? (
          <Carousel pause="hover">{renderFamousCity}</Carousel>
        ) : (
          <div className="d-flex flex-wrap justify-content-center gap-2">{renderFamousCity}</div>
        )}
      </div>
    </div>
  );
};

export default FamousCity;
