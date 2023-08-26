import React, { useState } from "react";
import axios from "axios";


function Weather() {
  const [weather, setWeather] = useState([]);
  const [locationValue, setLocationValue] = useState("");



  let APIkey = "f1729af3aff7828bdc4bec635f80fcc0";

  function handleSubmit(event) {
    event.preventDefault()
    console.log(locationValue);

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&units=imperial&appid=${APIkey}`

    axios.get(URL).then((response) => {
      setWeather(response.data)

      console.log(response.data)
    }).catch((error) => {
      alert("Enter Correct City Name")
    })

  }

  function handleDetect(event) {
    event.preventDefault();

    let location = navigator.geolocation;

    let currentLocation = location.getCurrentPosition(
      successCallback,
      errorCallback
    );

    function successCallback(value) {
      let latitude = value.coords.latitude;
      let longitude = value.coords.longitude;


      let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIkey}`;

      axios.get(URL).then((response) => {
        setWeather(response.data)
        console.log(response.data)
      })

    }

    function errorCallback() {

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

        <button onClick={handleDetect} type="submit">
          Detect
        </button>
      </form>

      <div className="data">

        {weather.length === 0 ?
          <div>
            <h3>No Weather Data Available</h3>
            <h4>To Detect Automatically Press Location</h4>
            <h4>To Detect Manually Detect Enter City Name</h4>
          </div> :
          <div>
            <p>Your Location: {weather.name}, {weather.sys.country}</p>
            <p>Current Weather: {weather.weather[0].main}</p>
          </div>}
      </div>

    </div>
  );
}

export default Weather;
