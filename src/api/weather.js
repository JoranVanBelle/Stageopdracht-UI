import axios from 'axios';
import {WEATHER_DATA} from "../api/mock-weather";
import {LOCATION_DATA} from "../api/mock-locations";

export const getAll = async () => {
  const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/weather`);
  // const data = WEATHER_DATA;
  return data;
  // return data.items;
};