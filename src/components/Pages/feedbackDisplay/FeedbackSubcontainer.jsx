import FeedbackComponent from "./FeedbackComponent";

export default function FeedbackSubcontainer({feedback, weather}) {
  return(
    <div style={{height: "100vh", overflowY: "scroll", borderRadius: "15px", backgroundColor:  "#c0c0c0", paddingX:"10px", margin: "10px", textAlign: "center"}} key={"FeedbackSubcontainer"+weather.dataID+feedback.feedbackID}>
        {feedback.map((elem, ind) => {
          return(
            <div key={"divFeedbackComponent"+ind}>
              <FeedbackComponent feedback={elem} key={"feedbackComponent"+elem.feedbackID} />
            </div>
          );
          })
        }
      </div>
  );
}