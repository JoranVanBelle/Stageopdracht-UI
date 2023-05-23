import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { WeatherProvider } from './contexts/Weather.context';
import { FeedbackProvider } from './contexts/Feedback.context';
import './fonts/cymo/ABCFavorit-Bold.woff'
import { Notificationprovider } from './contexts/Notification.context';
import { UserProvider } from './contexts/User.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <WeatherProvider>
        <Notificationprovider>
          <FeedbackProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </FeedbackProvider>
        </Notificationprovider>
      </WeatherProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
