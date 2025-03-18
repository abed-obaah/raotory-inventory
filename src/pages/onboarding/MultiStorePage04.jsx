import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import MultiStorePage03 from "./MultiStorePage03";
// import MultiStorePage05 from "./MultiStorePage05";

export default function MultiStorePage04() {
    const [view, setView] = useState("multi-store-page-04");

    return (
        <>
            {view === "multi-store-page-04" && (
                <div id="multi-store-page-04">

                    {/* Back Button */}
                    <button 
                        onClick={() => setView("multi-store-page-03")}
                        className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
                    >
                        <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                        Back
                    </button>

                    {/* Main content */}
                    <h2>Multi Store Page 04 main content</h2>

                    {/* Next button */}
                    <div className="w-full max-w-[340px] mt-10">
                        <button
                            disabled
                            onClick={() => setView("multi-store-page-05")}
                            className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                        >
                            Next
                        </button>
                    </div>

                </div>
            )}

            {view === "multi-store-page-03" && <MultiStorePage03 setView={setView} />}
            {/* {view === "multi-store-page-05" && <MultiStorePage05 setView={setView} />} */}
        </>
    );
}