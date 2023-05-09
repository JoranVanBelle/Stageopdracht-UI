import { useState, useEffect } from "react";
import ToggleNotifications from "../../Buttons/ToggleNotifications";
import addNotification from 'react-push-notification';

export default function NotificationContainer() {
  
  const [notificationData, setNotificationData] = useState(null)
  const [receiveNotifications, setReceiveNotifications] = useState(false);

//   useEffect(() => {  
//     const sse = new EventSource(`${process.env.REACT_APP_API_BASE_URL}/notification/weather`);  
//     function getRealtimeData(data) {
//       addNotification({
//         title: `Kiteable weather detected`,
//         subtitle: `at neverland`
//       })
//     }  
//   // sse.onmessage = e => getRealtimeData(JSON.parse(e.data));
//   sse.onmessage = e => getRealtimeData(console.log(e));
//   sse.onerror = (error) => {
//   // error log here 
//   console.error("Something went wrong, the server-sent events will not longer be pushed to you: " + error.data)
//   sse.close();
// }
//   return () => {
//     sse.close();
//   };}, []);

  const handleOnchange = () => {
    setReceiveNotifications(!receiveNotifications);
    
    const sse = new EventSource(`${process.env.REACT_APP_API_BASE_URL}/notification/weather`);
    
    console.log(sse)
    function getRealtimeData(data) {
      addNotification({
        title: `Kiteable weather detected`,
        subtitle: `at neverland`
      })
    }  

    if(receiveNotifications) {
      sse.onmessage = e => getRealtimeData(console.log(e)); 
    } else {
      sse.close()
    }
  }

  return(
    <div>
      <ToggleNotifications label={"weather"} handleOnchange={() => handleOnchange()} />
    </div>
  );
}