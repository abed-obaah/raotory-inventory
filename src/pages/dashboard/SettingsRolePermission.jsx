import { FiArrowLeft, FiHelpCircle, FiSend } from "react-icons/fi";

export default function SettingsRolePermission({ setView }) {
    return (
        <div id="settings-role-permission">
            
            {/* Back Button */}
            <button 
                onClick={() => setView("settings-role")}
                className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
            >
                <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                Back
            </button>

        </div>
    );
}