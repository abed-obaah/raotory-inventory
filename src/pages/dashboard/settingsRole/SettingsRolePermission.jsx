import { FiArrowLeft, FiHelpCircle, FiSend } from "react-icons/fi";

export default function SettingsRolePermission({ setView }) {
    return (
        <div id="settings-role-permission">
            
            {/* Back Button */}
            <button 
                onClick={() => setView("settings-role")}
                className="flex items-center text-dark-primary font-semibold cursor-pointer mb-15"
            >
                <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                Back
            </button>
            
            {/* Role permissions */}
            <div className="mb-16">
                {/* Title / Select all */}
                <div className="flex items-center justify-between">
                    {/* Title */}
                    <div className="mb-7.5">
                        <h1 className="text-2xl text-dark-primary font-semibold mb-1">
                            Role Permissions
                        </h1>
                        <p className="text-xs text-gray-757575 font-medium">
                            Assign role permissions
                        </p>
                    </div>
                    {/* Select all */}
                    <div class="flex items-center mb-4">
                        <input id="" type="checkbox" value="" class="w-4 h-4" />
                        <label for="" class="ms-2 text-sm font-medium text-blue-primary">
                            Select All
                        </label>
                    </div>
                </div>

                {/* Roles */}
                <div class="flex flex-col gap-y-7">
                    {/* Administrator */}
                    <div className="flex gap-2 max-w-[440px]">
                        <div>
                            <input id="" type="checkbox" value="" class="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                            <label for="" class="text-sm text-gray-757575">
                                <span className="font-medium">Administrator: </span>This is the highest-level role with full access to all features and data within the system.
                            </label>
                            <button className="text-start text-[10px] text-blue-primary font-medium mt-2 cursor-pointer">View Permission</button>
                        </div>
                    </div>
                    {/* Inventory Manager */}
                    <div className="flex gap-2 max-w-[440px]">
                        <div>
                            <input id="" type="checkbox" value="" class="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                            <label for="" class="text-sm text-gray-757575">
                                <span className="font-medium">Inventory Manager: </span>This role is responsible for the day-to-day management of inventory.
                            </label>
                            <button className="text-start text-[10px] text-blue-primary font-medium mt-2 cursor-pointer">View Permission</button>
                        </div>
                    </div>
                    {/* Sales/Order fulfillment */}
                    <div className="flex gap-2 max-w-[440px]">
                        <div>
                            <input id="" type="checkbox" value="" class="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                            <label for="" class="text-sm text-gray-757575">
                                <span className="font-medium">Sales/Order Fulfillment: </span>This role focuses on processing sales orders and fulfilling customer requests.
                            </label>
                            <button className="text-start text-[10px] text-blue-primary font-medium mt-2 cursor-pointer">View Permission</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="w-full max-w-[484px]">
                <button
                    onClick={() => setView("settings-role-permission")}
                    className="bg-blue-500 text-white px-11 py-3.5 rounded-[10px] w-full cursor-pointer"
                >
                    Create Role
                </button>
            </div>
        </div>
    );
}