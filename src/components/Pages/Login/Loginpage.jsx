import { useEffect, useContext, useCallback } from "react";
import { UserContext } from '../../../contexts/User.context';
import { Navigate } from "react-router";
import Appname from "../../Appname";

export default function Loginpage() {
  

  const { username, signIn } = useContext(UserContext);

  const handleCallbackResponse = useCallback((response) => {
    signIn(response.credential);
  }, [signIn]);

  useEffect(() => {
    console.log(`client_id: ${process.env.REACT_APP_GOOGLE_CLIENT_ID}`)
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "filled_black", size: "large", shape: "pill", width:"300"}
    );
    
    window.google.accounts.id.prompt();
  }, [handleCallbackResponse]);
  return(
    <div style={{textAlign: "center", overflowY: "hidden"}}>
      <header>
        <Appname />
      </header>
        <div style={{margin: "10% 10%"}}>
          Welcom to KiteFever.<br/> 
          Login using your google account and watch where you are able to kite.<br/><br/>
          You can also subscribe to emails, so you get one every time the weather is good to go kitesurfing.<br/><br/>
          Post feedback about a certain location and read the feedback of the others
        </div>
        <div id="signInDiv" className="font-face-cymo" style={{display: "flex", justifyContent: "center", flexGrow: "1"}}></div>
      {username !== null &&
        <Navigate replace to="/" />
      }
    </div>
  );
}