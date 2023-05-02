import WeatherOverview from "./Overvieuw/WeatherOverview";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "../contexts/Weather.context";
import Appname from "./Appname";

export default function Home() {
  
  const { weatherData, updateCurrentWeather } = useContext(WeatherContext);

  const handleClick = (elem) => {
    updateCurrentWeather(elem)
  }

return(
  <div style={{height: "100vh", overflowY: "scroll", backgroundImage: "linear-gradient(#99cfe0, white)"}}>
    <Appname />
    {weatherData.map((elem, i) => {
      return(
        <Link to={"/location"} style={{textDecoration: "none", color: "black"}} key={"index"+elem.dataID}>
          <div onClick={() => handleClick(elem)}>
            <WeatherOverview location={elem.location} dataID={elem.dataID} timestamp={elem.timestamp} winddirection={elem.winddirection} key={"overview"+i}/>
          </div>
        </Link>
      )
    })}
  </div>  
);

}