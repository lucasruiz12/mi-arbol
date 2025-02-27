import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingHome from './pages/LandingHome';
import InitQuestions from './pages/InitQuestions';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import NeutralCarbon from './pages/NeutralCarbon';
import MySubscription from './pages/MySubscription';
// import MySeeds from './pages/MySeeds';
import SubscriptionList from './pages/SubscriptionList';
import SuccessPayment from './pages/SuccessPayment';
import FailurePayment from './pages/FailurePayment';
import ViewInProgress from './components/ViewInProgress';
import Watermark from './components/Watermark';
import LoadingUser from './pages/LoadingUser';

import { videoCover, videoCoverMovil } from './helpers/fullVideo';
import './App.css';

function App() {

  document.addEventListener("touchmove", function (event) {
    if (window.scrollY === 0) {
      event.preventDefault();
    }
  }, { passive: false });

  // useEffect(() => {
  //   const unsubscribe = onMessage(messaging, (payload) => {
  //     console.log("Notificación en primer plano recibida:", payload);
  //     if(payload?.notification){
  //       new Notification(payload.notification.title, {
  //         body: payload.notification.body,
  //         icon: payload.notification.icon || "/favicon-192x192.png",
  //       });
  //     };
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <BrowserRouter>
      <video autoPlay muted loop className="app-video">
        <source src={window.innerWidth >= 768 ? videoCover : videoCoverMovil} type="video/mp4" />
      </video>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/initQuestions" element={<InitQuestions />} />
        <Route path="/registerForm" element={<RegisterForm />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/loadingUser" element={<LoadingUser />} />
        <Route path="/neutralCarbon" element={<NeutralCarbon />} />
        <Route path="/mySubscription" element={<MySubscription />} />
        <Route path="/subscriptionPlans" element={<SubscriptionList />} />
        {/* <Route path="/mySeeds" element={<MySeeds />} /> */}
        <Route path="/mySeeds" element={<ViewInProgress />} />
        <Route path="/successPayment" element={<SuccessPayment />} />
        <Route path="/failurePayment" element={<FailurePayment />} />
      </Routes>
      <Watermark />
    </BrowserRouter>
  );
};

export default App;
