import { FiArrowLeft } from "react-icons/fi";

export default function SingleStorePage03({ setView }) {
    return (
        <div id="single-store-page-03">

            {/* Back Button */}
            <button 
                onClick={() => setView("single-store-page-02")}
                className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
            >
                <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                Back
            </button>

            {/* Main content area */}
            <div>

                <h2 className="mb-4">Single Store Page 03 main content</h2>

            </div>

            {/* Next button */}
            <div className="w-full max-w-[340px]">
                <button
                    disabled
                    onClick={() => setView("single-store-page-04")}
                    className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                >
                    Next
                </button>
            </div>

        </div>
    );
}