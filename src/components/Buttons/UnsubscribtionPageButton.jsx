import { BsEnvelopeDash } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function UnsubscribtionPageButton({email, location}) {

  return (
    <Link to={`/${email}/${location}`}>
      <div style={{}} className="font-face-cymo">
        <BsEnvelopeDash style={{color: "black", fontSize: "26px"}} />
      </div>
    </Link>
  );
}