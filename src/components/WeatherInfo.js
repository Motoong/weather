import React from 'react';

function WeatherInfo({ weather }) {
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  return (
    <div className="container">
      <h2>{weather.name}</h2>
      <img src={iconUrl} alt={weather.weather[0].main} />
      <p>{weather.weather[0].main}</p>
      <div className="row">
        <p>기온: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
        <p>체감 온도: {(weather.main.feels_like - 273.15).toFixed(2)}°C</p>
      </div>
      <div className="row">
        <p>최저 : {(weather.main.temp_min - 273.15).toFixed(2)}°C</p>
        <p>최고 : {(weather.main.temp_max - 273.15).toFixed(2)}°C</p>
      </div>

      <div className="row">
        <p>바람 속도: {weather.wind.speed.toFixed(2)}m/s</p>
        <p>바람 방향: {weather.wind.deg}°</p>
      </div>
      <p>습도: {weather.main.humidity}%</p>
      <p>구름 양: {weather.clouds.all}%</p>
      <p>가시거리: {weather.visibility}m</p>
    </div>
  );
}

export default WeatherInfo;
