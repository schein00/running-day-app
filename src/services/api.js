import { Create, create } from 'apisauce';

const api = create({
  baseURL: 'https://api.openweathermap.org',
});

export default api;
