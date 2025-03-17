import { useState } from "react";
import OnboardingHome from "./OnboardingHome";
import MultiStorePage02 from "./MultiStorePage02";
import { FiArrowLeft } from "react-icons/fi";

export default function MultiStorePage01({ setStoreCount }) {
    const [view, setView] = useState("multi-store-page-01");

    const [selectedStore, setSelectedStore] = useState(null);

    const handleSelect = (value) => {
        setSelectedStore(value);
        setStoreCount(value); // Update store count in parent
    };

    return (
        <>
            {view === "multi-store-page-01" && (
                <div id="multi-store-page-01">

                    {/* Back Button */}
                    <button 
                        onClick={() => setView("onboarding-home")}
                        className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
                    >
                        <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                        Back
                    </button>

                    {/* Number of store selection option */}
                    <div className="flex flex-col w-full max-w-[536px] mx-auto mt-10">
                        {/* Heading */}
                        <div className="mb-7 text-center">
                            <h2 className="text-2xl font-semibold mb-2">Multi store</h2>
                            <p className="text-gray-600 text-base max-w-[468px] mx-auto">
                                This gives you the ability to set up your store and inventory appropriately.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="w-full border border-black-10-percent rounded-3xl p-10.5">
                            <form action="#" method="POST" className="space-y-6">
                                {/* Number of stores option */}
                                <div className="flex justify-between gap-4">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <label key={num} className="w-full">
                                            <input
                                                type="radio"
                                                name="storeCount"
                                                value={num}
                                                className="hidden"
                                                checked={selectedStore === num}
                                                onChange={() => handleSelect(num)}
                                            />
                                            <div
                                                className={`flex items-center justify-center border border-black-10-percent rounded-[10px] h-17.5 w-full text-base font-semibold cursor-pointer transition-all
                                                ${selectedStore === num ? "bg-[#29A8F1] text-white" : "text-blue-001b2a"}`}
                                            >
                                                {num}
                                            </div>
                                        </label>
                                    ))}
                                </div>

                                {/* Button */}
                                <div className="mb-4 mt-20">
                                    <button
                                        type="button"
                                        disabled={!selectedStore}
                                        onClick={() => setView("multi-store-page-02")}
                                        className={`flex w-full justify-center font-semibold rounded-[10px] text-base p-4 text-center me-2 
                                            ${selectedStore ? "bg-[#29A8F1] text-white hover:bg-[#1F8BCC]" : "bg-gray-d9d9d9 text-gray-500 cursor-not-allowed"}`}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Next button */}
                    <div className="w-full max-w-[340px] mx-auto mt-10 hidden">
                        <button
                            onClick={() => setView("multi-store-page-02")}
                            className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                        >
                            Next
                        </button>
                    </div>

                </div>
            )}

            {view === "onboarding-home" && <OnboardingHome setView={setView} />}
            {view === "multi-store-page-02" && <MultiStorePage02 setView={setView} storeCount={selectedStore} />}
        </>
    );
}