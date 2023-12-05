import React, { useEffect, useState } from 'react';
import { getWeatherByCity } from '../api/weatherAPI';

function HomePage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeatherByCity('Seoul')
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('날씨 정보를 가져오는데 실패했습니다:', error);
      });
  }, []);

  return (
    <div>
      <h1>홈 페이지</h1>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
