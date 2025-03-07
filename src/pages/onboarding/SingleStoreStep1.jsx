import { useState } from "react";

export default function SingleStoreStep1({ setStep }) {
    const [formData, setFormData] = useState({
        businessName: "",
        location: "",
        phoneNumber: "",
        termsAccepted: false,
    });

    const isFormValid =
        formData.businessName.trim() !== "" &&
        formData.location.trim() !== "" &&
        formData.phoneNumber.trim() !== "" &&
        formData.termsAccepted;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <div className="flex flex-col w-full max-w-[536px] mx-auto mt-10">
            {/* Heading */}
            <div className="mb-7 text-center">
                <h2 className="text-2xl font-semibold mb-2">Single store</h2>
                <p className="text-gray-600 text-base max-w-[468px] mx-auto">
                    This gives you the ability to set up your store and inventory appropriately.
                </p>
            </div>

            {/* Form */}
            <div className="w-full border border-black-10-percent rounded-3xl p-10.5">
                <form action="#" method="POST" className="space-y-6">
                    {/* Business name */}
                    <div>
                        <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                            placeholder="Business name"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                            placeholder="Location"
                            required
                        />
                    </div>

                    {/* Phone number */}
                    <div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                            placeholder="Phone number"
                            required
                        />
                    </div>

                    {/* Terms and conditions */}
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                name="termsAccepted"
                                type="checkbox"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                className="w-4 h-4 border border-black-10-percent rounded bg-white focus:outline-none focus:ring-3 focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-normal text-blue-001b2a">
                                Agree to create store on Raotory
                            </label>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mb-4 mt-20">
                        <button
                            type="button"
                            disabled={!isFormValid}
                            onClick={() => setStep((prev) => prev + 1)}
                            className={`flex w-full justify-center font-semibold rounded-[10px] text-base p-4 text-center me-2 
                                ${isFormValid ? "bg-[#29A8F1] text-white hover:bg-[#1F8BCC]" : "bg-gray-d9d9d9 text-gray-500 cursor-not-allowed"}`}
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}