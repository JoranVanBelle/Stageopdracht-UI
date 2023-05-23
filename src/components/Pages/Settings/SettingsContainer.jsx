import Subtitle from "./Subtitle";
import Title from "./Title";
import BackToHomeButton from "../../Buttons/BackToHomeButton";
import { useContext } from "react";
import { UserContext } from "../../../contexts/User.context";
import SignoutButton from "../../Buttons/SignoutButton";

export default function SettingsContainer() {

  const { username, profilepicture } = useContext(UserContext);

  return (
    <div style={{overflowY: "hidden"}}>
      <header style={{textAlign: "center"}}>
        <Title />
        <Subtitle text={`of ${username}`} />
        <img src={profilepicture} alt={`Profilepicture ${username}`} style={{borderRadius: "50%", height: "80px"}} />
      </header>
      {/* <div style={{marginTop: "10%", marginLeft: "5%"}}>
        <NotificationContainer />
      </div> */}
      <div style={{display: "flex", justifyContent: "space-around", marginTop: "50vh"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <SignoutButton />
          <p style={{fontSize: "10px"}}>Sign out</p>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <BackToHomeButton />
          <p style={{fontSize: "10px", paddingTop: "6px"}}>Return to home</p>
        </div>
      </div>
    </div>
  );
}