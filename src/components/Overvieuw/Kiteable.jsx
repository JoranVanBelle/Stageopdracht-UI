

export default function Kiteable({kiteable}) {

  return(
    <>
      
      <div style={{textAlign: "right", fontWeight: "bold", color: "black"}}>
        {kiteable ? "Good to kite" : "Not good to kite"}
      </div>
    </>
  );
}