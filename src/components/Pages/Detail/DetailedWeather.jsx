import Title from "./Title";
import ParamField from "./ParamField";
import FeedbackContainer from "../feedbackDisplay/FeedbackContainer";
import { useState, useEffect } from "react";

export default function DetailedWeather({currentWeather, whenClicked, email}) {

  
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    setWarning((10 > parseInt(currentWeather.winddirection) && parseInt(currentWeather.winddirection) >= 0) || (240 > parseInt(currentWeather.winddirection) && parseInt(currentWeather.winddirection) >= 230));
  }, [currentWeather]);

  return(
    <div>
      <Title dataID={currentWeather.dataID} location={currentWeather.location} warning={warning} key={"title"+currentWeather.dataID} />
      <ParamField weather={currentWeather} warning={warning} key={"paramfield"+currentWeather.dataID} whenClicked={whenClicked} email={email} />
      <FeedbackContainer weather={currentWeather} warning={warning} key={"feedbackcontainerInDetailedWeather"+currentWeather.dataID} />
    </div>
  );
}