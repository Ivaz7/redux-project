import { famousCity } from '../../data/famousCity';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useWindowSize } from '../../hooks/useWindowSize';
import CustomSwiper from '../../components/customSwiper';

const FamousCity = (prop) => {
  const isSmallScreen = useWindowSize();

  const handleClick = (cityName) => {
    prop.triggerGetWeather({ q: cityName });
  }

  const renderFamousCity = famousCity.map((city, index) => {
    const FlagUrl = `https://flagcdn.com/${city.countryCode.toLowerCase()}.svg`;

    const btnStyle = 'p-2 d-flex flex-column justify-content-center align-items-center';

    const button = (
      <button 
        key={index}
        style={{backgroundImage: `url(${FlagUrl})`}}
        className={isSmallScreen ? btnStyle : `col-4 col-sm-3 ${btnStyle}`}
        onClick={() => handleClick(city.name)}
      >
        <div className='d-flex flex-column gap-1 gap-md-2 align-items-center'>
          <h5>{city.name}</h5>
          <h6>{city.country}</h6>
        </div>
      </button>
    )

    return isSmallScreen ? (
      <SwiperSlide key={index} >
        {button}
      </SwiperSlide>
    ) : (
      button
    )
  })

  return (
    <div className="famousCity gap-md-2 gap-1 d-flex flex-column justify-content-center align-items-center text-center">
      <h4>Choose Famous City</h4>

      {isSmallScreen 
        ? 
        <div style={{ width: "100vw"}} className='px-4 d-flex justify-content-center gap-2'>
          <CustomSwiper countSlide={4} space={95} slides={renderFamousCity}/>
        </div>
        :
        <div className='row d-flex flex-row gap-md-2 gap-1 justify-content-center align-items-center text-center p-2 w-100'>
          {renderFamousCity}
        </div>
      }
    </div>
  )
}

export default FamousCity;
