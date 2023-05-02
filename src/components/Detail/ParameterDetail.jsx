import KiteableCondition from "./KiteableCondition";

export default function ParameterDetail({picture, value, unit, threshold}) {
  return(
    <div style={{textAlign: "left", padding: "10px 0", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <div>{picture} {value} {unit}</div> 
      <div>
        <KiteableCondition value={parseInt(value)} threshold={threshold} />
      </div>
    </div>
  );
}