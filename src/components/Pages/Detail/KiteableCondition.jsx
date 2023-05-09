import { GoCheck, GoAlert, GoX } from "react-icons/go";

export default function KiteableCondition({value, threshold}) {
  
  if(Array.isArray(threshold)) {
    const first = threshold[0];
    const second = threshold[1];

    if(value >= first && value <= second) {
      return <GoCheck style={{paddingLeft: "10%", color: "green", fontSize: "26px"}} />
    } if(value >= first-10 && value <= second+10) {
      return <GoAlert style={{paddingLeft: "10%", color: "orange", fontSize: "26px"}} />
    }
  } else {
    if(value >= threshold) {
      return <GoCheck style={{paddingLeft: "10%", color: "green", fontSize: "26px"}} />
    }
    else {
      return <GoX style={{paddingLeft: "10%", color: "red", fontSize: "26px"}} />
    }
  }
}