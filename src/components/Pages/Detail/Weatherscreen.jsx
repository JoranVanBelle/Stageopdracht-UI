import { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../../../contexts/Weather.context";
import Loader from "../Loading/LoaderBig";
import DetailedWeather from "./DetailedWeather";
import WeatherPosition from "./WeatherPosition";
import Slider from "react-touch-drag-slider";
import ExplanationContainer from "../Explanation/ExplanationContainer";
import backgroundImage from "../../../images/kitesurfing background.jpg";
import BackToHomeButton from "../../Buttons/BackToHomeButton";
import { UserContext } from "../../../contexts/User.context";

export default function WeatherScreen() {
  
  const { weatherData, currentIndex, updateCurrentIndex, updateCurrentLocation } = useContext(WeatherContext);
  const { emailaddress } = useContext(UserContext)

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
      <div style={{position: "static", marginTop: "5%", marginLeft: "5%", borderRadius: "50%", width: "30px", height: "30px", display: `${showOverlayer ? "none" : "inline-block"}`}}>
        <BackToHomeButton style={{}} />
      </div>
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
          {weatherData.map((elem, ind) => <div key={"divDetailedWeather"+ind} style={{display: `${showOverlayer ? "none" : "inline-block"}`}}><DetailedWeather currentWeather={elem} email={emailaddress} key={"detailedWeather"+ind} whenClicked={handleClick} /></div>)}
      </Slider>
      <div style={{textAlign: "center", backgroundColor: "transparent"}}>
        <WeatherPosition index={currentIndex} weatherData={weatherData} key={"weahterPosition"+currentIndex} />
      </div>
    </div>
      
  );
  
}