import React, { useState, useEffect } from 'react';
import { getWeatherByCity } from '../api/weatherAPI'; 
import WeatherInfo from '../components/WeatherInfo'; 

function HomePage() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Seoul');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    getWeatherByCity(city)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('날씨 정보를 가져오는데 실패했습니다:', error);
      });
  }, [city]);

  return (
    <div>
      <h1>홈 페이지</h1>
      <select value={city} onChange={handleCityChange}>
        <option value="Seoul">서울</option>
        <option value="Busan">부산</option>
        <option value="Daegu">대구</option>
        <option value="Incheon">인천</option>
        <option value="Gwangju">광주</option>
        <option value="Daejeon">대전</option>
        <option value="Ulsan">울산</option>
        <option value="Sejong">세종</option>
        <option value="Gyeonggi-do">경기도</option>
        <option value="Gangwon-do">강원도</option>
        <option value="Chungcheongbuk-do">충청북도</option>
        <option value="Chungcheongnam-do">충청남도</option>
        <option value="Jeollabuk-do">전라북도</option>
        <option value="Jeollanam-do">전라남도</option>
        <option value="Gyeongsangbuk-do">경상북도</option>
        <option value="Gyeongsangnam-do">경상남도</option>
        <option value="Jeju-do">제주도</option>
      </select>
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
}

export default HomePage;
