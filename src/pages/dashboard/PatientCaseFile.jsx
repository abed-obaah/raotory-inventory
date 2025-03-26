import { useState } from 'react';
import { FiArrowLeft, FiEdit } from "react-icons/fi";
import { LuSquareUserRound } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbPhonePause, TbFilter } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdThumbsUp, IoIosCloseCircleOutline } from "react-icons/io";
import { createPortal } from "react-dom";

export default function PatientCaseFile({ setView }) {
    const [showModal, setShowModal] = useState(false);

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
                <div className="w-full">
                    <form className="flex items-center mx-auto">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" className="bg-white border border-black-10-percent text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full ps-10 p-2.5 placeholder-gray-400" placeholder="Search customer" />
                        </div>
                    </form>
                </div>
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
                        <div className="flex flex-col gap-1 mb-9">
                            {/* Name */}
                            <div className="flex items-center">
                                <LuSquareUserRound className="text-dark-primary size-5 mr-3.5" />
                                <p className="text-dark-primary text-xl font-semibold mr-2 whitespace-nowrap">Amos Rukkie</p>
                                <div className="flex items-center justify-center bg-blue-100 text-dark-primary font-semibold size-9 rounded-full">M</div>
                            </div>
                            {/* Phone */}
                            <div className="flex items-center">
                                <TbPhonePause className="text-dark-primary size-5 mr-3.5" />
                                <p className="text-dark-primary text-xl font-semibold mr-2 whitespace-nowrap">07014514834</p>
                            </div>
                            {/* Location */}
                            <div className="flex items-center">
                                <GrLocation className="text-dark-primary size-5 mr-3.5" />
                                <p className="text-dark-primary text-xl font-semibold mr-2 whitespace-nowrap">Abraka, Delta State</p>
                            </div>
                        </div>
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
                <div className="w-full">
                    {/* Title / filter / edit */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 mb-5">
                        {/* Title */}
                        <h2 className="text-dark-primary text-[1.25rem] font-semibold">Patient's Case File</h2>
                        <div className="flex gap-2">
                            {/* Filter */}
                            <button className="flex items-center gap-2 border border-black-10-percent rounded-[8px] py-1.5 px-4 text-blue-primary text-base font-semibold cursor-pointer hover:bg-black-10-percent">
                                <TbFilter />
                                Filter
                            </button>
                            {/* Edit */}
                            <button 
                                onClick={() => setShowModal(true)}
                                className="flex items-center gap-2 border border-black-10-percent rounded-[8px] py-1.5 px-4 text-off-white text-base font-semibold cursor-pointer bg-blue-primary"
                            >
                                <FiEdit />
                                Add File
                            </button>
                        </div>
                    </div>
                    {/* Table */}
                    <div className="relative overflow-x-auto">
                        <table className="text-base w-full">
                            <thead className="text-gray-b4b4b4 font-semibold text-left">
                                <tr className='grid grid-cols-4'>
                                    <th className="px-2.5 py-3">File Number</th>
                                    <th className="px-2.5 py-3">Date</th>
                                    <th className="px-2.5 py-3">Status</th>
                                    <th className="px-2.5 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="grid grid-cols-4 bg-white border border-gray-e5e5e5 rounded-[10px] mb-5">
                                    {/* File number */}
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        #2022345
                                    </td>
                                    {/* Date */}
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        26/02/25
                                    </td>
                                    {/* Status */}
                                    <td className="px-2.5 py-2">
                                        <div className="flex items-center justify-center bg-[#C6CA001F] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                            Ongoing
                                        </div>
                                    </td>
                                    {/* Action */}
                                    <td className="px-2.5 py-2 flex items-center gap-2">
                                        <button className="bg-blue-primary text-white px-8 py-1 rounded w-max">
                                            View
                                        </button>
                                        <button className="bg-blue-100 p-2 rounded-full">
                                                <FiEdit className="text-blue-500" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center bg-gray-e5e5e5 size-7.5 rounded">
                            <IoIosArrowBack className="text-white size-5" />
                        </div>
                        <div className="flex items-center justify-center bg-gray-e5e5e5 size-7.5 rounded">
                            <IoIosArrowForward className="text-white size-5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Add new patient case file modal */}
            {showModal &&
                createPortal(
                    // Portal background
                    <div className="fixed inset-0 w-screen h-screen bg-gray-700/70 flex justify-center items-center z-50">
                        {/* Portal wrapper */}
                        <div className="flex flex-col bg-white p-4 rounded-xl shadow-lg sm:min-w-[400px]">
                            
                            {/* Back button */}
                            <button 
                                onClick={() => setShowModal(false)}
                                className="flex items-center gap-2 text-dark-primary font-semibold cursor-pointer mb-7"
                            >
                                <IoIosArrowBack className="text-dark-primary text-xl font-bold" /> 
                                Case File
                            </button>
                            
                            {/* Main content */}
                            <div className="mb-14">
                                Main content goes here
                            </div>
                            
                            {/* Action buttons */}
                            <div className="flex gap-6">
                                <button className="text-white bg-blue hover:bg-blue-hover rounded text-base font-semibold px-5 py-1.5 w-[168px] cursor-pointer">
                                    Save
                                </button>
                                <button 
                                    onClick={() => setShowModal(false)} 
                                    className="text-red bg-red-bg hover:bg-blue-0e90da rounded text-base font-semibold px-5 py-1.5 w-[168px] cursor-pointer"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            }
        </div>
    );
}