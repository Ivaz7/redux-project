import { useDispatch } from "react-redux";
import { setChagePosition } from "../../service/redux/slice/positionSlice";

const FormInputUser = (prop) => {
  const { city, latitude, longitude } = prop.position;
  const dispatch = useDispatch();
  
  const isCityFilled = city !== "";
  const isLatLonFilled = latitude || longitude;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city") dispatch(setChagePosition({ city: value || "" }));
    if (name === "lat") dispatch(setChagePosition({ lat: value || "" }));
    if (name === "lon") dispatch(setChagePosition({ lon: value || "" }));
  };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(setChagePosition({ lat: "", lon: "", city: "" }))
  }
  
  return (
    <form onSubmit={prop.changePlace} className="inputUser d-flex flex-column align-items-center justfiy-content-center gap-2 p-3">
      <h5>Type Your Location</h5>

      <input
        type="text"
        placeholder={isLatLonFilled ? "You selected Coordinate" : "Provide City Name"}
        name="city"
        value={city}
        onChange={handleChange}
        disabled={isLatLonFilled} 
      />

      <h6>Or</h6>

      <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center align-items-center">
        <input
          type="text"
          placeholder={isCityFilled ? "City is selected" : "Provide Latitude"}
          name="lat"
          value={latitude}
          onChange={handleChange}
          disabled={isCityFilled} 
        />
        <input
          type="text"
          placeholder={isCityFilled ? "City is selected" : "Provide Longitude"}
          name="lon"
          value={longitude}
          onChange={handleChange}
          disabled={isCityFilled} 
        />
      </div>

      <div className="d-flex gap-2">
        <button type="submit">Submit</button>

        <button 
          onClick={handleClear}
        >clear</button>
      </div>

    </form>
  )
}

export default FormInputUser;