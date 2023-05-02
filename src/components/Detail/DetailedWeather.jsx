import Title from "./Title";
import ParamField from "./ParamField";
import FeedbackContainer from "../feedbackDisplay/FeedbackContainer";

export default function DetailedWeather({detailedWeather, warning}) {
  return(
    <div>
      <Title dataID={detailedWeather.dataID} location={detailedWeather.location} warning={warning} />
      <ParamField weather={detailedWeather} warning={warning} />
      <FeedbackContainer weather={detailedWeather} warning={warning} />
    </div>
  );
}