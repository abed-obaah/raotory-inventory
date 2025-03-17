import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import MultiStorePage02 from "./MultiStorePage02";
// import MultiStorePage04 from "./MultiStorePage04";

export default function MultiStorePage03() {
    const [view, setView] = useState("multi-store-page-03");

    return (
        <>
            {view === "multi-store-page-03" && (
                <div id="multi-store-page-03">

                    {/* Back Button */}
                    <button 
                        onClick={() => setView("multi-store-page-02")}
                        className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
                    >
                        <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                        Back
                    </button>

                    {/* Main content here */}
                    <h2>Multi Store Page 03 main content</h2>

                    {/* Next button */}
                    <div className="w-full max-w-[340px] mx-auto mt-10 hidden">
                        <button
                            onClick={() => setView("multi-store-page-04")}
                            className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                        >
                            Next
                        </button>
                    </div>

                </div>
            )}

            {view === "multi-store-page-02" && <MultiStorePage02 setView={setView} />}
            {/* {view === "multi-store-page-04" && <MultiStorePage04 setView={setView} />} */}
        </>
    );
}