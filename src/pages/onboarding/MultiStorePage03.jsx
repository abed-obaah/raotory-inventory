import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import MultiStorePage02 from "./MultiStorePage02";
import StoreSetupSuccess from "/src/assets/store-setup-success.png";
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

                    {/* Multi store set up congratulations */}
                    <div className="flex flex-col w-full max-w-[536px] mx-auto mt-10">
                        
                        {/* Heading */}
                        <div className="mb-7 text-center">
                            <h2 className="text-2xl font-semibold mb-2">
                                Multi store
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
                                <p className="text-center">Congratulations, you have successfully set up your store(s) on Raotory, Your stock keeping buddy!</p>

                                {/* Button */}
                                <div className="mb-4 mt-10">
                                    <button
                                        disabled
                                        onClick={() => setView("multi-store-page-04")}
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