import * as weatherApi from "../api/weather";
import { useEffect, useState, createContext, useMemo, useCallback } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(sessionStorage.getItem('currentWeather'));

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await weatherApi.getAll();
      setWeatherData(data)
    };
    fetchWeather();
  }, []);

  const updateCurrentWeather = useCallback((current) => {
    setCurrentWeather(current);
    sessionStorage.setItem('currentWeather', current);
  }, [setCurrentWeather]);
  
  const value = useMemo (()=> ({weatherData, currentWeather, updateCurrentWeather}), [weatherData, currentWeather, updateCurrentWeather]);

  return (
    <WeatherContext.Provider value={value}>
        {children}
    </WeatherContext.Provider>
  );
};