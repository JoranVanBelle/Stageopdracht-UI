import * as weatherApi from "../api/weather";
import { useEffect, useState, createContext, useMemo, useCallback } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(sessionStorage.getItem('currentWeather'));
  const [currentIndex, setCurrentIndex] = useState(sessionStorage.getItem("currentIndex"));
  const [currentLocation, setCurrentLocation] = useState(sessionStorage.getItem("currentLocation"));
  const [userLocation, setUserLocation] = useState(sessionStorage.getItem("currentUserLocation") || null);

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

  const updateUserlocation = useCallback((currentLocation) => {
    setUserLocation(currentLocation);
    sessionStorage.setItem("currentUserLocation", currentLocation);
  }, [setUserLocation])

  const value = useMemo (()=> ({weatherData, updateWeatherData, currentWeather, updateCurrentWeather, currentLocation, updateCurrentLocation, currentIndex, updateCurrentIndex, userLocation, updateUserlocation}), [weatherData, updateWeatherData, currentWeather, updateCurrentWeather, currentLocation, updateCurrentLocation, currentIndex, updateCurrentIndex,  userLocation, updateUserlocation]);

  return (
    <WeatherContext.Provider value={value}>
        {children}
    </WeatherContext.Provider>
  );
};