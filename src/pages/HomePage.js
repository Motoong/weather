import React, { useState, useEffect } from 'react';
import { getWeatherByCity } from '../api/weatherAPI';
import WeatherInfo from '../components/WeatherInfo';
import CityDropdown from '../components/CityDropdown';
import '../css/HomePage.css'; // CSS 파일을 import 합니다.

function HomePage() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Seoul');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    getWeatherByCity(city)
      .then(response => {
        console.log(response.data);
        setWeather(response.data);
      })
      .catch(error => {
        console.error('날씨 정보를 가져오는데 실패했습니다:', error);
      });
  }, [city]);

  return (
    <div className="home-page">
      <h1>날씨 정보</h1>
      <div className="dropdown-container">
        <CityDropdown city={city} handleCityChange={handleCityChange} />
      </div>
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
}

export default HomePage;
