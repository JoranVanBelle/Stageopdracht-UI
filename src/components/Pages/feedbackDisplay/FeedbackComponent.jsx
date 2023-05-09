import Feedback from "./Feedback";
import Username from "./Username";
import FeedbackTimestamp from "./FeedbackTimestamp";

export default function FeedbackComponent({feedback}) {
  return(
    <div style={{padding: "10px 0", backgroundColor: "white", margin: "10px 0", borderRadius: "15px", marginTop: "0", transition: "opacity 0.5s ease-out"}} key={feedback.feedbackID}>
      <div style={{display: "flex", justifyContent: "space-between"}} key={"subdiv"+feedback.feedbackID}>
        <FeedbackTimestamp time={feedback.timestamp} key={feedback.feedbackID+""+feedback.timestamp} />
        <Username username={feedback.username} key={feedback.feedbackID+""+feedback.username} />
      </div>
      <Feedback feedbackContent={feedback.feedback} key={feedback.feedbackID+""+feedback.feedback} />
    </div>
  );
}