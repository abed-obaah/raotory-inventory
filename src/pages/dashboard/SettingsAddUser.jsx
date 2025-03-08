import { FiArrowLeft, FiHelpCircle, FiSend } from "react-icons/fi";

export default function SettingsAddUser({ setView }) {
    return (
        <div id="settings-add-user">
            {/* Back Button */}
            <button 
                onClick={() => setView("settings-users")}
                className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
            >
                <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                Back
            </button>

            {/* New user */}
            <div>
                {/* Title */}
                <div className="mb-7.5">
                    <h1 className="text-2xl text-dark-primary font-semibold mb-1">
                        New User
                    </h1>
                    <p className="text-xs text-gray-757575 font-medium">
                        Add a new user
                    </p>
                </div>
                {/* Input user email */}
                <div className="mb-16">
                    <input 
                        type="text" 
                        name="" 
                        className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4 placeholder:text-[#E5E5E5]" 
                        placeholder="Input User’s Email" 
                        required 
                    />
                </div>
            </div>

            {/* Choose role */}
            <div className="mb-16">
                {/* Title */}
                <div className="mb-7.5">
                    <h1 className="text-2xl text-dark-primary font-semibold mb-1">
                        Choose Role
                    </h1>
                    <p className="text-xs text-gray-757575 font-medium">
                        Assign new user to a role
                    </p>
                </div>
                {/* Roles */}
                <div className="flex gap-10 mb-16">
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
                {/* Help */}
                <div className="flex items-center gap-1">
                    <FiHelpCircle className="size-5" />
                    <p className="text-base text-dark-primary font-medium">See what each role can access</p>
                </div>
            </div>

            {/* Send invite button */}
            <div>
                <button
                    onClick={() => setView("settings-add-user")}
                    className="bg-blue-500 text-off-white text-base font-semibold px-6 py-4 rounded w-full max-w-[484px] cursor-pointer flex items-center justify-center gap-4"
                >
                    <FiSend className="text-2xl text-off-white" /> Send Invite
                </button>
            </div>
        </div>
    );
}