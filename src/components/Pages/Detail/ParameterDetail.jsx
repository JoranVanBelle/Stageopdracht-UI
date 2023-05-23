import KiteableCondition from "./KiteableCondition";

export default function ParameterDetail({picture, value, unit, threshold}) {
  return(
    <div style={{textAlign: "left", padding: "5px 0", display: "grid", gridTemplateColumns: "auto 30%"}} className="font-face-cymo">
      <div>{picture} {value} {unit}</div> 
      <div>
        <KiteableCondition value={parseInt(value)} threshold={threshold} />
      </div>
    </div>
  );
}