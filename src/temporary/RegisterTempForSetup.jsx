import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../api/authApi";
import { loginStart, registerSuccess, loginFailure } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate(); // ✅ Move this inside the component

  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    dispatch(loginStart());
  
    try {
      const data = await registerUser(fullName, email, password, confirmPassword);
      console.log("Full Registration Response:", data); // Log full response
  
      dispatch(registerSuccess(data));
  
      // ✅ Better check for the message before showing the alert
      if (data.message && data.message.toLowerCase().includes("failed to send otp")) {
        console.warn("Warning: Backend says OTP failed, but checking further...");
        alert("Registration successful, but OTP email failed. Contact support.");
      }
  
      navigate("/verify-otp", { state: { email } }); // ✅ Navigate to OTP page
    } catch (err) {
      console.error("Registration error:", err);
      dispatch(loginFailure(err));
    }
  };  

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">Sign Up</h2>

      {error && <p className="text-red-500">{error}</p>}
      
      <form onSubmit={handleRegister} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-2 rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>

        <div>
          <p>Already Registered? <a href="/login">Login</a></p>
        </div>

      </form>
    </div>
  );
};

export default Register;