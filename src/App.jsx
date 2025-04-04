import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Register from "./pages/auth/Register";
import  ForgotPasswordScreen from "./pages/forgotPassword/index";
import  SetPasswordScreen from "./pages/forgotPassword/SetPassword";
import OtpVerification from "./pages/auth/OtpVerification";
import OtpVerificationReset from "./pages/forgotPassword/OtpVerification";
import Login from "./pages/auth/Login";
import Onboarding from './pages/onboarding/Onboarding';
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/set-password" element={<SetPasswordScreen />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/reset-otp" element={<OtpVerificationReset />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

      </Routes>
    </Router>
  );
}

export default App;