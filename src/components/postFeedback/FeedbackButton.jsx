import { Link } from "react-router-dom";
import { useContext } from "react";
import { FeedbackContext } from "../../contexts/Feedback.context";

export default function FeedbackButton({location}) {

  const { updateFeedbackLocation } = useContext(FeedbackContext);

  updateFeedbackLocation(location);

  return(
    <Link to={"/feedback"}>
      <div style={{textDecoration: "underline", color: "darkgray"}}>
        Give feedback
      </div>
    </Link>
  );
}