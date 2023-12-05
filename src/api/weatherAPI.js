import axios from 'axios';

const API_KEY = '발급받은 API 키';
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

export function getWeatherByCity(city) {
  return axios.get(`${API_ENDPOINT}?q=${city}&appid=${API_KEY}`);
}
