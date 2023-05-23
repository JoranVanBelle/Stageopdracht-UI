import { GoLocation } from "react-icons/go";

export default function Location({location}) {
  return(
    <div style={{textAlign: "left", padding: "5px 0", fontSize: "15px"}} className="font-face-cymo">
      <GoLocation /> {location}
    </div>
  );
}