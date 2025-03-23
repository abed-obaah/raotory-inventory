export default function CreateCustomerModify({ setView, customer }) {
    return (
        <div id="create-new-customer">
            <button 
                onClick={() => setView("create-customer")}
                className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
            >
                <FiArrowLeft className="text-dark-primary text-xl mr-1" />  
                Back
            </button>

            {/* Form */}
            <form className="flex flex-col gap-y-5 max-w-[800px] mx-auto">
                <div>
                    <label className="block text-sm text-gray-757575">Customer Name</label>
                    <input
                        type="text"
                        defaultValue={customer?.name || ""}
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-757575">Phone Number</label>
                    <input
                        type="tel"
                        defaultValue={customer?.phone || ""}
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-757575">Gender</label>
                    <select 
                        defaultValue={customer?.gender || "Male"} 
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-2.5 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm text-gray-757575">Location</label>
                    <input
                        type="text"
                        defaultValue={customer?.location || ""}
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>

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
