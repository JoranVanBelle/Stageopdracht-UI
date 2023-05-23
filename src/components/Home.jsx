import WeatherOverview from "./Pages//Overvieuw/WeatherOverview";
import { useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "../contexts/Weather.context";
import Appname from "./Appname";
import { NotificationContext } from "../contexts/Notification.context";
import SettingsButton from "./Buttons/SettingsButton";
import LoaderNormal from "./Pages/Loading/LoaderNormal";

export default function Home() {
  
  const { weatherData, updateCurrentWeather, updateCurrentIndex, updateCurrentLocation, userLocation, updateUserlocation } = useContext(WeatherContext);
  const { notificationsNieuwpoort, updateNotificationsNieuwpoort } = useContext(NotificationContext);

  const getUserLocation = useCallback(() => {
    if(userLocation === null) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const origin = [position.coords.latitude, position.coords.longitude];
        updateUserlocation(origin);
      }, function(error) {
        console.error('Error retrieving geolocation:', error);
      });
    }
  }, [updateUserlocation, userLocation]);

  const handleClick = (elem, i) => {
    updateCurrentWeather(elem)
    updateCurrentIndex(i);
    updateCurrentLocation(elem.location);
  }

  useEffect(() => {
    sessionStorage.clear();
    updateCurrentIndex(null);
    getUserLocation();
    updateNotificationsNieuwpoort(notificationsNieuwpoort);
  }, [updateCurrentIndex, notificationsNieuwpoort, updateNotificationsNieuwpoort, getUserLocation]);

return(
  <div style={{height: "100vh", overflowY: "hidden", backgroundImage: "linear-gradient(#99cfe0, white)"}}>
    <div style={{display: "grid", gridTemplateColumns: "auto 10px"}}>
        <Appname />
        <div style={{position: "absolute", right: "10px", top: "10px"}}>
          <SettingsButton />
        </div>
    </div>

    {weatherData.length === 0 ? <div className="font-face-cymo" style={{textAlign: "center", marginTop: "50%"}} ><div style={{ display: "inline-block"}}><LoaderNormal style={{margin: "0 auto"}} /></div> <p>there are no locations available, maybe it has something to do with the api?</p></div> : 
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