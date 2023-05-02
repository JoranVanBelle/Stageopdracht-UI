import { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../../contexts/Weather.context";
import Loader from "../Loader";
import DetailedWeather from "./DetailedWeather";
import WeatherPosition from "./WeatherPosition";
import FeedbackButton from "../postFeedback/FeedbackButton";
import BackToHomeButton from "./BackToHomeButton";

export default function WeatherScreen() {

  const minSwipeDistance = 70;
  
  const { weatherData, currentWeather, updateCurrentWeather, currentIndex, updateCurrentIndex } = useContext(WeatherContext);

  const [loading, setLoading] = useState(true);
  const [warning, setWarning] = useState(false);

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [swipePosition, setSwipePosition] = useState(0);

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
    // For swipe animation
    const swipeDistance = e.targetTouches[0].clientX - touchStart;
    if(Math.abs(swipeDistance) > minSwipeDistance) {
      setSwipePosition(swipeDistance > 0 ? swipeDistance-minSwipeDistance : swipeDistance+minSwipeDistance);
    }
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isRightSwipe && currentIndex > 0) {
      setLoading(true);
      updateCurrentWeather(weatherData.at(currentIndex > 0 ? currentIndex - 1 : currentIndex));
      updateCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);
      setSwipePosition(0);
      setLoading(false);
    }
    if(isLeftSwipe &&  currentIndex+1 < weatherData.length) {
      setLoading(true)
      updateCurrentWeather(weatherData.at(currentIndex < weatherData.length ? currentIndex + 1 : currentIndex));
      updateCurrentIndex(currentIndex < weatherData.length ? currentIndex + 1 : currentIndex);
      setSwipePosition(0);
      setLoading(false);
    }
    setSwipePosition(0);
  };
  
  const onTouchCancel = () => {
    setSwipePosition(0)
  }

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    const updateVariables = async () => {
      if(weatherData.length) {
        if(!currentIndex) {
          updateCurrentIndex(weatherData.indexOf(currentWeather));
        }
        updateCurrentWeather(weatherData.at(currentIndex))
        setWarning((10 > parseInt(currentWeather.winddirection) && parseInt(currentWeather.winddirection) >= 0) || (240 > parseInt(currentWeather.winddirection) && parseInt(currentWeather.winddirection) >= 230));
        setLoading(false);
      }
    };
    updateVariables();
  }, [weatherData, currentWeather, updateCurrentWeather, currentIndex, updateCurrentIndex]);

  return (

    loading ? <Loader /> :
    <>
      <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onTouchCancel={onTouchCancel} style={{position: "relative", transform: `translateX(${swipePosition}px)`}}>
        <DetailedWeather detailedWeather={weatherData.at(currentIndex)} warning={warning} />
      </div>
      <div style={{textAlign: "center", paddingTop: "3px"}}>
        <WeatherPosition index={currentIndex} weatherData={weatherData} key={"weahterPosition"+currentIndex} />
      </div>
      <div style={{display: "flex", justifyContent: "space-between", padding: "7% 5%"}}>
        <div>
          <FeedbackButton location={currentWeather.location} />
        </div>
        <div style={{paddingRight: "40px"}}>
          <BackToHomeButton />
        </div>
      </div>
    </>
  );
  
}