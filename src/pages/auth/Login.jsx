import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../../redux/authSlice";
import { loginUser } from "../../api/authApi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import RaotoryLogoAndNameBlue from "../../assets/raotory-logo-name-blue.svg";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error } = useSelector((state) => state.auth);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      dispatch(loginStart());
      try {
        const data = await loginUser(email, password);
        dispatch(loginSuccess(data));
        navigate("/onboarding");
      } catch (err) {
        dispatch(loginFailure(err));
      }
    };

    return (
        <section className='section-px'>
            <div className="flex flex-col w-full max-w-[536px] mx-auto p-10.5 border border-black-10-percent rounded-3xl my-10">
                
                {/* Heading */}
                <div className="mb-7">
                    <h2 className="text-[2rem] font-semibold">Login</h2>
                    <p className="text-gray-600">Please enter your login credentials correctly.</p>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
    
                {/* Form */}
                <div className="w-full">
                  <form onSubmit={handleLogin} className="space-y-0">
                    {/* Email */}
                    <div className="mb-6">
                        <input 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4" 
                            placeholder="Email address" 
                            required 
                        />
                    </div>
                    {/* Password */}
                    <div className="relative mb-3">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 pr-12" 
                        placeholder="Password" 
                        required 
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                      </button>
                    </div>
                    {/* Forgot password */}
                    <div className="mt-0">
                      <a href="#" className="font-medium text-blue-001b2a hover:text-blue-29a8f1">Forgot password?</a>
                    </div>
                    {/* Button */}
                    <div className="mb-4 mt-14.5">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex w-full justify-center font-semibold rounded-[10px] text-base p-4 text-center bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
                      >
                        {isLoading ? "Logging in..." : "Login"}
                      </button>
                    </div>
                  </form>
                  {/* Register option */}
                  <p className="text-center text-base text-gray-303a4d font-semibold">
                    Don’t have an account?{' '}
                    <a href="/register" className="font-semibold text-blue-29a8f1 hover:text-blue-0e90da">Register</a>
                  </p>
                </div>

                {/* Company logo */}
                <div className="mt-8.5">
                    <a href="/">
                        <img
                            alt="Raotory logo"
                            src={RaotoryLogoAndNameBlue}
                            className="mx-auto h-7.5 w-auto"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}