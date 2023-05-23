// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBvMICKrxYiZuYkiuG_vQFIllLP_EISP0o",
  authDomain: "kitefever-d9100.firebaseapp.com",
  projectId: "kitefever-d9100",
  storageBucket: "kitefever-d9100.appspot.com",
  messagingSenderId: "239840668285",
  appId: "1:239840668285:web:312a30db6182da65755f14",
  measurementId: "G-2QRGTJ3TVZ"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});