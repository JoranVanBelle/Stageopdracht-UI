import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FeedbackContext } from "../../contexts/Feedback.context";
import { MdOutlineFeedback } from "react-icons/md"
import { VscFeedback } from "react-icons/vsc"

export default function FeedbackButton({location}) {

  const { updateFeedbackLocation } = useContext(FeedbackContext);

  useEffect(() => {
    updateFeedbackLocation(location);
  }, [location, updateFeedbackLocation])

  return(
    <Link to={"/feedback"}>
      <div key={"feedbackbutton"+location} style={{textDecoration: "underline", color: "darkgray", marginRight: "15%"}} className="font-face-cymo">
        <VscFeedback style={{color: "black", fontSize: "26px"}} />
      </div>
    </Link>
  );
}