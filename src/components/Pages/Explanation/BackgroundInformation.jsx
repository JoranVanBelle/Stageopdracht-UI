export default function BackgroundExplanation({picture, explanation}) {
  return(
    <div style={{display: "grid", gridTemplateColumns: "15% 60%", marginBottom: "5%", paddingLeft: "5%", paddingBottom: "3%"}}>
      <div style={{justifySelf: "center", alignSelf: "center"}}>
        {picture}
      </div>
      <div style={{padding: "0 5%", borderLeft: "1px solid white", borderRight: "1px solid white", textAlign: "center"}}>
        {explanation}
      </div>
    </div>
  );
}