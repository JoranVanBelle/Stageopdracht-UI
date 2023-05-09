import Subtitle from "./Subtitle";
import Title from "./Title";
import BackToHomeButton from "../../Buttons/BackToHomeButton";
import NotificationContainer from "../Notification/NotificationContainer";

export default function SettingsContainer() {
  return (
    <div>
      <Title />
      <div style={{marginTop: "10%", marginLeft: "5%"}}>
        <Subtitle text={"Notifications"} />
        <NotificationContainer />
      </div>
      <div style={{textAlign: "center", position: "fixed", left: "50%", transform: "translate(-50%, 0)", bottom: "10%"}}>
        <BackToHomeButton />
      </div>
    </div>
  );
}