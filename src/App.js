import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import WeatherScreen from './components/Detail/Weatherscreen';

function App() {
  return (
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/detail/:dataID" element={<WeatherScreen />} />
        </Routes>
      </div>
  );
}

export default App;
