import { useState } from "react";
import StoreSetupSuccess from "/src/assets/store-setup-success.png";
import { FiArrowLeft } from "react-icons/fi";
import SingleStorePage01 from "./SingleStorePage01";
import SingleStorePage03 from "./SingleStorePage03";

export default function SingleStorePage02() {
    const [view, setView] = useState("single-store-page-02");

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
                                Single store
                            </h2>
                            <p className="text-gray-600 text-base max-w-[468px] mx-auto">
                                This gives you the ability to set up your store and inventory appropriately
                            </p>
                        </div>
            
                        {/* Form */}
                        <div className="w-full border border-black-10-percent rounded-3xl p-10.5">
                            <form action="#" method="POST" className="">

                                {/* Image */}
                                <div className="">
                                    <img src={StoreSetupSuccess} alt="Succes image" className="w-full h-auto object-cover" />
                                </div>
                                <h4 className="text-4xl font-bold text-center mb-4.5">Yay!</h4>
                                <p className="text-center">Congratulations, you have successfully set up your store on Raotory, Your stock keeping buddy!</p>

                                {/* Button */}
                                <div className="mb-4 mt-10">
                                    <button
                                        onClick={() => setView("single-store-page-03")}
                                        className="flex w-full justify-center bg-blue-primary hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-[10px] text-base p-4 text-center me-2"
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
                            onClick={() => setView("single-store-page-03")}
                            className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                        >
                            Next
                        </button>
                    </div>

                </div>
            )}

            {view === "single-store-page-01" && <SingleStorePage01 setView={setView} />}
            {view === "single-store-page-03" && <SingleStorePage03 setView={setView} />}
        </>
    );
}