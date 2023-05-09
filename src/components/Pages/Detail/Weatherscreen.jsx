import { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../../../contexts/Weather.context";
import Loader from "../../Loader";
import DetailedWeather from "./DetailedWeather";
import WeatherPosition from "./WeatherPosition";
import Slider from "react-touch-drag-slider";
import ExplanationContainer from "../Explanation/ExplanationContainer";
import backgroundImage from "../../../images/kitesurfing background.jpg";

export default function WeatherScreen() {
  
  const { weatherData, currentIndex, updateCurrentIndex, updateCurrentLocation } = useContext(WeatherContext);

  const [loading, setLoading] = useState(true);
  const [showOverlayer, setshowOverlayer] = useState(false);

  const handleClick = () => {
    setshowOverlayer(!showOverlayer);
  }

  useEffect(() => {
    if(weatherData !== undefined) {
      setLoading(false);
    }

  }, [weatherData, currentIndex, setLoading])

  return (

    loading ? <Loader key={"loaderWeatherscreen"} /> :
    <div key={"testertest"} style={{alignContent: "start", display: "flex", flexDirection: "column", justifySelf: "flex-start", height: "100vh", backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', overflowY: "hidden"}}>
      {showOverlayer && <div style={{height: "100%"}}><ExplanationContainer whenClicked={handleClick} content={showOverlayer} /></div>}
      <Slider
        onSlideComplete={(i) => {
          updateCurrentIndex(i)
          updateCurrentLocation(weatherData.at(i).location)
        }}
        activeIndex={currentIndex}
        threshHold={200}
        transition={0}
        scaleOnDrag={false}

        key={"slider"}
        >
          {weatherData.map((elem, ind) => <div key={"divDetailedWeather"+ind} style={{display: `${showOverlayer ? "none" : "inline-block"}`}}><DetailedWeather currentWeather={elem} key={"detailedWeather"+ind} whenClicked={handleClick} /></div>)}
      </Slider>
      <div style={{textAlign: "center", backgroundColor: "transparent"}}>
        <WeatherPosition index={currentIndex} weatherData={weatherData} key={"weahterPosition"+currentIndex} />
      </div>
    </div>
      
  );
  
}