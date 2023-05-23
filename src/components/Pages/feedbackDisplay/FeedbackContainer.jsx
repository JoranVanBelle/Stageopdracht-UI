import { useEffect, useState } from "react";
import * as feedbackApi from "../../../api/feedback";
import FeedbackSubcontainer from "./FeedbackSubcontainer";
import FeedbackButton from "../../Buttons/FeedbackButton";
import Loadersmall from "../Loading/LoaderSmall";

export default function FeedbackContainer({weather, warning}) {

  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      const data = await feedbackApi.getFeedbackById(weather.location);
      setFeedback(data)
      setLoading(false)
    };
    fetchFeedback();
  }, [weather.location]);

  return(
    loading ? <Loadersmall key={"loaderFeedbackContainer"+weather.weatherID} /> :
    
    <div key={"feedbackcontainer"+weather.dataID} style={{border: `1px solid ${weather.dataID.includes("Kiteable") ? "#82B366" : warning ? "#e69500" : "#B85450"}`, borderRadius: '15px', padding:"10px", margin: "5px 5px 0 5px", backgroundColor:  "#c0c0c0", height: "35vh", display: "flex", flexDirection: "column"}} className="font-face-cymo">
      <div key={"feedbacksubcontainer"+weather.dataID} style={{display: "grid", gridTemplateColumns: "20% 60% 20%"}}>
        <div key={"trashdiv"+weather.dataID}></div>
        <p key={"feedbacktitle"+weather.dataID} style={{fontWeight: "bold", fontSize: "24px", textAlign: "center"}}>Feedback</p>
        <div key={"feedbackbutton"+weather.dataID} style={{textAlign: "right"}}>
          <FeedbackButton location={weather.location} />
        </div>
      </div>
      <FeedbackSubcontainer key={"feedbacksubcontainerComponent"+weather.dataID} feedback={feedback}  weather={weather} />
      
    </div>
  );
}