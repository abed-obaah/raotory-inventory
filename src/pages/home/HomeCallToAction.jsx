import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonRoundedSolid from "../../components/ButtonRoundedSolid";

export default function HomeCallToAction() {
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
      <div className="text-center">
        <h2 className="text-4xl lg:text-[4rem] font-semibold tracking-tight text-gray-900 lg:leading-15">
          <span className="text-gray-600">
            Ready to Streamline Your <span className="text-gray-900">Inventory Management?</span>
          </span>
        </h2>
        <div className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-x-5 gap-y-4">
          <button
            onClick={handleGetStarted}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4.5 md:px-11 py-4 rounded-full font-semibold transition cursor-pointer w-full sm:w-max"
          >
            Get Started
          </button>
          <ButtonRoundedSolid bgColor="bg-gray-d9d9d9" hoverColor="hover:bg-gray-400" textColor="text-gray-600" text="Learn More" href="/about" />
        </div>
      </div>
    </section>
  );
}