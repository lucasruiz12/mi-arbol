import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingHome from './pages/LandingHome';
import Home from './pages/Home';
import FirstQuestions from './pages/FirstQuestions';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/initQuestions" element={<FirstQuestions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
