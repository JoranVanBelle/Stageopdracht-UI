import { useEffect, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsWind, BsTsunami, BsSun, BsCloudRain, BsCloudFog, BsCalendar4, BsClock } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import BackgroundExplanation from "./BackgroundInformation";
import ScorableParameterExplanation from "./ScorableParameterInformation";
import Breakline from "./Breakline";

export default function ExplanationContainer({whenClicked, content}) {

  const overlayRef = useRef(null);

  useEffect(() => {
    overlayRef.current.scrollTop = 0;
  }, [content])

  return(
    <div style={{position: "static", width: "100%", height: "100vh", bottom: "0", color: "white", backgroundColor: "rgba(0,0,0,0.83)", overflowX: "hidden"}} ref={overlayRef}>
      <div style={{position:"fixed", right: "0", paddingRight: "5%", paddingTop: "5%", marginBottom: "5%"}}>
        <AiOutlineCloseCircle style={{color: "white", fontSize: "20px"}} onClick={whenClicked} />
      </div>
      <div style={{display: "grid", gridTemplateColumns: "15% 60% 25%", marginTop: "15%", paddingBottom: "5%", paddingLeft: "5%"}}>
        <div style={{textAlign: "center", alignSelf: "center"}}>Symbol</div>
        <div style={{textAlign: "center", alignSelf: "center"}}>Description</div>
        <div style={{textAlign: "center", alignSelf: "center"}}>Threshold</div>
      </div>
      <div style={{paddingLeft: "5%"}}>
        <ScorableParameterExplanation 
          picture={<BsWind style={{fontSize: "24px"}} />} 
          explanation={"The windspeed is an important element when you want to go kitesurfing. There is a minimum speed required to keep the kite in the air. You can give a score for the waves out of 5."} 
          score={<div>15 knots<br/>or<br/>7.717 m/s</div>} />

        <ScorableParameterExplanation 
          picture={<BsTsunami style={{fontSize: "24px"}} />} 
          explanation={"The waveheight is important for kitesurfing because it provides the necessary energy and lift for the rider to perform tricks and maneuvers. When a kitesurfer rides a wave, they can use the wave's energy to launch themselves into the air and perform aerial tricks or ride the wave's face for an extended period. You can give a score for the waves out of 5."} 
          score={`151 cm`} />

        <ScorableParameterExplanation 
          picture={<AiOutlineCompass style={{fontSize: "24px"}} />} 
          explanation={"The winddirection is important for the safety of the kitesurfer. When there is off-shore wind (wind blowing from the land into the sea), it can be dangerous for the kiter. When this type of wind occurs, it is a lot more diffuclt to get back towards the land. You can give a score for the waves out of 5."} 
          score={<img src={require("../../images/Windrose-removebg-preview (2).png")} alt="Difficult: 0-240 deg Safe: 10-230 deg" style={{width: "100%"}}/>} />
        {/* <div>Difficult:<br/>0-240 deg<br/>Safe:<br/>10-230 deg</div> */}
        <Breakline />

        <ScorableParameterExplanation 
          picture={<BsSun style={{fontSize: "24px"}} />}
          explanation={"This symbol indicates how sunny it was at a certain location"}
          score={"Out of 5"}/>

        <ScorableParameterExplanation 
          picture={<BsCloudRain style={{fontSize: "24px"}} />}
          explanation={"This symbol indicates how much fog there is at a certain location"}
          score={"Out of 5"}/>

        <ScorableParameterExplanation 
          picture={<BsCloudFog style={{fontSize: "24px"}} />}
          explanation={"This symbol indicates how much it is raining at a certain location"}
          score={"Out of 5"}/>

        <Breakline />

        <BackgroundExplanation 
          picture={<GoLocation style={{fontSize: "24px"}} />} 
          explanation={"This symbol indicates that the information next to it is the location"} />

        <BackgroundExplanation 
          picture={<BsCalendar4 style={{fontSize: "24px"}} />} 
          explanation={"This symbol indicates that the information next to it is the date"} />

        <BackgroundExplanation 
          picture={<BsClock style={{fontSize: "24px"}} />} 
          explanation={"This symbol indicates that the information next to it is the time"} />

        <BackgroundExplanation
          picture={<BiUser style={{fontSize: "24px"}} />}
          explanation={"This symbol indicates that the information next to it is the username. When someone wants to be anonymous when giving feedback, the username will be anonymousSeal"} />
      </div>
    </div>
  );
}