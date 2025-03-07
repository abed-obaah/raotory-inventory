import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

export default function CreateCustomer() {
    const [view, setView] = useState("create-customer");

    return (
        <>
            {view === "create-customer" && (
                <div id="create-customer">
                    {/* Search customer / create customer */}
                    <div className="flex items-center justify-between mb-12.5">
                        {/* Search customer */}
                        <div className="w-full max-w-[340px]">
                            <form className="flex items-center mx-auto">
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="text" className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder-gray-400" placeholder="Search customer" />
                                </div>
                            </form>
                        </div>
                        {/* Create customer */}
                        <div className="w-full max-w-[340px]">
                            <button
                                onClick={() => setView("create-new-customer")}
                                className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                            >
                                Create customer
                            </button>
                        </div>
                    </div>

                    {/* Customer table */}
                    <div className="relative overflow-x-auto mb-10">
                        <table className="text-base w-full">
                            <thead className="text-gray-600 font-semibold text-left">
                                <tr className="grid grid-cols-6">
                                    <th className="px-2.5 py-3 col-span-2">Customer Name</th>
                                    <th className="px-2.5 py-3">Phone Number</th>
                                    <th className="px-2.5 py-3">Gender</th>
                                    <th className="px-2.5 py-3">Location</th>
                                    <th className="px-2.5 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border border-gray-300 mb-5 rounded-[10px] grid grid-cols-6">
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold rounded-l-2xl col-span-2">
                                        <div className="flex items-center gap-2">
                                            <div className="flex justify-center items-center text-white bg-blue-400 rounded size-7.5">A</div>
                                            <p>Amos Pharmacy Ltd</p>
                                        </div>
                                    </td>
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">07014514834</td>
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        <div className="flex items-center justify-center bg-blue-100 text-dark-primary font-semibold size-9 rounded-full">M</div>
                                    </td>
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">Abraka, Delta State</td>
                                    <td className="px-2.5 py-2 flex items-center gap-2.5">
                                        <button
                                            onClick={() => setView("customer-details")}
                                            className="bg-blue-500 text-white text-base px-4 py-1 rounded"
                                        >
                                            Modify
                                        </button>
                                        <button className="p-2 bg-red-100 rounded-full">
                                            <RiDeleteBin6Line className="text-red-600" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {view === "create-new-customer" && (
                <div id="create-new-customer">
                    {/* Back Button */}
                    <button
                        onClick={() => setView("create-customer")}
                        className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
                    >
                        <IoIosArrowBack className="text-dark-primary text-xl" />
                        Back
                    </button>

                    <div>Create New Customer main content</div>
                </div>
            )}

            {view === "customer-details" && (
                <div id="customer-details">
                    {/* Back Button */}
                    <button
                        onClick={() => setView("create-customer")}
                        className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
                    >
                        <IoIosArrowBack className="text-dark-primary text-xl" />
                        Back
                    </button>

                    <div>
                        <h2 className="text-4xl mb-5">Customer Details</h2>
                        <button
                            onClick={() => setView("patient-case-file")}
                            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Patient’s Case File
                        </button>
                    </div>
                </div>
            )}

            {view === "patient-case-file" && (
                <div id="patient-case-file">
                    {/* Back Button */}
                    <button
                        onClick={() => setView("customer-details")}
                        className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
                    >
                        <IoIosArrowBack className="text-dark-primary text-xl" />
                        Back
                    </button>

                    <div>
                        <h2 className="text-4xl mb-5">Patient's Case File</h2>
                        <button
                            onClick={() => setView("customer-details")}
                            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Customer Details
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}