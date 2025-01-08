import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingHome from './pages/LandingHome';
import InitQuestions from './pages/InitQuestions';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import NeutralCarbon from './pages/NeutralCarbon';
// import MySubscription from './pages/MySubscription';
import MySeeds from './pages/MySeeds';
import SubscriptionList from './pages/SubscriptionList';
import SuccessfulPayment from './pages/SuccessfulPayment';
import ViewInProgress from './components/ViewInProgress';
import Watermark from './components/Watermark';
import LoadingUser from './pages/LoadingUser';

import './App.css';
import { videoCover } from './helpers/fullVideo';

function App() {
  return (
    <BrowserRouter>
      <video autoPlay muted loop className="app-video">
        {/* <source src={window.innerWidth >= 768 ? loginVideo : loginMobileVideo} type="video/mp4" /> */}
        <source src={window.innerWidth >= 768 ? videoCover : videoCover} type="video/mp4" />
      </video>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/initQuestions" element={<InitQuestions />} />
        <Route path="/registerForm" element={<RegisterForm />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/loadingUser" element={<LoadingUser />} />
        <Route path="/neutralCarbon" element={<NeutralCarbon />} />
        {/* <Route path="/mySubscription" element={<MySubscription />} /> */}
        <Route path="/subscriptionPlans" element={<SubscriptionList />} />
        <Route path="/mySubscription" element={<ViewInProgress />} />
        <Route path="/mySeeds" element={<MySeeds />} />
        <Route path="/successfulPayment" element={<SuccessfulPayment />} />
      </Routes>
      {/* {
        !locationsWithoutWatermark.includes(window.location.pathname) && <Watermark />
      } */}
      <Watermark currentLocation={window.location.pathname} />
    </BrowserRouter>
  );
};

export default App;
