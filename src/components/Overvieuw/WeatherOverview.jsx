import { useEffect, useState } from "react";
import Kiteable from "./Kiteable";
import Location from "./Location";
import Timestamp from "./Timestamp";
import { TbMathGreater } from "react-icons/tb";

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
  
  return(
    <>
      <div style={{border: "1px solid white", borderRadius: "10px", margin: "10px 2px", padding: "0px 3%", backgroundImage: `linear-gradient(to left, #d3d3d3 , ${kiteable ? "#82B366": warning ? "#e69500" : "#B85450"})`, display: "flex", flexDirection: "column"}} key={"weatheroverview"}>
        <div style={{position: "absolute", right: "5%"}}>
          <TbMathGreater style={{fontSize: "13px", paddingTop: "25px"}} />
        </div>
        <div style={{top: "0"}}>
          <Location location={location} key={dataID+location} />
          <Kiteable kiteable={kiteable} key={dataID+"kiteable"} warning={warning}/>
          <Timestamp time={timestamp} key={dataID+timestamp} />
        </div>
      </div>
    </>
  );
}