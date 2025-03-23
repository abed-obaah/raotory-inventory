import { useState } from "react";
import { useSelector } from "react-redux";
import StoreSetupSuccess from "/src/assets/store-setup-success.png";
import { FiArrowLeft } from "react-icons/fi";
import SingleStorePage01 from "./SingleStorePage01";
import SingleStorePage03 from "./SingleStorePage03";
import axios from "axios";

export default function SingleStorePage02() {
    const [view, setView] = useState("single-store-page-02");
    const [loading, setLoading] = useState(false);

    // Get user email from Redux store
    const { user } = useSelector((state) => state.auth);
    const userEmail = user?.email || ""; // Fallback to empty string if undefined

    // Function to initiate Paystack payment
    const initiatePayment = async () => {
        if (!userEmail) {
            alert("User email not found. Please log in again.");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(
                "https://api.paystack.co/transaction/initialize",
                {
                    email: userEmail, // Dynamic user email from Redux
                    amount: 5000 * 100, // Amount in kobo (5000 NGN)
                    callback_url: "https://raotory.com/apis/payment-success.php"
                },
                {
                    headers: {
                        Authorization: `Bearer sk_test_a084928967112c0e9daf681c5a88ccaab14eee2b`, // Replace with your Paystack Secret Key
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log("Paystack Response:", response.data);

            // Redirect to Paystack payment page
            window.location.href = response.data.data.authorization_url;
        } catch (error) {
            console.error("Error initiating payment:", error);
            alert("Payment failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {view === "single-store-page-02" && (
                <div id="single-store-page-02">

                    {/* Back Button */}
                    <button 
                        onClick={() => setView("single-store-page-01")}
                        className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
                    >
                        <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                        Back
                    </button>

                    {/* Single store set up congratulations */}
                    <div className="flex flex-col w-full max-w-[536px] mx-auto mt-10">
                        
                        {/* Heading */}
                        <div className="mb-7 text-center">
                            <h2 className="text-2xl font-semibold mb-2">
                                Multi store
                            </h2>
                            <p className="text-gray-600 text-base max-w-[468px] mx-auto">
                                This gives you the ability to set up your store and inventory appropriately.
                            </p>
                        </div>
            
                        {/* Form */}
                        <div className="w-full border border-black-10-percent rounded-3xl p-10.5">
                            <form action="#" method="POST">

                                {/* Image */}
                                <div>
                                    <img src={StoreSetupSuccess} alt="Success" className="w-full h-auto object-cover" />
                                </div>
                                <h4 className="text-4xl font-bold text-center mb-4.5">Yay!</h4>
                                <p className="text-center">
                                    Congratulations, you have successfully set up your store on Raotory, your stock-keeping buddy!
                                </p>

                                {/* Button */}
                                <div className="mb-4 mt-10">
                                    <button
                                        type="button"
                                        onClick={initiatePayment}
                                        disabled={loading}
                                        className={`flex w-full justify-center ${
                                            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-primary hover:bg-blue-0e90da"
                                        } focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-[10px] text-base p-4 text-center`}
                                    >
                                        {loading ? "Processing..." : "Continue"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Next button (Hidden) */}
                    <div className="w-full max-w-[340px] mx-auto mt-10 hidden">
                        <button
                            onClick={() => setView("single-store-page-03")}
                            className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                        >
                            Next
                        </button>
                    </div>

                </div>
            )}

            {view === "multi-store-page-02" && <MultiStorePage02 setView={setView} />}
            {view === "multi-store-page-04" && <MultiStorePage04 setView={setView} />}
        </>
    );
}
