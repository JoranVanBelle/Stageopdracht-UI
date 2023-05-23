import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export default function BackToHomeButton() {

  return(
      <div style={{width: "26px", height: "26px", backgroundColor: "transparent", borderRadius: "50%"}} className="font-face-cymo">
      <Link to={"/login"}>
        <AiOutlineHome style={{fontSize: "26px", color: "black"}} />    
      </Link>
      </div>
  );
}