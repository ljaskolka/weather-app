import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  console.log(data)

  return (
    <div className="weather">
        
    <div className="mobile">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
        </div>
      </div>
       
      <div className="middle">
        
        <div className="left">

        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />

        <div>
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
            <p className="weather-description">{data.weather[0].description}</p>
        </div>

        </div>

        <div className="between">
          <div className="line"></div>
        </div>

        <div className="right">
            <div className="details">
             
            <div className="humidity">
                <div className="parameter-value">{data.main.humidity}%</div>
                <p className="parameter-detail">Humidity</p>
            </div>

            <div className="wind-speed">
                <div className="parameter-value">{data.wind.speed} m/s</div>
                <p className="parameter-detail">Wind speed</p>
            </div>

            <div className="pressure">
                <div className="parameter-value">{data.main.pressure} hPa</div>
                <p className="parameter-detail">Pressure</p>
            </div>

            <div className="feels-like">
                <div className="parameter-value">{Math.round(data.main.feels_like)}°C</div>
                <p className="parameter-detail">Feels like</p>
            </div>
            
            <div className="clouds">
                <div className="parameter-value">{data.clouds.all}%</div>
                <p className="parameter-detail">Clouds</p>
            </div>

            <div className="sea-level">
                <div className="parameter-value">{data.main.sea_level}m</div>
                <p className="parameter-detail">Sea level</p>
            </div>

            </div>            
            </div>
        </div>
      

        
        {/* <div className="details">
            
           
  
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
  
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div> */}
      

    
      </div>
    </div>
  );
};

export default CurrentWeather;