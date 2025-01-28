import { famousCity } from '../../data/famousCity';

const FamousCity = (prop) => {
  const handleClick = (cityName) => {
    prop.triggerGetWeather({ q: cityName });
  }

  const renderFamousCity = famousCity.map((city, index) => {
    const FlagUrl = `https://flagcdn.com/${city.countryCode.toLowerCase()}.svg`;

    return (
      <button 
        key={index}
        style={{backgroundImage: `url(${FlagUrl})`}}
        className='col-4 col-sm-3 p-2 d-flex flex-column justify-content-center align-items-center'
        onClick={() => handleClick(city.name)}
      >
        <h5>{city.name}</h5>
        <h6>{city.country}</h6>
      </button>
    )
  })

  return (
    <div className="famousCity gap-1 d-flex flex-column justify-content-center align-items-center text-center">
      <h4>Choose Famous City</h4>

      <div className='row d-flex flex-row gap-2 justify-content-center align-items-center text-center p-2 w-100'>
        {renderFamousCity}
      </div>
    </div>
  )
}

export default FamousCity;