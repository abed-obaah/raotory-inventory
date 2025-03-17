import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import MultiStorePage01 from "./MultiStorePage01";
import MultiStorePage03 from "./MultiStorePage03";

export default function MultiStorePage02() {
    const [view, setView] = useState("multi-store-page-02");

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

                    {/* Main content here */}
                    <h2>Multi Store Page 02 main content</h2>


                    {/* Next button */}
                    <div className="w-full max-w-[340px] mx-auto mt-10 hidden">
                        <button
                            onClick={() => setView("multi-store-page-03")}
                            className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                        >
                            Next
                        </button>
                    </div>

                </div>
            )}

            {view === "multi-store-page-01" && <MultiStorePage01 setView={setView} />}
            {view === "multi-store-page-03" && <MultiStorePage03 setView={setView} />}
        </>
    );
}