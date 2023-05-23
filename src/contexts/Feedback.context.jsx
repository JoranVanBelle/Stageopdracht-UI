import { useState, createContext, useMemo, useCallback } from "react";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

  const [feedbackLocation, setFeedbackLocation] = useState(sessionStorage.getItem("currentLocation"));

  const updateFeedbackLocation = useCallback((current) => {
    setFeedbackLocation(current);
    sessionStorage.setItem('currentLocation', current);
  }, [setFeedbackLocation]);
  
  const value = useMemo (()=> ({feedbackLocation, updateFeedbackLocation}), [feedbackLocation, updateFeedbackLocation]);

  return (
    <FeedbackContext.Provider value={value}>
        {children}
    </FeedbackContext.Provider>
  );
};