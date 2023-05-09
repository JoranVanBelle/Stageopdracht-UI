export default function Subtitle({text}) {
  return(
    <div>
      <span className="font-face-cymo" style={{paddingRight: "10", fontSize: "28px", borderBottom: "1px solid darkgray"}}>{text}</span>
    </div>
  );
}