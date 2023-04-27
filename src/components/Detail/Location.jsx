import { GoLocation } from "react-icons/go";

export default function Location({location}) {
  return(
    <div style={{fontFamily: "bodoni", textAlign: "left", padding: "10px 0"}}>
      <GoLocation /> {location}
    </div>
  );
}