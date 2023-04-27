import Location from "./Location";
import TimestampDetail from "./TimestampDetail";
import ExplanationContainer from "../Explanation/ExplanationContainer";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsWind, BsTsunami } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { useState } from "react";
import ParameterDetail from "./ParameterDetail";

export default function ParamField({weather, warning}) {

  const [showOverlayer, setshowOverlayer] = useState(false);

  const handleClick = () => {
    setshowOverlayer(!showOverlayer);
  }

  return(
    <>
      <div style={{border: `1px solid ${weather.dataID.includes("Kiteable") ? "#82B366" : warning ? "#e69500" : "#B85450"}`, borderRadius: '15px', backgroundColor:  weather.dataID.includes("Kiteable") ? "#D5E8D4"  : warning ? "#ffe3b1" : "#F8CECC", padding:"10px", margin: "5px", fontFamily: "bodoni", display: "flex", justifyContent: "space-between"}}>
        <div style={{display: `${showOverlayer ? "block" : "none"}`}}>
          <ExplanationContainer whenClick={handleClick} content={showOverlayer} />
        </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <Location location={weather.location} />
            <ParameterDetail picture={<BsWind />} value={weather.windspeed} unit={weather.windspeedUnit} threshold={7.717} />
            <ParameterDetail picture={<BsTsunami />} value={weather.waveheight} unit={weather.waveheightUnit} threshold={151} />
            <ParameterDetail picture={<AiOutlineCompass />} value={weather.winddirection} unit={weather.winddirectionUnit} threshold={new Array(10.00, 230.00)} />
            <TimestampDetail time={weather.timestamp} />
          </div>
          <div style={{}} onClick={() => handleClick()}>
            <IoMdInformationCircleOutline style={{fontSize: "20px"}}/>
          </div>
      </div>
    </>
  );
}