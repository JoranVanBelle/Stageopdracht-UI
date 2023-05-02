import { Link } from "react-router-dom";

export default function BackToHomeButton() {
  return(
    <Link to={"/"}>
      <div style={{textDecoration: "underline", color: "darkgray"}}>
        Home
      </div>    
    </Link>
  );
}