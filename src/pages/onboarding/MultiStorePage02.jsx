import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useSelector } from "react-redux"; // Import useSelector for Redux
import MultiStorePage01 from "./MultiStorePage01";
import MultiStorePage03 from "./MultiStorePage03";

export default function MultiStorePage02({ setStep, storeCount, setStoreCount }) {
    const { user } = useSelector((state) => state.auth); // Get user from Redux state
    const userEmail = user?.email || ""; // Fallback to empty string if undefined
    
    const [view, setView] = useState("multi-store-page-02");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [stores, setStores] = useState(
        Array.from({ length: storeCount }, () => ({
            businessName: "",
            location: "",
            phoneNumber: "",
        }))
    );

    const [termsAccepted, setTermsAccepted] = useState(false);

    const isFormValid =
        stores.every(
            (store) => store.businessName && store.location && store.phoneNumber
        ) && termsAccepted && userEmail; // Ensure userEmail is not empty

    const handleChange = (index, field, value) => {
        setStores((prev) =>
            prev.map((store, i) =>
                i === index ? { ...store, [field]: value } : store
            )
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;
        setLoading(true);
        setError(null);

        try {
            const payload = {
                email: userEmail, // Include user email
                stores: stores.map(store => ({
                    business_name: store.businessName,
                    location: store.location,
                    phone: store.phoneNumber
                }))
            };

            const response = await fetch("https://raotory.com/apis/multistore.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to create stores. Please try again.");
            }

            const data = await response.json();
            console.log("Success:", data);

            if (data.success) {
                setView("multi-store-page-03"); // Go to next page if successful
                setStep((prev) => prev + 1);
            } else {
                setError(data.message || "Something went wrong.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {view === "multi-store-page-02" && (
                <div id="multi-store-page-02">

                    {/* Back Button */}
                    <button
                        onClick={() => setView("multi-store-page-01")}
                        className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
                    >
                        <FiArrowLeft className="text-dark-primary text-xl mr-1" />
                        Back
                    </button>

                    <div className="flex flex-col w-full max-w-[536px] mx-auto mt-10">
                        <div className="mb-7 text-center">
                            <h2 className="text-2xl font-semibold mb-2">Multi store</h2>
                            <p className="text-gray-600 text-base max-w-[468px] mx-auto">
                                This gives you the ability to set up your store and inventory appropriately.
                            </p>
                        </div>

                        <div className="w-full border border-black-10-percent rounded-3xl p-6 lg:p-10.5">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {stores.map((store, index) => (
                                    <div key={index} className="space-y-4">
                                        <h3 className="text-lg font-semibold">Store {index + 1}</h3>

                                        <input
                                            type="text"
                                            value={store.businessName}
                                            onChange={(e) =>
                                                handleChange(index, "businessName", e.target.value)
                                            }
                                            className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                            placeholder="Business name"
                                            required
                                        />

                                        <input
                                            type="text"
                                            value={store.location}
                                            onChange={(e) =>
                                                handleChange(index, "location", e.target.value)
                                            }
                                            className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                            placeholder="Location"
                                            required
                                        />

                                        <input
                                            type="tel"
                                            value={store.phoneNumber}
                                            onChange={(e) =>
                                                handleChange(index, "phoneNumber", e.target.value)
                                            }
                                            className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                            placeholder="Phone number"
                                            required
                                        />
                                    </div>
                                ))}

                                <div className="flex items-center mt-5">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        checked={termsAccepted}
                                        onChange={(e) => setTermsAccepted(e.target.checked)}
                                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2"
                                        required
                                    />
                                    <label htmlFor="terms" className="ml-2 text-gray-700 text-sm">
                                        Agree to create store on Raotory
                                    </label>
                                </div>

                                {error && (
                                    <p className="text-red-500 text-sm mt-2">{error}</p>
                                )}

                                <div className="mb-4 mt-6">
                                    <button
                                        type="submit"
                                        disabled={!isFormValid || loading}
                                        className={`flex w-full justify-center font-semibold rounded-[10px] text-base p-4 text-center me-2 
                                        ${isFormValid ? "bg-[#29A8F1] text-white hover:bg-[#1F8BCC]" : "bg-gray-d9d9d9 text-gray-500 cursor-not-allowed"}`}
                                    >
                                        {loading ? "Submitting..." : "Continue"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {view === "multi-store-page-01" && <MultiStorePage01 setView={setView} setStoreCount={setStoreCount} />}
            {view === "multi-store-page-03" && <MultiStorePage03 setView={setView} />}
        </>
    );
}
