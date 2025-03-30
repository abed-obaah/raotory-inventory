import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoMdThumbsUp, IoIosCloseCircleOutline } from "react-icons/io";
import { createPortal } from "react-dom";

export default function CreateNewCustomer({ setView }) {
    // Get user email from Redux store
    const { user } = useSelector((state) => state.auth);
    const userEmail = user?.email || "";

    // State for form data
    const [formData, setFormData] = useState({
        customer_name: "",
        phone_number: "",
        gender: "Male",
        location: "",
    });

    // Loading state for submit button
    const [isLoading, setIsLoading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userEmail) {
            alert("User is not authenticated.");
            return;
        }

        // Log form data to ensure it's correct
        console.log("Submitting data:", formData, "Created by:", userEmail);

        setIsLoading(true); // Start loading

        try {
            // API Call
            const response = await axios.post(
                "https://raotory.com/apis/create_customer.php",
                {
                    name: formData.customer_name,
                    phone: formData.phone_number,
                    gender: formData.gender,
                    location: formData.location,
                    created_by: userEmail, // Send user's email
                }
            );

            if (response.data.status === "success") {
                // alert("Customer created successfully!");
                setShowModal(true);
                setFormData({
                    customer_name: "",
                    phone_number: "",
                    gender: "Male",
                    location: "",
                }); // Reset form
                // setView("create-customer"); // Navigate back to customer list
            } else {
                alert(response.data.message || "Failed to create customer.");
            }
        } catch (error) {
            console.error("Error creating customer:", error);
            alert(error?.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    // Modal
    const [showModal, setShowModal] = useState(false);

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

            {/* Create new customer form */}
            <form
                className="flex flex-col gap-y-5 max-w-[800px] mx-auto"
                onSubmit={handleSubmit}
            >
                {/* Customer Name */}
                <div>
                    <label className="block text-sm text-gray-757575">Customer Name</label>
                    <input
                        type="text"
                        name="customer_name"
                        value={formData.customer_name}
                        onChange={handleChange}
                        required
                        placeholder="Enter customer's full name"
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-sm text-gray-757575">Phone Number</label>
                    <input
                        type="tel"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                        placeholder="Enter phone number"
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm text-gray-757575">Gender</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-2.5 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm text-gray-757575">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="Enter customer's location"
                        className="bg-white border border-gray-300 text-dark-primary rounded-lg block w-full px-4 py-3 mt-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                </div>

                {/* Create Customer Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`bg-blue-500 text-white px-11 py-3 rounded-[10px] w-full cursor-pointer mt-10 ${
                        isLoading ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                >
                    {isLoading ? "Creating..." : "Create Customer"}
                </button>
            </form>

            {/* Success modal */}
            {showModal &&
                createPortal(
                    <div className="fixed inset-0 w-screen h-screen bg-gray-700/70 flex justify-center items-center z-50">
                        <div className="flex flex-col items-center bg-white p-3 rounded-xl shadow-lg sm:min-w-[400px]">
                            <IoIosCloseCircleOutline onClick={() => setView("create-customer")} className="size-6 self-end cursor-pointer" />
                            <div className="bg-blue-200 size-20 rounded-full flex items-center justify-center mb-8">
                                <IoMdThumbsUp className="size-12 text-blue-0e90da" />
                            </div>
                            <h2 className="text-xl text-gray-757575 font-bold mb-8">Created Successfully</h2>
                            <div className="flex gap-6 mb-6">
                                <button 
                                    onClick={() => setView("create-customer")}
                                    className="text-gray-757575 hover:text-white bg-white border border-black-10-percent hover:border-blue-0e90da hover:bg-blue-0e90da rounded-[10px] text-base font-semibold px-5 py-2"
                                >
                                    View Customers
                                </button>
                                <button 
                                    onClick={() => setView("create-customer")}
                                    className="text-white bg-blue-primary hover:bg-blue-0e90da rounded-[10px] text-base font-semibold px-5 py-2"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            }
        </div>
    );
}