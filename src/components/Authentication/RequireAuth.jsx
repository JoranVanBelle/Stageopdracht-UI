import { useContext } from "react";
import { UserContext } from "../../contexts/User.context";
import { Navigate } from "react-router";

export default function RequireAuth({children}) {
  const { username } = useContext(UserContext);
  
  if(username !== null) {
    return children
  }

  return <Navigate to="/login" />;
}