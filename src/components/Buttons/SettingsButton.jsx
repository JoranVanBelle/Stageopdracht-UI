import { useContext } from "react";
import { UserContext } from "../../contexts/User.context";
import { Link } from "react-router-dom";

export default function SettingsButton() {

  const {profilepicture} = useContext(UserContext);

  return(
    <Link to={"/settings"}>
      <div className="font-face-cymo">
        <img src={profilepicture} alt="Settings" style={{borderRadius: "50%", height: "40px"}}/>
      </div>
    </Link>
  );
}