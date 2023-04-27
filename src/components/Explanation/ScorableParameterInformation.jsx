import { BsSun } from "react-icons/bs";

export default function ScorableParameterExplanation({picture, explanation, score}) {
  return(
    <div style={{fontFamily: "bodoni", display: "grid", gridTemplateColumns: "15% 60% 25%", marginBottom: "5%", paddingLeft: "5%"}}>
      <div style={{justifySelf: "center", alignSelf: "center"}}>
        {picture}
      </div>
      <div style={{padding: "0 5%", borderLeft: "1px solid white", borderRight: "1px solid white", textAlign: "center"}}>
        {explanation}
      </div>
      <div style={{textAlign: "center", alignSelf: "center"}}>
        {score}
      </div>
    </div>
  );
}