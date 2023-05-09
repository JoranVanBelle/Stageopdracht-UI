

export default function Kiteable({kiteable, warning}) {

  return(
    <>
      
      <div style={{textAlign: "left", fontWeight: "bold", color: "black"}}>
        {warning ? "It's a risk to kite" : kiteable ? "Good to kite" : "Not good to kite"}
      </div>
    </>
  );
}