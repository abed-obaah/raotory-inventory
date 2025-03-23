import { FiArrowLeft } from "react-icons/fi";

export default function CreateCustomerModify({ setView }) {
    return (
        <div id="create-new-customer">
            {/* Back Button */}
            <button 
                onClick={() => setView("create-customer")}
                className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
            >
                <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                Back
            </button>

            {/* Create new customer */}
            <form className="flex flex-col gap-y-5 max-w-[800px] mx-auto">
                {/* Customer name */}
                <div>
                    <label className="block text-sm text-gray-757575">Customer Name</label>
                    <input
                        type="text"
                        name=""
                        required
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>
                {/* Phone number */}
                <div>
                    <label className="block text-sm text-gray-757575">Phone Number</label>
                    <input
                        type="tel"
                        name=""
                        required
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>
                {/* Gender */}
                <div>
                    <label className="block text-sm text-gray-757575">Gender</label>
                    <select required id="" class="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-2.5 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                {/* Location */}
                <div>
                    <label className="block text-sm text-gray-757575">Location</label>
                    <input
                        type="text"
                        name=""
                        required
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>

                {/* Modify button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-11 py-3 rounded-[10px] w-full cursor-pointer mt-10"
                >
                    Modify
                </button>
            </form>
        </div>
    );
}