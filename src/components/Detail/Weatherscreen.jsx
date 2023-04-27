import { useEffect, useState, useContext, useCallback } from "react";
import { useParams } from "react-router";
import { WeatherContext } from "../../contexts/Weather.context";
import Loader from "../Loader";
import Title from "./Title";
import ParamField from "./ParamField";
import FeedbackContainer from "../feedbackDisplay/FeedbackContainer";

export default function WeatherScreen() {

  const { dataID } = useParams();
  const { weatherData } = useContext(WeatherContext);
  // const [weatherData, setWeatherData] = useState([])
  const [detailedWeather, setDetailedWeather] = useState(null);
  const [currentIndex, setCurrentIndex] = useState();
  const [loading, setLoading] = useState(true);
  const [warning, setWarning] = useState(false);


  useEffect(() => {
    // setWeatherData(localStorage.getItem("weatherData"))
    const temp = weatherData.filter(elem => elem.dataID === dataID)[0]
    setDetailedWeather(temp)
    setWarning((10 > parseInt(temp.winddirection) && parseInt(temp.winddirection) >= 0) || (240 > parseInt(temp.winddirection) && parseInt(temp.winddirection) >= 230))
    setLoading(false)
  }, [weatherData, dataID]);

  return (
    
    loading ? <Loader /> :
    <div>
      <Title dataID={dataID} location={detailedWeather.location} warning={warning} />
      <ParamField weather={detailedWeather} warning={warning} />
      <FeedbackContainer weather={detailedWeather} warning={warning} />
    </div>
  );

}