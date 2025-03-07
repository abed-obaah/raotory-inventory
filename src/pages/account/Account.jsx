import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import EmailVerification from "./EmailVerification";

const Account = () => {
  return (
    <>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/email-verification" element={<EmailVerification />} />
        </Routes>
    </>
  );
};

export default Account;