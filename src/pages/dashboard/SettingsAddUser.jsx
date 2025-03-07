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

            <div>Add User content</div>
        </div>
    );
}