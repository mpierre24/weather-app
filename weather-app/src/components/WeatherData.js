import React from 'react';

function WeatherData({ weatherData }) {
  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherData;