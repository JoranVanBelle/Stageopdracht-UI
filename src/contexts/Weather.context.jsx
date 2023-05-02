import * as weatherApi from "../api/weather";
import { useEffect, useState, createContext, useMemo, useCallback } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(sessionStorage.getItem('currentWeather'));
  const [currentIndex, setCurrentIndex] = useState(sessionStorage.getItem("currentIndex"))

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
    sessionStorage.setItem('currentLocation', current.location);
  }, [setCurrentWeather]);
  
  const updateCurrentIndex = useCallback((currentIndex) => {
    setCurrentIndex(currentIndex);
    sessionStorage.setItem("currentIndex", currentIndex);
  }, [setCurrentIndex])

  const value = useMemo (()=> ({weatherData, currentWeather, updateCurrentWeather, currentIndex, updateCurrentIndex}), [weatherData, currentWeather, updateCurrentWeather, currentIndex, updateCurrentIndex]);

  return (
    <WeatherContext.Provider value={value}>
        {children}
    </WeatherContext.Provider>
  );
};