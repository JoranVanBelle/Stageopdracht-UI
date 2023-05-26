import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import WeatherScreen from './components/Pages/Detail/Weatherscreen';
import PostFeedbackScreen from './components/Pages/postFeedback/PostFeedbackScreen';
import EmailsubContainer from './components/Pages/EmailSubscription/EmailsubContainer';
import EmailSignoutContainer from './components/Pages/EmailSubscription/EmailSignoutContainer';
import Goodbye from './components/Pages/EmailSubscription/Goodbye';
import SettingsContainer from './components/Pages/Settings/SettingsContainer';
import Loginpage from './components/Pages/Login/Loginpage';
import RequireAuth from './components/Authentication/RequireAuth';
import MapsContainer from './components/Pages/Maps/MapsContainer';

function App() {

  return (
      <div>
        <Routes>
          <Route index element={
          <RequireAuth>
            <Home />
          </RequireAuth>} />

          <Route path="/location" element={
            <RequireAuth>
              <WeatherScreen />
            </RequireAuth>} />

          <Route path="/feedback" element={
          <RequireAuth>
            <PostFeedbackScreen />
          </RequireAuth>} />

          <Route path="/subscribe/:location" element={
            <RequireAuth>
              <EmailsubContainer/>
            </RequireAuth>} />

          <Route path="/:email/:location" element={
            <RequireAuth>
              <EmailSignoutContainer />
            </RequireAuth>} />

          <Route path='/goodbye' element={
              <Goodbye />} />

          <Route path="/settings" element={
            <RequireAuth>
              <SettingsContainer />
            </RequireAuth>
          } />

          <Route path="/login" element={<Loginpage />} />
          <Route path="/temp" element={<MapsContainer />} />
        </Routes>
      </div>
  );
}

export default App;
