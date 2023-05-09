import Location from "./Location";
import TimestampDetail from "./TimestampDetail";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsWind, BsTsunami } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import ParameterDetail from "./ParameterDetail";
import BackToHomeButton from "../../Buttons/BackToHomeButton";
import SubscribtionPageButton from "../../Buttons/SubscribtionPageButton";

export default function ParamField({weather, warning, whenClicked}) {

  return(
    <>
      <div key={"homebutton"+weather.dataID} style={{border: `1px solid ${weather.dataID.includes("Kiteable") ? "#82B366" : warning ? "#e69500" : "#B85450"}`, borderRadius: '15px', backgroundColor:  "#c0c0c0", padding:"10px", margin: "5px", display: "grid", gridTemplateColumns: "30% auto 10%"}} className="font-face-cymo">
        <div key={"home"+weather.dataID} >
          <BackToHomeButton />
          <SubscribtionPageButton location={weather.location} />
        </div>
          
          <div key={"params"+weather.dataID}>
            <Location location={weather.location} />
            <ParameterDetail picture={<BsWind />} value={weather.windspeed} unit={weather.windspeedUnit} threshold={7.717} />
            <ParameterDetail picture={<BsTsunami />} value={weather.waveheight} unit={weather.waveheightUnit} threshold={151} />
            <ParameterDetail picture={<AiOutlineCompass />} value={weather.winddirection} unit={weather.winddirectionUnit} threshold={[10.00, 230.00]} />
            <TimestampDetail time={weather.timestamp} />
          </div>
          <div  key={"information"+weather.dataID} style={{alignSelf: "start"}} onClick={whenClicked} className="font-face-cymo">
            <IoMdInformationCircleOutline style={{fontSize: "26px"}}/>
          </div>
      </div>
    </>
  );
}