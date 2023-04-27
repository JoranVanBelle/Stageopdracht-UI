import { GoLocation } from "react-icons/go";

export default function BackgroundExplanation({picture, explanation}) {
  return(
    <div style={{fontFamily: "bodoni", display: "grid", gridTemplateColumns: "15% 60%", marginBottom: "5%", paddingLeft: "5%"}}>
      <div style={{justifySelf: "center", alignSelf: "center"}}>
        {/* <GoLocation style={{fontSize: "24px"}}/> */}
        {picture}
      </div>
      <div style={{padding: "0 5%", borderLeft: "1px solid white", borderRight: "1px solid white", textAlign: "center"}}>
        {explanation}
      </div>
    </div>
  );
}