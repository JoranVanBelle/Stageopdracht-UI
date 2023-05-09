import { HiOutlineEnvelope } from "react-icons/hi2"
import { Link } from "react-router-dom";
import { BsEnvelopePlus } from "react-icons/bs"

export default function SubscribtionPageButton({location}) {
  return (
    <Link to={`/subscribe/${location}`}>
      <div style={{marginTop: "280%"}} className="font-face-cymo">
        <BsEnvelopePlus style={{color: "black", fontSize: "26px"}} />
      </div>
    </Link>
  );
}