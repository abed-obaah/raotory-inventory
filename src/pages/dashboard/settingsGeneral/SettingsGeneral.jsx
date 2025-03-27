import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function SettingsGeneral() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div>
                {/* Search settings */}
                <div className="w-full mb-9">
                    <form className="flex items-center mx-auto">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full ps-10 p-2.5 placeholder-gray-400" placeholder="Search Settings" />
                        </div>
                    </form>
                </div>

                {/* Personal information */}
                <div className="border border-gray-e5e5e5 rounded p-6 mb-9">

                    {/* Title */}
                    <h3 className="text-[#D0D0D0] text-base font-medium mb-4">Personal Information</h3>

                    {/* Name */}
                    <div className="mb-6">
                        <label for="" class="block mb-1 text-base font-medium text-gray-757575">Name</label>
                        <div class="relative">
                            <input type="text" id="" class="bg-white border border-gray-e5e5e5 text-dark-primary text-base rounded focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full pe-10 p-2.5" placeholder="" />
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5">
                                <button className="bg-blue-100 p-2 rounded-full cursor-pointer">
                                    <FiEdit className="text-blue-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Pharmacy Name */}
                    <div className="mb-6">
                        <label for="" class="block mb-1 text-base font-medium text-gray-757575">Pharmacy Name</label>
                        <div class="relative">
                            <input type="text" id="" class="bg-white border border-gray-e5e5e5 text-dark-primary text-base rounded focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full pe-10 p-2.5" placeholder="" />
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5">
                                <button className="bg-blue-100 p-2 rounded-full cursor-pointer">
                                    <FiEdit className="text-blue-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Phone Number */}
                    <div className="mb-6">
                        <label for="" class="block mb-1 text-base font-medium text-gray-757575">Phone Number</label>
                        <div class="relative">
                            <input type="tel" id="" class="bg-white border border-gray-e5e5e5 text-dark-primary text-base rounded focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full pe-10 p-2.5" placeholder="" />
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5">
                                <button className="bg-blue-100 p-2 rounded-full cursor-pointer">
                                    <FiEdit className="text-blue-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Email Address */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between">
                            <label for="" class="block mb-1 text-base font-medium text-gray-757575">Email Address</label>
                            <div className="flex items-center gap-1">
                                <RiVerifiedBadgeFill className="text-[#00EA71]" />
                                <p className="text-xs text-gray-757575 font-medium">Verified</p>
                            </div>
                        </div>
                        <div class="relative">
                            <input type="email" id="" class="bg-white border border-gray-e5e5e5 text-dark-primary text-base rounded focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full pe-10 p-2.5" placeholder="" />
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5">
                                <button className="text-xs text-blue-primary font-semibold cursor-pointer">
                                    Request for change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="border border-gray-e5e5e5 rounded p-6">

                    {/* Title */}
                    <h3 className="text-[#D0D0D0] text-base font-medium mb-4">Security</h3>

                    {/* Password */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block mb-1 text-base font-medium text-gray-757575">
                                Password
                            </label>
                            <button className="text-xs text-blue-primary font-medium cursor-pointer">
                                Change password
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="bg-white border border-gray-e5e5e5 text-dark-primary text-base rounded focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full pe-10 p-2.5"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 end-0 flex items-center pe-3.5 text-gray-500"
                            >
                                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}