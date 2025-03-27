import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import { useSelector } from "react-redux";

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
                alert("Customer created successfully!");
                setFormData({
                    customer_name: "",
                    phone_number: "",
                    gender: "Male",
                    location: "",
                }); // Reset form
                setView("customer-list"); // Navigate back to customer list
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
        </div>
    );
}