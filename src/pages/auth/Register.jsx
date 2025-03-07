import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../api/authApi";
import { loginStart, registerSuccess, loginFailure } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import RaotoryLogoAndNameBlue from "../../assets/raotory-logo-name-blue.svg";

export default function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        dispatch(loginStart());

        try {
            const data = await registerUser(fullName, email, password, confirmPassword);
            console.log("Full Registration Response:", data);

            dispatch(registerSuccess(data));

            if (data.message && data.message.toLowerCase().includes("failed to send otp")) {
                console.warn("Warning: Backend says OTP failed, but checking further...");
                alert("Registration successful, but OTP email failed. Contact support.");
            }

            navigate("/verify-otp", { state: { email } });
        } catch (err) {
            console.error("Registration error:", err);
            dispatch(loginFailure(err));
        }
    };

    return (
        <section className="section-px">
            <div className="flex flex-col w-full max-w-[536px] mx-auto p-10.5 border border-black-10-percent rounded-3xl my-10">
                
                {/* Heading */}
                <div className="mb-7">
                    <h2 className="text-[2rem] font-semibold">Register</h2>
                    <p className="text-gray-600">Please enter your registration details correctly</p>

                    {/* Error message */}
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                {/* Form */}
                <div className="w-full">
                    <form onSubmit={handleRegister} className="space-y-6">
                        {/* Name */}
                        <div>
                            <input 
                                type="text" 
                                name="name" 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4" 
                                placeholder="Full name" 
                                required 
                            />
                        </div>
                        {/* Email */}
                        <div>
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
                        <div className="relative">
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
                        {/* Confirm Password */}
                        <div className="relative">
                            <input 
                                type={showConfirmPassword ? "text" : "password"} 
                                name="confirmPassword" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 pr-12" 
                                placeholder="Confirm password" 
                                required 
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                            </button>
                        </div>
                        {/* Terms and conditions */}
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input 
                                    id="" 
                                    name=""
                                    type="checkbox" 
                                    className="w-4 h-4 border border-black-10-percent rounded bg-white focus:outline-none focus:ring-3 focus:ring-blue-300" 
                                    required 
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="" className="font-normal text-blue-001b2a">
                                    I accept the <a className="font-medium text-blue-001b2a hover:underline" href="#">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>
                        {/* Button */}
                        <div className="mb-4 mt-10">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex w-full justify-center font-semibold rounded-[10px] text-base p-4 text-center bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
                            >
                                {isLoading ? "Registering..." : "Register"}
                            </button>
                        </div>
                    </form>
                    {/* Log in option */}
                    <p className="text-center text-base text-gray-303a4d font-semibold">
                        Already registered?{' '}
                        <a href="/login" className="font-semibold text-blue-29a8f1 hover:text-blue-0e90da">
                            Login
                        </a>
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