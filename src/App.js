import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import WeatherScreen from './components/Detail/Weatherscreen';
import PostFeedbackScreen from './components/postFeedback/PostFeedbackScreen';

function App() {
  return (
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/location" element={<WeatherScreen />} />
          <Route path="/feedback" element={<PostFeedbackScreen />} />
        </Routes>
      </div>
  );
}

export default App;
