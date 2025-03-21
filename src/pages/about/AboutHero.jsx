import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'

export default function AboutHero() {
    // Get started button
    const user = useSelector((state) => state.auth.user); // Check if user is logged in
    const navigate = useNavigate(); // Hook for navigation

    const handleGetStarted = () => {
        if (user) {
        navigate("/dashboard"); // Redirect to dashboard if logged in
        } else {
        navigate("/register"); // Redirect to register if logged out
        }
    };

  return (
    <section className="section-px section-mt max-w-6xl mx-auto">
        <div className="flex flex-col max-w-3xl">
            <p className="text-lg md:text-3xl text-gray-600 opacity-50">
                About Us
            </p>
            <h1 className="mt-2 text-5xl lg:text-7xl text-gray-900 font-semibold tracking-tight text-pretty">
                Raotory <span className='text-gray-600'>Helps You Do the Best</span> Inventory <span className='text-gray-600'>Management</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 font-medium opacity-50 max-w-xl">
                We’re the collaborative inventory management platform of choice for 500+ companies in over 140 different countries.
            </p>
            {/* Button */}
            <div className='flex mt-10'>
                <button
                    onClick={handleGetStarted}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-semibold transition cursor-pointer w-full sm:w-max"
                >
                    Try Raotory Now!
                </button>
            </div>
        </div>
    </section>
  )
}