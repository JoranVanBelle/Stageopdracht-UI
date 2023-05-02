import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FeedbackContext } from "../../contexts/Feedback.context";

export default function FeedbackButton({location}) {

  const { updateFeedbackLocation } = useContext(FeedbackContext);

  useEffect(() => {
    updateFeedbackLocation(location);
  }, [location, updateFeedbackLocation])

  return(
    <Link to={"/feedback"}>
      <div style={{textDecoration: "underline", color: "darkgray"}}>
        Give feedback
      </div>
    </Link>
  );
}