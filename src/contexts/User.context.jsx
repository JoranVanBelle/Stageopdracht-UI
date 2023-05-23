import { useState, createContext, useMemo, useCallback} from "react";
import jwtDecode from 'jwt-decode';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

  const usernameCookie = "username";
  const profilepictureCookie = "profilepicture"
  const emailaddressCookie = "emailaddress"

  const [username, setUsername] = useState(getCookie(usernameCookie) || null);
  const [profilepicture, setProfilepicture] = useState(getCookie(profilepictureCookie) || null);
  const [emailaddress, setEmailaddress] = useState(getCookie(emailaddressCookie) || null);

  const signIn = useCallback((user) => {
    const decodedJwt = jwtDecode(user);
    document.cookie = usernameCookie + " = " + decodedJwt.name;
    document.cookie = profilepictureCookie + " = " + decodedJwt.picture;
    document.cookie = emailaddressCookie + " = " + decodedJwt.email;
    setUsername(decodedJwt.given_name);
    setProfilepicture(decodedJwt.picture);
    setEmailaddress(decodedJwt.email);
  }, [setUsername])

  const signOut = useCallback(() => {
    setUsername(null)
    setProfilepicture(null)
    deleteCookie(usernameCookie);
    deleteCookie(profilepictureCookie);
    deleteCookie(emailaddressCookie);
  }, [setUsername])

  const value = useMemo(() => ({username, profilepicture, emailaddress, signIn, signOut}), [username, profilepicture, emailaddress, signIn, signOut])

  return(
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )

};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function deleteCookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}