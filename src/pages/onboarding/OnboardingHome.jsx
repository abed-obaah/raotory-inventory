import { useState } from "react";
import SingleStorePage01 from "./SingleStorePage01";
import MultiStorePage01 from "./MultiStorePage01";

export default function OnboardingHome() {
    const [view, setView] = useState("home");

    return (
        <>
            {view === "home" && (
                <div id="onboarding-home">
                    <h1 className="text-2xl font-bold mb-6">Choose Your Store Type</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setView("single-store-page-01")}
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
                        >
                            Single Store
                        </button>
                        <button
                            onClick={() => setView("multi-store-page-01")}
                            className="bg-green-500 text-white px-6 py-3 rounded-lg"
                        >
                            Multi Store
                        </button>
                    </div>
                </div>
            )}

            {view === "single-store-page-01" && <SingleStorePage01 />}
            {view === "multi-store-page-01" && <MultiStorePage01 />}
        </>
    );
}