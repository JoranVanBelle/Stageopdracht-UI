import axios from '.';

export const getWeatherNotification = async () => {
  const {data} = await axios.get(`/notification/weather`);
  return data;
};