import WeatherOverview from "./Overvieuw/WeatherOverview";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "../contexts/Weather.context";

export default function Home() {
  
  const { weatherData } = useContext(WeatherContext);

  useEffect(() => {
    localStorage.setItem("weatherData", weatherData)
  }, [weatherData])

return(
  <div style={{height: "100vh", overflowY: "scroll", backgroundImage: "linear-gradient(#99cfe0, white)"}}>
    {weatherData.map((elem, i) => {
      return(

      <Link to={`/detail/${elem.dataID}`} style={{textDecoration: "none", color: "black"}} key={"index"+elem.dataID}>
        <WeatherOverview location={elem.location} dataID={elem.dataID} timestamp={elem.timestamp} winddirection={elem.winddirection} key={"overview"+i}/>
      </Link>
      )
    })}
  </div>  
);

}