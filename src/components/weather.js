import React, { useRef, useState } from "react";
import axios from "axios";

//icons
import SearchIcon from "@mui/icons-material/Search";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

function Weather() {
  const [weather, setWeather] = useState([]);

  const [locationValue, setLocationValue] = useState("");

 

  let APIkey = "f1729af3aff7828bdc4bec635f80fcc0";

  function handleSubmit(event) {
    event.preventDefault();
    

    if (locationValue) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&units=metric&appid=${APIkey}`;

      axios
        .get(URL)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          alert("Enter Correct City Name");
        });

    }
    else if (weather.name) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${weather.name}&units=metric&appid=${APIkey}`;

      axios
        .get(URL)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          
          alert("Enter Correct City Name");
        });

    }





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

        setWeather(response.data);
        console.warn(response.data)
        

      });
    }

    function errorCallback() {
      alert(`Please Allow Location Access`);
    }

  }

  return (
    <div className="container">
      <h1>Weatherly</h1>
      <hr />
      <form >
        <input
          className="inputBox"
          type="text"
          placeholder="City"
          defaultValue={weather.name}
          
          onChange={(event) => {
            setLocationValue(event.target.value);
          }}
        />
        <button className="btn-common" onClick={handleSubmit} type="submit">
          <SearchIcon />
        </button>

        <button className="btn-common" onClick={handleDetect} type="submit">
          <NearMeRoundedIcon />
        </button>
      </form>

      <div className="data">
        {weather.length === 0 ? (
          <div className="initailWrapper">
            <div className="icon">
              <TravelExploreIcon />
            </div>

            <div className="Text">
              <p>No Weather Data Available</p>
              <p>To Detect Automatically Press Location</p>
              <p>To Detect Manually Enter City Name</p>
            </div>
          </div>
        ) : (
          <div className="Text">
            <div className="imageHolder">
              <img alt="icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
              <p>{Math.round(weather.main.temp)}
                &deg;C</p>
            </div>
        

            <div className="info">
              <label>Feels Like</label>
              <p>{Math.round(weather.main.feels_like)}
                &deg;C</p>
            </div>

            <div className="info">
              <label>Your Location</label>
              <p>{weather.name}, {weather.sys.country}</p>
            </div>


            <div className="info">
              <label>Current Weather</label>
              <p>{weather.weather[0].main}</p>
            </div>

            <div className="info">
              <label>Wind Speed</label>
              <p>{weather.wind.speed}km/hr</p>
            </div>
          </div>
        )}
      </div>

      <div className="social">
        <div className="icons">
          <a
            target="_blank"
            rel="noreferrer"
            className="icon"
            href="https://www.linkedin.com/in/jshnsaini/"
          >
            <LinkedInIcon />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="icon"
            href="https://github.com/jshn16"
          >
            <GitHubIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="icon"
            href="https://www.instagram.com/jshnsaini/"
          >
            <InstagramIcon />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="icon"
            href="https://www.jshnsaini.ca/"
          >
            <LanguageRoundedIcon />
          </a>
        </div>

        <div>
          <i>&copy; 2023 jshnsaini</i>
        </div>
      </div>
    </div>
  );
}

export default Weather;
