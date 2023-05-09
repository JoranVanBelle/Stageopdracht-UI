import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Notifications } from 'react-push-notification';
import './App.css';
import Home from './components/Home';
import WeatherScreen from './components/Pages/Detail/Weatherscreen';
import PostFeedbackScreen from './components/Pages/postFeedback/PostFeedbackScreen';
import EmailsubContainer from './components/Pages/EmailSubscription/EmailsubContainer';
import EmailSignoutContainer from './components/Pages/EmailSubscription/EmailSignoutContainer';
import Goodbye from './components/Pages/EmailSubscription/Goodbye';
import SettingsContainer from './components/Pages/Settings/SettingsContainer';



function App() {

  return (
      <div>
        <Notifications />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/location" element={<WeatherScreen />} />
          <Route path="/feedback" element={<PostFeedbackScreen />} />
          <Route path="/subscribe/:location" element={<EmailsubContainer/>} />
          <Route path="/:email/:location" element={<EmailSignoutContainer />} />
          <Route path='/goodbye' element={<Goodbye />} />
          <Route path="/settings" element={<SettingsContainer />} />
        </Routes>
      </div>
  );
}

export default App;
