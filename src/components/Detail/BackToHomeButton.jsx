import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export default function BackToHomeButton() {
  return(
    <Link to={"/"}>
      <div style={{textDecoration: "underline", color: "darkgray"}}>
        <AiOutlineHome style={{fontSize: "26px", color: "black"}} />
      </div>    
    </Link>
  );
}