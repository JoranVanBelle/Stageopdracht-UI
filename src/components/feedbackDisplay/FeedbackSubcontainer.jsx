import FeedbackComponent from "./FeedbackComponent";

export default function FeedbackSubcontainer({feedback, warning, weather}) {
  return(
    <div style={{height: "12.5rem", overflowY: "scroll", borderRadius: "15px", backgroundColor:  weather.dataID.includes("Kiteable") ? "#D5E8D4"  : warning ? "#ffe3b1" : "#F8CECC", paddingX:"10px", margin: "10px", textAlign: "center", fontFamily: "bodoni"}} key={"FeedbackSubcontainer"+weather.dataID}>
        {feedback.map((elem) => {
          return(
            <div>
              <FeedbackComponent feedback={elem} key={"feedbackComponent"+elem.feedbackID} />
            </div>
          );
          })
        }
      </div>
  );
}