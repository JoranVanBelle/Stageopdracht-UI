import WeatherOverview from "./Pages//Overvieuw/WeatherOverview";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "../contexts/Weather.context";
import Appname from "./Appname";

export default function Home() {
  
  const { weatherData, updateCurrentWeather, updateCurrentIndex, updateCurrentLocation } = useContext(WeatherContext);

  const handleClick = (elem, i) => {
    updateCurrentWeather(elem)
    updateCurrentIndex(i);
    updateCurrentLocation(elem.location);
  }

  useEffect(() => {
    sessionStorage.clear();
    updateCurrentIndex(null);
  }, [updateCurrentIndex]);

return(
  <div style={{height: "100vh", overflowY: "scroll", backgroundImage: "linear-gradient(#99cfe0, white)"}}>
    <Appname />
    {weatherData.length === 0 ? <div className="font-face-cymo" style={{textAlign: "center", marginTop: "50%"}} >there are no locations available, maybe it has something to do with the api?</div> : 
    weatherData.map((elem, i) => {
      return(
        <Link to={"/location"} style={{textDecoration: "none", color: "black"}} className="font-face-cymo" key={"index"+elem.dataID}>
          <div onClick={() => handleClick(elem, i)}>
            <WeatherOverview location={elem.location} dataID={elem.dataID} timestamp={elem.timestamp} winddirection={elem.winddirection} key={"overview"+i}/>
          </div>
        </Link>
      )
    })}
  </div>  
);

}