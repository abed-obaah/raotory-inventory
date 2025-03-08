import { useState } from "react";
import SettingsAddUser from "./SettingsAddUser";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function SettingsUsers() {
    const [view, setView] = useState("settings-users");

    return (
        <>
            {view === "settings-users" && (
                <div id="settings-users">

                    {/* Title, search, button */}
                    <div className="flex items-center justify-between mb-14">
                        <div>
                            <h1 className="text-2xl text-dark-primary font-semibold mb-1">
                                User Management
                            </h1>
                            <p className="text-xs text-gray-757575 font-medium">
                                Manage your staff roles easily
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* Search settings */}
                            <div className="w-full min-w-[306px]">
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

                            {/* Add user button */}
                            <button
                                onClick={() => setView("settings-add-user")}
                                className="bg-blue-500 text-white px-6 py-2 rounded w-full max-w-[194px] cursor-pointer flex items-center justify-center gap-2"
                            >
                                <AiOutlineUserAdd className="text-xl" /> Add User
                            </button>
                        </div>
                    </div>

                    {/* Users table */}
                    <div className="relative overflow-x-auto mb-10">
                        <table className="text-base w-full">
                            <thead className="text-gray-b4b4b4 font-semibold text-left">
                                <tr className='grid grid-cols-4'>
                                    <th className="px-2.5 py-3">User Name</th>
                                    <th className="px-2.5 py-3">Status</th>
                                    <th className="px-2.5 py-3">Role</th>
                                    <th className="px-2.5 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="grid grid-cols-4 bg-white border border-gray-e5e5e5 rounded-[10px] mb-5">
                                    {/* User name */}
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        <div className='flex items-center gap-2'>
                                            <div className='flex justify-center items-center text-white bg-[#8FFFA3] rounded size-7.5'>A</div>
                                            <p>Amos Rukky</p>
                                        </div>
                                    </td>
                                    {/* Status */}
                                    <td className="px-2.5 py-2">
                                        <div className="flex items-center justify-center bg-[#CA00001F] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                            Logged Out
                                        </div>
                                    </td>
                                    {/* Role */}
                                    <td className="px-2.5 py-2">
                                        <div className="flex items-center justify-center bg-[#FFDD55] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                            Manager
                                        </div>
                                    </td>
                                    {/* Action */}
                                    <td className="px-2.5 py-2">
                                        <button
                                            onClick={() => setView("customer-details")}
                                            className="bg-blue-primary text-off-white text-base px-4 py-1 rounded cursor-pointer mr-4"
                                        >
                                            Change Role
                                        </button>
                                        <button className="p-2 bg-red-100 rounded-full cursor-pointer">
                                            <RiDeleteBin6Line className="text-red-600" />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="grid grid-cols-4 bg-white border border-gray-e5e5e5 rounded-[10px] mb-5">
                                    {/* User name */}
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        <div className='flex items-center gap-2'>
                                            <div className='flex justify-center items-center text-white bg-[#8FFFA3] rounded size-7.5'>A</div>
                                            <p>Amos Rukky</p>
                                        </div>
                                    </td>
                                    {/* Status */}
                                    <td className="px-2.5 py-2">
                                        <div className="flex items-center justify-center bg-[#00B5484F] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                            Active
                                        </div>
                                    </td>
                                    {/* Role */}
                                    <td className="px-2.5 py-2">
                                        <div className="flex items-center justify-center bg-[#5C6F88] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                            Admin
                                        </div>
                                    </td>
                                    {/* Action */}
                                    <td className="px-2.5 py-2">
                                        <button
                                            onClick={() => setView("customer-details")}
                                            className="bg-blue-primary text-off-white text-base px-4 py-1 rounded cursor-pointer mr-4"
                                        >
                                            Change Role
                                        </button>
                                        <button className="p-2 bg-red-100 rounded-full cursor-pointer">
                                            <RiDeleteBin6Line className="text-red-600" />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="grid grid-cols-4 bg-white border border-gray-e5e5e5 rounded-[10px] mb-5">
                                    {/* User name */}
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        <div className='flex items-center gap-2'>
                                            <div className='flex justify-center items-center text-white bg-[#8FFFA3] rounded size-7.5'>A</div>
                                            <p>Amos Rukky</p>
                                        </div>
                                    </td>
                                    {/* Status */}
                                    <td className="px-2.5 py-2">
                                        <div className="flex items-center justify-center bg-[#00B5484F] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                            Active
                                        </div>
                                    </td>
                                    {/* Role */}
                                    <td className="px-2.5 py-2">
                                        <div className="flex items-center justify-center bg-[#FF8F91] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                            Sales Rep
                                        </div>
                                    </td>
                                    {/* Action */}
                                    <td className="px-2.5 py-2">
                                        <button
                                            onClick={() => setView("customer-details")}
                                            className="bg-blue-primary text-off-white text-base px-4 py-1 rounded cursor-pointer mr-4"
                                        >
                                            Change Role
                                        </button>
                                        <button className="p-2 bg-red-100 rounded-full cursor-pointer">
                                            <RiDeleteBin6Line className="text-red-600" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            )}

            {view === "settings-add-user" && <SettingsAddUser setView={setView} />}
        </>
    );
}