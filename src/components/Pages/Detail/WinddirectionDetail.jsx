import KiteableCondition from "./KiteableCondition";
import { BsArrowUp } from "react-icons/bs"

export default function WinddirectionDetail({picture, value, unit, threshold}) {

  const getRotation = (value) => {
    value = parseFloat(value)
    if(value > 22.5 && value <= 67.5) return "45deg";
    if(value > 67.5 && value <= 112.5) return "90deg";
    if(value > 112.5 && value <= 157.5) return "135deg";
    if(value > 157.5 && value <= 202.5) return "180deg";
    if(value > 202.5 && value <= 247.5) return "225deg";
    if(value > 247.5 && value <= 292.5) return "270deg";
    if(value > 292.5 && value <= 337.5) return "315deg";
    if(value > 337.5 || value <= 22.5) return "0deg";
  }

  const getWay = (value) => {
    value = parseFloat(value)
    if(value < 10 || value > 210) return "on-shore";
    if((value >= 10 && value < 20 )|| (value <= 210 && value > 200)) return "side-shore";
    else return "off-shore";
  }

  return(
    <div style={{textAlign: "left", padding: "5px 0", fontSize: "15px", display: "grid", gridTemplateColumns: "auto 30%"}} className="font-face-cymo">
      <div>{picture} <BsArrowUp style={{transform: `rotate(${getRotation(value)})`}} /> {getWay(value) + " wind"}</div> 
      <div>
        <KiteableCondition value={parseInt(value)} threshold={threshold} />
      </div>
    </div>
  );
}