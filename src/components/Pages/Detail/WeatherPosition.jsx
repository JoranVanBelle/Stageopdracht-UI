import { VscCircleLargeFilled } from "react-icons/vsc";

export default function WeatherPosition({index, weatherData}) {
  return(
    <div key={"div"+index}>
      {weatherData.map((elem, ind) => <VscCircleLargeFilled style={{color: `${ind === index ? "#676767" : "lightgray"}`}} key={"circle"+ind} />)}
    </div>
  );
}