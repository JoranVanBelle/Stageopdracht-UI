import { BiUser } from "react-icons/bi";

export default function Username({username}) {
  return(
    <div style={{textAlign: "right", paddingRight: "10px"}}>
      <BiUser /> {username}
    </div>
  );
}