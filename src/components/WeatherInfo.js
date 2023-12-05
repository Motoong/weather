// src/components/WeatherInfo.js
import React from 'react';

function WeatherInfo({ weather }) {
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <img 
        src={
          weather.weather[0].description === 'clear sky'
            ? '/images/clear.png'
            : weather.weather[0].description === '흐림'
              ? '/images/cloudy.png'
              : '/images/default.png'
        } 
        alt="날씨 아이콘"
      />
    </div>
  );
}

export default WeatherInfo;
