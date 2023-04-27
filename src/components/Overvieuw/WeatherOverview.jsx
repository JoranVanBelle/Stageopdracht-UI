import { useEffect, useState } from "react";
import Kiteable from "./Kiteable";
import Location from "./Location";
import Timestamp from "./Timestamp";

export default function WeatherOverview({location, dataID, timestamp, winddirection}) {

  const [kiteable, setKiteable] = useState(false);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    const updateVariables = async () => {
      setKiteable(dataID.includes("Unkiteable") ? false : true)
      setWarning((10 > parseInt(winddirection) && parseInt(winddirection) >= 0) || (240 > parseInt(winddirection) && parseInt(winddirection) >= 230))
    };
    updateVariables();
  }, [dataID, winddirection]);
  // #99cfe0
  return(
    <>
      <div style={{border: "1px solid white", borderRadius: "10px", margin: "10px 0px", padding: "10px 5px", backgroundImage: `linear-gradient(to right, #d3d3d3 , ${kiteable ? "#82B366": warning ? "#e69500" : "#B85450"})`, fontFamily: "bodoni"}} key={"weatheroverview"}>
        <Location location={location} key={dataID+location} />
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Timestamp time={timestamp} key={dataID+timestamp} />
          <Kiteable kiteable={kiteable} key={dataID+"kiteable"}/>
        </div>
      </div>
    </>
  );
}