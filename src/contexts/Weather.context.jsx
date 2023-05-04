import * as weatherApi from "../api/weather";
import { useEffect, useState, createContext, useMemo, useCallback } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(sessionStorage.getItem('currentWeather'));
  const [currentIndex, setCurrentIndex] = useState(sessionStorage.getItem("currentIndex"));
  const [currentLocation, setCurrentLocation] = useState(sessionStorage.getItem("currentLocation"));

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await weatherApi.getAll();
      setWeatherData(data);
      sessionStorage.setItem("weatherData", data);
    };
    fetchWeather();
  }, []);

  const updateWeatherData = useCallback((currentWeatherData) => {
    setWeatherData(currentWeatherData);
    sessionStorage.setItem("weatherData", currentWeatherData);
  }, [setWeatherData]);

  const updateCurrentWeather = useCallback((current) => {
    setCurrentWeather(current);
    sessionStorage.setItem('currentWeather', current);
  }, [setCurrentWeather]);

  const updateCurrentLocation = useCallback((current) => {
    setCurrentLocation(current);
    sessionStorage.setItem("currentLocation", current)
  }, [setCurrentLocation]);
  
  const updateCurrentIndex = useCallback((currentIndex) => {
    setCurrentIndex(currentIndex);
    sessionStorage.setItem("currentIndex", currentIndex);
  }, [setCurrentIndex]);

  const value = useMemo (()=> ({weatherData, updateWeatherData, currentWeather, updateCurrentWeather, currentLocation, updateCurrentLocation, currentIndex, updateCurrentIndex}), [weatherData, updateWeatherData, currentWeather, updateCurrentWeather, currentLocation, updateCurrentLocation, currentIndex, updateCurrentIndex]);

  return (
    <WeatherContext.Provider value={value}>
        {children}
    </WeatherContext.Provider>
  );
};