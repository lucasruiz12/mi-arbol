import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingHome from './pages/LandingHome';
import InitQuestions from './pages/InitQuestions';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import NeutralCarbon from './pages/NeutralCarbon';
import MySeeds from './pages/MySeeds';
import SubscriptionList from './pages/SubscriptionList';
import SuccessPayment from './pages/SuccessPayment';
import FailurePayment from './pages/FailurePayment';
import ViewInProgress from './components/ViewInProgress';
import Watermark from './components/Watermark';
import LoadingUser from './pages/LoadingUser';
import { videoCover, videoCoverMovil } from './helpers/fullVideo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="video-container position-fixed top-0 start-0 w-100 h-100 overflow-hidden">
        <video autoPlay muted loop className="app-video w-100 h-100 object-fit-cover">
          <source src={videoCoverMovil} media="(max-width: 767px)" type="video/mp4" />
          <source src={videoCover} media="(min-width: 768px)" type="video/mp4" />
        </video>
      </div>
      <div className="content-container position-relative">
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/initQuestions" element={<InitQuestions />} />
          <Route path="/registerForm" element={<RegisterForm />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loadingUser" element={<LoadingUser />} />
          <Route path="/neutralCarbon" element={<NeutralCarbon />} />
          <Route path="/subscriptionPlans" element={<SubscriptionList />} />
          <Route path="/mySeeds" element={<MySeeds />} />
          <Route path="/successPayment" element={<SuccessPayment />} />
          <Route path="/failurePayment" element={<FailurePayment />} />
          <Route path="*" element={<ViewInProgress />} />
        </Routes>
        <Watermark />
      </div>
    </BrowserRouter>
  );
}

export default App;