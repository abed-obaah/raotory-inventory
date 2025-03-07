import { useState } from "react";
import { useDispatch } from "react-redux";
import { verifyOTP } from "../../api/authApi";
import { registerSuccess, loginFailure } from "../../redux/authSlice";
import { useNavigate, useLocation } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const data = await verifyOTP(email, otp);
      console.log("OTP Verification response:", data);
      dispatch(registerSuccess(data)); // Assuming API returns user data and token
      navigate("/dashboard"); // Redirect to dashboard or homepage
    } catch (err) {
      console.error("OTP Verification error:", err);
      dispatch(loginFailure(err));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">Verify OTP</h2>
      <p className="text-gray-600">Enter the OTP sent to your email</p>
      <form onSubmit={handleVerifyOtp} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter OTP"
          className="border p-2 rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OtpVerification;