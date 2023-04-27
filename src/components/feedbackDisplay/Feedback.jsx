import { useEffect, useState } from "react";
import { BsSun, BsCloudFog, BsCloudRain, BsTsunami, BsWind } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { GiWindsock } from "react-icons/gi";

export default function Feedback({feedbackContent}) {
  
  const [content, setContent] = useState([])

  useEffect(() => {
    setContent(feedbackContent.split("\n"))
  }, [feedbackContent])

  return(
    <div style={{fontFamily: "bodoni", display: "grid", gridTemplateColumns: "30% auto auto 30%"}}>
      <div></div>
      <div>
        <BsSun />: {content[0]} <br />
        <BsCloudRain />: {content[1]} <br />
        <BsCloudFog />: {content[2]} <br />
      </div>
      <div>
        
        <BsWind />: {content[3]} <br />
        <BsTsunami />: {content[4]} <br />
        <AiOutlineCompass />: {content[5]} <br />
      </div>
    </div>
  );
}