import { useState } from "react";
import OnboardingHome from "./OnboardingHome";
import SingleStorePage02 from "./SingleStorePage02";
import SingleStorePage03 from "./SingleStorePage02";
import SingleStorePage04 from "./SingleStorePage02";
import { FiArrowLeft } from "react-icons/fi";

export default function SingleStorePage01() {
    const [view, setView] = useState("single-store-page-01");

    return (
        <>
            {view === "single-store-page-01" && (
                <div id="single-store-page-01">

                    {/* Back Button */}
                    <button 
                        onClick={() => setView("onboarding-home")}
                        className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
                    >
                        <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                        Back
                    </button>

                    <h2 className="mb-4">Single Store Page 01 main content</h2>

                    {/* Next button */}
                    <div className="w-full max-w-[340px]">
                        <button
                            onClick={() => setView("single-store-page-02")}
                            className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                        >
                            Next
                        </button>
                    </div>

                </div>
            )}

            {view === "onboarding-home" && <OnboardingHome setView={setView} />}
            {view === "single-store-page-02" && <SingleStorePage02 setView={setView} />}
            {view === "single-store-page-03" && <SingleStorePage03 setView={setView} />}
            {view === "single-store-page-04" && <SingleStorePage04 setView={setView} />}
        </>
    );
}