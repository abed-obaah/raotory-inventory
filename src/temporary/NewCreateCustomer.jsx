import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CreateNewCustomer from "./CreateNewCustomer";
import CustomerDetails from "./CustomerDetails";
import PatientCaseFile from "./PatientCaseFile";
import CreateCustomerModify from "./CreateCustomerModify";

const dummyCustomers = [
    { id: 1, name: "Amos Pharmacy Ltd", phone: "07014514834", gender: "Male", location: "Abraka, Delta" },
    { id: 2, name: "Bethel Stores", phone: "08034567890", gender: "Female", location: "Lagos" },
    { id: 3, name: "Crest Healthcare", phone: "09087654321", gender: "Male", location: "Abuja" },
    { id: 4, name: "Divine Pharmacy", phone: "07011223344", gender: "Female", location: "Port Harcourt" },
    { id: 5, name: "Eden Medics", phone: "08123456789", gender: "Male", location: "Kaduna" },
    { id: 6, name: "Foresight Drugs", phone: "08055667788", gender: "Female", location: "Benin City" },
    { id: 7, name: "Genesis Pharma", phone: "07099887766", gender: "Male", location: "Ibadan" },
    { id: 8, name: "Hopewell Medicals", phone: "09022334455", gender: "Female", location: "Enugu" },
    { id: 9, name: "Infinity Meds", phone: "08166778899", gender: "Male", location: "Abeokuta" },
    { id: 10, name: "Jubilee Healthcare", phone: "08033221144", gender: "Female", location: "Jos" }
];

export default function CreateCustomer() {
    const [view, setView] = useState("create-customer");
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [customers, setCustomers] = useState(dummyCustomers);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCustomers = customers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(customers.length / itemsPerPage);

    const deleteCustomer = (id) => {
        setCustomers(customers.filter(customer => customer.id !== id));
    };

    const addCustomer = (newCustomer) => {
        setCustomers([...customers, { id: customers.length + 1, ...newCustomer }]);
        setView("create-customer");
    };

    return (
        <>
            {view === "create-customer" && (
                <div id="create-customer">
                    {/* Create customer */}
                    <button
                        onClick={() => setView("create-new-customer")}
                        className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full cursor-pointer"
                    >
                        Create customer
                    </button>
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
                                {currentCustomers.map((customer) => (
                                    <tr key={customer.id} className="bg-white border border-gray-300 mb-5 rounded-[10px] grid grid-cols-6">
                                        <td
                                            onClick={() => setView("customer-details")}
                                            className="px-2.5 py-2 text-dark-primary font-semibold cursor-pointer col-span-2"
                                        >
                                            {customer.name}
                                        </td>
                                        <td className="px-2.5 py-2 text-dark-primary font-semibold">{customer.phone}</td>
                                        <td className="px-2.5 py-2 text-dark-primary font-semibold">{customer.gender}</td>
                                        <td className="px-2.5 py-2 text-dark-primary font-semibold">{customer.location}</td>
                                        <td className="px-2.5 py-2 flex items-center gap-2.5">
                                            <button
                                                onClick={() => {
                                                    setSelectedCustomer(customer);
                                                    setView("modify-customer");
                                                }}
                                                className="bg-blue-primary text-off-white text-base px-4 py-1 rounded cursor-pointer"
                                            >
                                                Modify
                                            </button>
                                            <button onClick={() => deleteCustomer(customer.id)} className="p-2 bg-red-100 rounded-full cursor-pointer">
                                                <RiDeleteBin6Line className="text-red-600" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-4">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className={`p-2 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-gray-500 text-white"}`}
                        >
                            <IoIosArrowBack />
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className={`p-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-gray-500 text-white"}`}
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            )}

            {view === "create-new-customer" && <CreateNewCustomer setView={setView} addCustomer={addCustomer} />}
            {view === "customer-details" && <CustomerDetails setView={setView} />}
            {view === "patient-case-file" && <PatientCaseFile setView={setView} />}
            {view === "modify-customer" && <CreateCustomerModify setView={setView} customer={selectedCustomer} />}
        </>
    );
}
