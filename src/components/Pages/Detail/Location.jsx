import { GoLocation } from "react-icons/go";

export default function Location({location}) {
  return(
    <div style={{textAlign: "left", padding: "10px 0"}} className="font-face-cymo">
      <GoLocation /> {location}
    </div>
  );
}