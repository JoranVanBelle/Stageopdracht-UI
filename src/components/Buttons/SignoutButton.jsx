import { GoSignOut } from "react-icons/go";
import { useContext } from "react";
import { UserContext } from "../../contexts/User.context";

export default function SignoutButton() {
  const { signOut } = useContext(UserContext);

  const handleLogout = () => {
    signOut();
  }

  return(
    <div onClick={handleLogout}>
      <GoSignOut style={{fontSize: "26px"}} />
    </div>
  );
}
