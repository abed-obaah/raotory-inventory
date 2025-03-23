import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CreateNewCustomer from "./CreateNewCustomer";
import CustomerDetails from "./CustomerDetails";
import PatientCaseFile from "./PatientCaseFile";
import { useSelector } from "react-redux";
import axios from "axios";


export default function CreateCustomer() {
    const [view, setView] = useState("create-customer");
    const [customers, setCustomers] = useState([]);

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const { user } = useSelector((state) => state.auth);
const userEmail = user?.email || "";
const [selectedCustomer, setSelectedCustomer] = useState(null);

useEffect(() => {
    const fetchCustomers = async () => {
        if (!userEmail) return;
        setLoading(true);

        try {
            const response = await axios.get('https://raotory.com/apis/fetch_users.php', {
                params: { email: userEmail },
            });
            console.log("API Response:", response.data);
            
            // Check if response.data.users is an array
            if (Array.isArray(response.data?.users)) {
                setCustomers(response.data.users);
            } else {
                setCustomers([]); // Set empty if not an array
            }
        } catch (err) {
            console.error("Error fetching customers:", err);
            setError("Failed to fetch customers");
        } finally {
            setLoading(false);
        }
    };
    fetchCustomers();
}, [userEmail]);





    return (
        <>
            {view === "create-customer" && (
                <div id="create-customer">
                    {/* Search customer / create customer */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-y-6 mb-12.5">
                        {/* Search customer */}
                        <div className="w-full sm:max-w-[340px]">
                            <form className="flex items-center mx-auto">
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="text" className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full ps-10 p-2.5 placeholder-gray-400" placeholder="Search customer" />
                                </div>
                            </form>
                        </div>
                        {/* Create customer */}
                        <div className="w-full sm:max-w-[340px]">
                            <button
                                onClick={() => setView("create-new-customer")}
                                className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                            >
                                Create customer
                            </button>
                        </div>
                    </div>

                    {/* Customer table */}
                    <div className="relative overflow-x-auto">
    <table className="text-base w-full">
        <thead className="text-gray-600 font-semibold text-left">
            <tr className="grid grid-cols-6">
                <th className="px-2.5 py-3 col-span-2">Customer Name</th>
                <th className="px-2.5 py-3">Phone Number</th>
                <th className="px-2.5 py-3">Gender</th>
                <th className="px-2.5 py-3">Location</th>
                <th className="px-2.5 py-3">Action</th>
            </tr>
        </thead>

        <tbody>
            {loading ? (
                <tr>
                    <td colSpan="6" className="text-center py-4">
                        Loading...
                    </td>
                </tr>
            ) : error ? (
                <tr>
                    <td colSpan="6" className="text-center text-red-500 py-4">
                        {error}
                    </td>
                </tr>
            ) : customers.length === 0 ? (
                <tr>
                    <td colSpan="6" className="text-center py-4">
                        No customers found.
                    </td>
                </tr>
            ) : (
                customers.map((customer) => (
                    <tr key={customer.id} className="bg-white border border-gray-300 mb-5 rounded-[10px] grid grid-cols-6">
                        <td className="px-2.5 py-2 text-dark-primary font-semibold rounded-l-2xl col-span-2">
                            <div
                                onClick={() => {
                                    setSelectedCustomer(customer);
                                    setView("customer-details");
                                }}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <div className="flex justify-center items-center text-white bg-blue-400 rounded size-7.5">
                                    {customer.name?.charAt(0)?.toUpperCase() || "C"}
                                </div>
                                <p>{customer.name || "Unnamed Customer"}</p>
                            </div>
                        </td>
                        <td className="px-2.5 py-2 text-dark-primary font-semibold">
                            {customer.phone || "-"}
                        </td>
                        <td className="px-2.5 py-2 text-dark-primary font-semibold">
                            <div className="flex items-center justify-center bg-blue-100 text-dark-primary font-semibold size-9 rounded-full">
                                {customer.gender?.charAt(0)?.toUpperCase() || "-"}
                            </div>
                        </td>
                        <td className="px-2.5 py-2 text-dark-primary font-semibold">
                            {customer.location || "-"}
                        </td>
                        <td className="px-2.5 py-2 flex items-center gap-2.5">
                            <button className="bg-blue-primary text-off-white text-base px-4 py-1 rounded cursor-pointer">
                                Modify
                            </button>
                            <button className="p-2 bg-red-100 rounded-full cursor-pointer">
                                <RiDeleteBin6Line className="text-red-600" />
                            </button>
                        </td>
                    </tr>
                ))
            )}
        </tbody>
    </table>
</div>



                    {/* Pagination */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center bg-gray-e5e5e5 size-7.5 rounded">
                            <IoIosArrowBack className="text-white size-5" />
                        </div>
                        <div className="flex items-center justify-center bg-gray-e5e5e5 size-7.5 rounded">
                            <IoIosArrowForward className="text-white size-5" />
                        </div>
                    </div>
                </div>
            )}

            {view === "create-new-customer" && <CreateNewCustomer setView={setView} />}
            {view === "customer-details" && (
                    <CustomerDetails setView={setView} customer={selectedCustomer} />
                )}

            {view === "patient-case-file" && <PatientCaseFile setView={setView} />}
        </>
    );
}