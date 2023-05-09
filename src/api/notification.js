import axios from 'axios';

export const getWeatherNotification = async () => {
  const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/notification/weather`);
  return data;
};