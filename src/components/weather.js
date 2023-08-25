import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState({});
  const [locationValue, setLocationValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    let location = navigator.geolocation;

    let currentLocation = location.getCurrentPosition(
      successCallback,
      errorCallback
    );

    function successCallback(value) {
      let latitude = value.coords.latitude;
      let longitude = value.coords.longitude;

      let APIkey = "f1729af3aff7828bdc4bec635f80fcc0";
      let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIkey}`;

      axios.get(URL).then((respose)=>{
        setWeather(respose.data)
        console.log(respose.data)
      })

    }

    function errorCallback() {
        console.log(locationValue);
      alert(`Please Allow Location Access`);
    }
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setLocationValue(event.target.value);
          }}
        />
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </form>

      <p>{weather.name}</p>
    </div>
  );
}

export default Weather;
