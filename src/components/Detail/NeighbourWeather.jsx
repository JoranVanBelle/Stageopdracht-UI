import DetailedWeather from "./DetailedWeather";
import WeatherPosition from "./WeatherPosition";

export default function NeighbourWeather({ weatherData, currentIndex, swipePosition, warning }) {

  return(
    <div>
      <div style={{position: "relative", transform: `translateX(${swipePosition}px)`}}>
        <DetailedWeather detailedWeather={weatherData.at(currentIndex)} warning={warning} />
      </div>
      <div style={{textAlign: "center", paddingTop: "3px"}}>
        <WeatherPosition index={currentIndex} weatherData={weatherData} key={"weahterPosition"+currentIndex} />
      </div>
    </div>
  );
}