import { HiOutlineEmojiSad } from "react-icons/hi";
import BackToHomeButton from "../../Buttons/BackToHomeButton";

export default function Goodbye() {
  return(
    <div style={{ position: "absolute", top: "50%", transform: "translate(0, -50%)", textAlign: "center"}}>
      <p style={{fontSize: "26px"}}>We're sorry to hear you don't want to receive any emails anymore of this location <HiOutlineEmojiSad/></p>
      <BackToHomeButton />
    </div>
  );
}