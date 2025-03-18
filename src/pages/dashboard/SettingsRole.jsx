import { useState } from "react";
import SettingsRolePermission from "./SettingsRolePermission";

export default function SettingsRole() {
    const [view, setView] = useState("settings-role");

    return (
        <>
            {view === "settings-role" && (
                <div id="settings-role">

                    {/* Choose role */}
                    <div className="mb-16">
                        {/* Title */}
                        <div className="mb-7.5">
                            <h1 className="text-2xl text-dark-primary font-semibold mb-1">
                                Existing Roles
                            </h1>
                            <p className="text-xs text-gray-757575 font-medium">
                                You can assign different roles to users
                            </p>
                        </div>
                        {/* Existing roles */}
                        <div className="flex flex-col md:flex-row gap-10 mb-16">
                            {/* Manager */}
                            <div class="flex items-center gap-2 border border-black-10-percent w-max rounded-[10px] py-3 px-6">
                                <input type="checkbox" class="size-7.5 text-blue-600 bg-white border border-black-10-percent rounded-[5px] appearance-none checked:bg-blue-primary checked:border-blue-primary focus:outline-none focus:ring-4 focus:ring-blue-300" />
                                <label for="" class="flex items-center justify-center bg-[#FFDD55] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                    Manager
                                </label>
                            </div>
                            {/* Admin */}
                            <div class="flex items-center gap-2 border border-black-10-percent w-max rounded-[10px] py-3 px-6">
                                <input type="checkbox" class="size-7.5 text-blue-600 bg-white border border-black-10-percent rounded-[5px] appearance-none checked:bg-blue-primary checked:border-blue-primary focus:outline-none focus:ring-4 focus:ring-blue-300" />
                                <label for="" class="flex items-center justify-center bg-[#5C6F88] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                    Admin
                                </label>
                            </div>
                            {/* Sales Rep */}
                            <div class="flex items-center gap-2 border border-black-10-percent w-max rounded-[10px] py-3 px-6">
                                <input type="checkbox" class="size-7.5 text-blue-600 bg-white border border-black-10-percent rounded-[5px] appearance-none checked:bg-blue-primary checked:border-blue-primary focus:outline-none focus:ring-4 focus:ring-blue-300" />
                                <label for="" class="flex items-center justify-center bg-[#FF8F91] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                    Sales Rep
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* New roles */}
                    <div className="mb-14">
                        {/* Title */}
                        <div className="mb-7.5">
                            <h1 className="text-2xl text-dark-primary font-semibold mb-1">
                                Create New Role
                            </h1>
                            <p className="text-xs text-gray-757575 font-medium">
                                Add new roles for users
                            </p>
                        </div>
                        {/* Input user email */}
                        <div>
                            <input 
                                type="text" 
                                name="" 
                                className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 placeholder:text-[#E5E5E5]" 
                                placeholder="Input Role Name" 
                                required 
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="w-full max-w-[484px]">
                        <button
                            onClick={() => setView("settings-role-permission")}
                            className="bg-blue-500 text-white px-11 py-3.5 rounded-[10px] w-full cursor-pointer"
                        >
                            Assign Role Permission
                        </button>
                    </div>
                </div>
            )}

            {view === "settings-role-permission" && <SettingsRolePermission setView={setView} />}
        </>
    );
}