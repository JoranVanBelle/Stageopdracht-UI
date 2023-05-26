import { useState, useEffect, useContext } from "react";
import * as distanceApi from "../../../api/distancematrix.ai";
import * as ptvApi from "../../../api/myPtv";
import { WeatherContext } from "../../../contexts/Weather.context";
import { useCallback } from "react";
import { RiPinDistanceLine } from "react-icons/ri";
import { IoHourglassOutline } from "react-icons/io5"
import Loadersmall from "../Loading/LoaderSmall";

export default function MapsContainer() {

  const { userLocation, currentLocation } = useContext(WeatherContext);

  const [distanceData, setDistanceData] = useState();
  const [trafficTravelTime, setTrafficTravelTime] = useState();
  const [loading, setLoading] = useState(false);

  const calculateDistance = useCallback(async () => {
      setLoading(true);
      const destination = await ptvApi.getLatLonLocation(currentLocation);

      const response = await distanceApi.getDistance([userLocation, destination]);
      if(response) {
        setDistanceData(response.rows[0].elements[0].distance.text);
        setTrafficTravelTime(response.rows[0].elements[0].duration_in_traffic.text);
      }
      setLoading(false);
  }, [currentLocation, userLocation]);

  useEffect(() => {
    calculateDistance();
  }, [calculateDistance]);

  return (
    <div>
      {loading ? (
        <div><Loadersmall /></div>
      ) : (
        <>
          <div style={{fontWeight: "bold", textAlign: "left", textDecoration: "underline 3px"}}>Travel information</div>
          <p style={{fontSize: "15px"}}> <RiPinDistanceLine /> Distance: {distanceData}<br/>
            <IoHourglassOutline /> Time: {trafficTravelTime}</p>
        </>
      )}
    </div>
  );
}
