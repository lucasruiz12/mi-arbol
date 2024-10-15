import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingHome from './pages/LandingHome';
import Home from './pages/Home';
import InitQuestions from './pages/InitQuestions';
import RegisterForm from './pages/RegisterForm';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/initQuestions" element={<InitQuestions />} />
        <Route path="/registerForm" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
