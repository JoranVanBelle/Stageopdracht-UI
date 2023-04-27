import * as weatherApi from "../api/weather";
import { useEffect, useState, createContext, useMemo } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await weatherApi.getAll();
      setWeatherData(data)
    };
    fetchWeather();
  }, []);
  
  const value = useMemo (()=> ({ weatherData}), [weatherData]);

  return (
    <WeatherContext.Provider value={value}>
        {children}
    </WeatherContext.Provider>
  );
};