import axios from 'axios';

const API_KEY = '7316e0e0316d9b0c9a39787a0a719ea2';
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

export function getWeatherByCity(city) {
  return axios.get(`${API_ENDPOINT}?q=${city}&appid=${API_KEY}`);
}
