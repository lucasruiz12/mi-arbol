import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingHome from './pages/LandingHome';
import InitQuestions from './pages/InitQuestions';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import NeutralCarbon from './pages/NeutralCarbon';
// import MySubscription from './pages/MySubscription';
import MySeeds from './pages/MySeeds';
import SuccessfulPayment from './pages/SuccessfulPayment';
import ViewInProgress from './components/ViewInProgress';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/initQuestions" element={<InitQuestions />} />
        <Route path="/registerForm" element={<RegisterForm />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home" element={<ViewInProgress />} /> */}
        <Route path="/neutralCarbon" element={<NeutralCarbon />} />
        {/* <Route path="/mySubscription" element={<MySubscription />} /> */}
        <Route path="/mySubscription" element={<ViewInProgress />} />
        <Route path="/mySeeds" element={<MySeeds />} />
        <Route path="/successfulPayment" element={<SuccessfulPayment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
