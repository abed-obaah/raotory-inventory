import { useState } from "react";
import SettingsAddUser from "./SettingsAddUser";

export default function SettingsUsers() {
    const [view, setView] = useState("settings-users");

    return (
        <>
            {view === "settings-users" && (
                <div id="settings-users">
                    {/* Search settings */}
                    <div className="w-full max-w-[340px]">
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
                        className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                    >
                        Add User
                    </button>
                </div>
            )}

            {view === "settings-add-user" && <SettingsAddUser setView={setView} />}
        </>
    );
}