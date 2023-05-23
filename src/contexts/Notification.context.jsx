import { useState, createContext, useCallback, useMemo } from "react";

export const NotificationContext = createContext();

export const Notificationprovider = ({children}) => {

  const [notificationsNieuwpoort, setNotificationsNieuwpoort] = useState(false);

  const updateNotificationsNieuwpoort = useCallback((currentNotifications) => {
    setNotificationsNieuwpoort(currentNotifications);
    sessionStorage.setItem("notificationsNieuwpoort", currentNotifications)
  }, [setNotificationsNieuwpoort]);

  const value = useMemo(() => ({notificationsNieuwpoort, updateNotificationsNieuwpoort}), [notificationsNieuwpoort, updateNotificationsNieuwpoort])

  return(
    <NotificationContext.Provider value={value} >
      {children}
    </NotificationContext.Provider>
  )
}