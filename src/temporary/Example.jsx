import { FiArrowLeft, FiEdit } from "react-icons/fi";
import { LuSquareUserRound } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbPhonePause, TbFilter } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function PatientCaseFile({ setView }) {
    return (
        <div id="patient-case-file">

            {/* Back button / search */}
            <div className="flex items-center gap-x-10 mb-9">
                {/* Back Button */}
                <button 
                    onClick={() => setView("create-customer")}
                    className="flex items-center text-dark-primary font-semibold cursor-pointer"
                >
                    <FiArrowLeft className="text-dark-primary text-xl mr-1" /> 
                    Back
                </button>
                {/* Search */}

            </div>

            {/* Main section */}
            <div className="flex flex-col md:flex-row gap-y-10 gap-x-8">
                {/* Left side */}
                <div className="flex flex-col gap-6 min-w-[298px]">
                    {/* Details card */}
                    <div className="border border-black-10-percent p-6 rounded-[20px]">
                        {/* Avatar */}
                        <div className="flex items-center justify-center rounded-[10px] bg-[#8FD7FF] h-[239px] text-[40px] text-off-white font-semibold mb-6">A</div>
                        {/* Details */}
 
                        {/* Action buttons */}
                        <div className="flex gap-2">
                            <button
                                className="bg-blue-primary text-white text-base px-4 py-1 rounded cursor-pointer"
                            >
                                Modify
                            </button>
                            <button className="p-2 bg-red-100 rounded-full cursor-pointer">
                                <RiDeleteBin6Line className="text-red-600" />
                            </button>                    
                        </div>
                    </div>
                    {/* Button */}
                    <div>
                        <button 
                            onClick={() => setView("customer-details")}
                            type="button"
                            className="text-off-white text-lg text-center font-medium w-full cursor-pointer rounded px-5 py-3 bg-blue-primary focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            Customer Details 
                        </button>
                    </div>
                </div>

                {/* Right side */}

            </div>
        </div>
    );
}