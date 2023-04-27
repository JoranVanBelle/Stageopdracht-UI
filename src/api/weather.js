import axios from 'axios';
import {WEATHER_DATA} from "../api/mock-weather";
import {LOCATION_DATA} from "../api/mock-locations";

const baseUrl = `http://localhost:1083/weather`;

export const getAll = async () => {
  // const {data} = await axios.get(baseUrl);
  const data = WEATHER_DATA;
  return data;
  // return data.items;
};

export const getLocation = async () => {
  // const response = await axios.get(baseUrl+"/locations")
  const response = LOCATION_DATA;
  console.log(response)
}