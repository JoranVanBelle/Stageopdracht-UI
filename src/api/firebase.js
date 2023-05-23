// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

// Initialize Firebase
initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: process.env.REACT_APP_VAPID_KEY })
    .then((currentToken) => {
      if (currentToken) {
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
      }
    })
    .catch((err) => {
      console.err('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve, reject) => {
    onMessage(messaging, (payload, err) => {
      if(err) console.error(err)
      resolve(payload);
    });
  });