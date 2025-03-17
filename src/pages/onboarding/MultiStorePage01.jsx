import { useState } from "react";
import OnboardingHome from "./OnboardingHome";
import MultiStorePage02 from "./MultiStorePage02";
import MultiStorePage03 from "./MultiStorePage02";
import MultiStorePage04 from "./MultiStorePage02";
import { FiArrowLeft } from "react-icons/fi";

export default function MultiStorePage01() {
    const [view, setView] = useState("multi-store-page-01");

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

                    <h2 className="mb-4">Multi Store Page 01 main content</h2>

                    {/* Next button */}
                    <div className="w-full max-w-[340px]">
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
            {view === "multi-store-page-02" && <MultiStorePage02 setView={setView} />}
            {view === "multi-store-page-03" && <MultiStorePage03 setView={setView} />}
            {view === "multi-store-page-04" && <MultiStorePage04 setView={setView} />}
        </>
    );
}