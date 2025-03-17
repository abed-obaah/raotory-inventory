import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'
import { BsShieldFillCheck } from "react-icons/bs";
import SupportIcon from '../../assets/support-icon.svg';
import { GoStarFill } from "react-icons/go";
import { IoIosHeart } from "react-icons/io";

export default function HomeFeatures() {
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
        {/* Section wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-11.5">
            {/* Left side */}
            <div className="flex flex-col md:flex-1">
                <p className="text-lg lg:text-3xl text-gray-600 opacity-50">
                    Features
                </p>
                <h2 className="mt-2 max-w-md text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Why Manage Your Inventory With Raotory?
                </h2>
                <p className="mt-6 text-2xl md:text-3xl text-gray-600 opacity-50">
                    We empower businesses to achieve operational efficiency and growth by providing them with intelligent, easy-to-use inventory management solutions.
                </p>
                {/* Button */}
                <div className='flex mt-6 md:mt-10'>
                    <button
                        onClick={handleGetStarted}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-semibold transition cursor-pointer w-full sm:w-max"
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* Right side */}
            <div className='md:flex-1 flex flex-col gap-8'>
                {/* Cards 01 and 02 */}
                <div className='flex flex-col sm:flex-row items-center gap-8'>
                    {/* Card 01 */}
                    <div class="flex flex-col items-center justify-center self-end gap-3 w-full md:w-[260px] h-auto md:h-[276px] px-3.5 py-4.5 text-center bg-white border border-black-10-percent rounded-[46px] dark:bg-white dark:border-black-10-percent">
                        <h5 class="text-lg font-medium text-gray-600 leading-[22px] dark:text-gray-600">
                            Real-Time Inventory Tracking
                        </h5>
                        <BsShieldFillCheck className='size-16 stroke-gray-b4b4b4 fill-gray-dbdbdb' strokeWidth={0.2} />
                        <p class="text-sm font-normal text-gray-600 dark:text-gray-600">
                            Track your stock levels across multiple locations in real-time, so you never run out of the products your customers need.
                        </p>
                    </div>

                    {/* Card 02 */}
                    <div class="flex flex-col items-center justify-center gap-3 w-full md:w-[294px] h-auto md:h-[312px] px-3.5 py-4.5 text-center bg-blue-29a8f1 border border-black-10-percent rounded-[46px] dark:bg-blue-29a8f1 dark:border-black-10-percent">
                        <h5 class="text-lg md:text-[22px] font-semibold text-white leading-[22px] dark:text-white">
                            Powerful Analytics and Reporting
                        </h5>
                        <img src={SupportIcon} alt="Support icon" className='w-full h-auto max-w-[104px]' />
                        <p class="text-sm font-normal text-white dark:text-white">
                            Analyze your inventory performance with comprehensive reports on turnover rates, holding costs, and demand forecasts.
                        </p>
                    </div>
                </div>

                {/* Cards 03 and 04 */}
                <div className='flex flex-col sm:flex-row items-center gap-8'>
                    {/* Card 03 */}
                    <div class="flex flex-col items-center justify-center gap-3 w-full md:w-[260px] h-auto md:h-[276px] px-3.5 py-4.5 text-center bg-white border border-black-10-percent rounded-[46px] dark:bg-white dark:border-black-10-percent">
                        <h5 class="text-lg font-medium text-gray-600 leading-[22px] dark:text-gray-600">
                            Automated Alerts and Notifications
                        </h5>
                        {/* <ShieldCheckIcon className="size-20 stroke-gray-b4b4b4 fill-gray-dbdbdb" strokeWidth={0.5} /> */}
                        <GoStarFill className="size-18 stroke-gray-b4b4b4 fill-gray-dbdbdb" strokeWidth={0.5} />
                        <p class="text-sm font-normal text-gray-600 dark:text-gray-600">
                            Receive low-stock alerts, expiration date reminders, and re-order suggestions to help you stay ahead of your inventory needs.
                        </p>
                    </div>

                    {/* Card 04 */}
                    <div class="flex flex-col items-center justify-center gap-3 w-full md:w-[260px] h-auto md:h-[276px] px-3.5 py-4.5 text-center bg-white border border-black-10-percent rounded-[46px] dark:bg-white dark:border-black-10-percent">
                        <h5 class="text-lg font-medium text-gray-600 leading-[22px] dark:text-gray-600">
                            Simplified Order Management
                        </h5>
                        <IoIosHeart className="size-20 stroke-gray-b4b4b4 fill-gray-dbdbdb" strokeWidth={0.5} />
                        <p class="text-sm font-normal text-gray-600 dark:text-gray-600">
                            Easily manage orders, returns, and transfers with a user-friendly interface designed to reduce errors and speed up operations
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}