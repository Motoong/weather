// src/components/CityDropdown.js
import React from 'react';

const cities = [
  'Seoul', 'Busan', 'Daegu', 'Incheon', 'Gwangju', 'Daejeon', 'Ulsan', 'Sejong', 
  'Gyeonggi-do', 'Gangwon-do', 'Chungcheongbuk-do', 'Chungcheongnam-do', 
  'Jeollabuk-do', 'Jeollanam-do', 'Gyeongsangbuk-do', 'Gyeongsangnam-do', 'Jeju-do'
];

function CityDropdown({ city, handleCityChange }) {
  return (
    <select value={city} onChange={handleCityChange}>
      {cities.map((city, index) => (
        <option key={index} value={city}>{city}</option>
      ))}
    </select>
  );
}

export default CityDropdown;
