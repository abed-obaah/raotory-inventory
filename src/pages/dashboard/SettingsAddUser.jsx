import { FiArrowLeft } from "react-icons/fi";

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
            <div>
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
                <div>
                    {/* Manager */}
                    <div class="flex items-center gap-2 border border-black-10-percent w-max rounded-[10px] py-3 px-6">
                        <input id="" type="checkbox" class="size-7.5 text-blue-600 bg-white border border-black-10-percent rounded-[5px] focus:outline-none focus:ring-4 focus:ring-blue-300" />
                        <label for="" class="flex items-center justify-center bg-[#FFDD55] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">Manager</label>
                    </div>
                </div>
            </div>
        </div>
    );
}