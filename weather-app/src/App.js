
import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import InputForm from './components/InputForm';
import WeatherData from './components/WeatherData';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '67e1d85d55f5a37459541ca0a1977906'; 

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError('Unable to fetch weather data. Please try again.');
    }
  };

  return (
    <div className="weather-app">
      <Header />
      <InputForm onFetchWeather={fetchWeatherData} />
      {weatherData && <WeatherData weatherData={weatherData} />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default App;