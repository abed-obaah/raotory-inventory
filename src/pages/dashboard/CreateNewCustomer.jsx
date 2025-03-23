import { useState } from 'react';
import { createPortal } from "react-dom";
import { FiArrowLeft } from "react-icons/fi";
import { IoMdThumbsUp, IoIosCloseCircleOutline } from "react-icons/io";

export default function CreateNewCustomer({ setView }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div id="create-new-customer">
            {/* Back Button */}
            <button 
                onClick={() => setView("create-customer")}
                className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
            >
                <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                Back
            </button>

            {/* Create new customer */}
            <form className="flex flex-col gap-y-5 max-w-[800px] mx-auto">
                {/* Customer name */}
                <div>
                    <label className="block text-sm text-gray-757575">Customer Name</label>
                    <input
                        type="text"
                        name=""
                        required
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>
                {/* Phone number */}
                <div>
                    <label className="block text-sm text-gray-757575">Phone Number</label>
                    <input
                        type="tel"
                        name=""
                        required
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>
                {/* Gender */}
                <div>
                    <label className="block text-sm text-gray-757575">Gender</label>
                    <select required id="" class="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-2.5 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                {/* Location */}
                <div>
                    <label className="block text-sm text-gray-757575">Location</label>
                    <input
                        type="text"
                        name=""
                        required
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>

                {/* Create customer button */}
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 text-white px-11 py-3 rounded-[10px] w-full cursor-pointer mt-10"
                >
                    Create customer
                </button>
            </form>

            {/* Success modal */}
            {showModal &&
                createPortal(
                    <div className="fixed inset-0 w-screen h-screen bg-gray-700/70 flex justify-center items-center z-50">
                        <div className="flex flex-col items-center bg-white p-3 rounded-xl shadow-lg sm:min-w-[400px]">
                            <IoIosCloseCircleOutline onClick={() => setShowModal(false)} className="size-6 self-end cursor-pointer" />
                            <div className="bg-blue-200 size-20 rounded-full flex items-center justify-center mb-8">
                                <IoMdThumbsUp className="size-12 text-blue-0e90da" />
                            </div>
                            <h2 className="text-xl text-gray-757575 font-bold mb-8">Created Successfully</h2>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
}