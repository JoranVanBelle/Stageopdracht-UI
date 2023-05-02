import { useEffect, useState } from "react";
import * as feedbackApi from "../../api/feedback";
import Loader from "../Loader";
import FeedbackSubcontainer from "./FeedbackSubcontainer";

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
  }, [weather]);

  return(
    loading ? <Loader /> :
    
    <div style={{border: `1px solid ${weather.dataID.includes("Kiteable") ? "#82B366" : warning ? "#e69500" : "#B85450"}`, borderRadius: '15px', marginX: "10px", marginTop: "0", backgroundColor:  weather.dataID.includes("Kiteable") ? "#D5E8D4"  : warning ? "#ffe3b1" : "#F8CECC", height: "50%"}}>
      <p style={{textAlign: "center", fontWeight: "bold", fontSize: "24px"}}>Feedback</p>
      <FeedbackSubcontainer feedback={feedback} warning={warning} weather={weather} />
    </div>
  );
}