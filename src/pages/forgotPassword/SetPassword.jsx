import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function SetPassword() {
    const location = useLocation();
    const email = location.state?.email || "";
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSetPassword = async (e) => {
        e.preventDefault();
        console.log("Setting password for:", email);
        // Call API to set new password
    };
    return (
        <section className='section-px'>
            <div className="flex flex-col w-full max-w-[536px] mx-auto p-10.5 border border-black-10-percent rounded-3xl my-10">
                
                {/* Heading */}
                <div className="mb-13">
                    <h2 className="text-[2rem] font-semibold">
                        Set Password
                    </h2>
                    <p className="text-gray-600">
                     Set up a secure password to protect your account. Choose a strong combination of letters, numbers, and symbols for added security
                    </p>
                </div>

                {/* Form */}
                <div className="w-full">
                    <form onSubmit={handleSetPassword} className="space-y-52">
                        {/* OTP Code */}
                        <div>
                            <input 
                                type="text" 
                                className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575" 
                                placeholder="New Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                            <input 
                                type="text" 
                                className="bg-white  mt-10 border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575" 
                                placeholder="Confirm Password" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required 
                            />
                            {/* Display error message */}
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </div>

                        {/* Button */}
                        <div className="mb-4">
                        <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg"
                        disabled={loading}
                    >
                        {loading ? "Updating password....." : "Continue"}
                    </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
    // return (
    //     <div>
    //         <h2>Set Your Password</h2>
    //         <form onSubmit={handleSetPassword}>
    //             <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    //             <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
    //             <button type="submit">Submit</button>
    //         </form>
    //     </div>
    // );
}
