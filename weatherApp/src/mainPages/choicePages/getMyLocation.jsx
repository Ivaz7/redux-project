const ButtonGetMyLocation = (prop) => {
  const handleCLick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }

          prop.triggerGetWeather({ lat: coords.lat, lon: coords.lon });
        },
        (error) => {
          alert(`You did not allow location access. (${error.message})`);
        }
      )
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  return (
    <button 
      className="buttonGetMyLocation"
      onClick={handleCLick}  
    >
      <h3>
        Get My Location
        <i className="fa-solid fa-map-location-dot"></i>
      </h3>
    </button>
  )
}

export default ButtonGetMyLocation;