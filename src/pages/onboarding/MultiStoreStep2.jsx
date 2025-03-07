import { useState } from "react";

export default function MultiStoreStep2({ setStep, storeCount }) {
    const [stores, setStores] = useState(
        Array.from({ length: storeCount }, () => ({
            businessName: "",
            location: "",
            phoneNumber: "",
        }))
    );

    const [termsAccepted, setTermsAccepted] = useState(false);

    const isFormValid =
        stores.every(
            (store) => store.businessName && store.location && store.phoneNumber
        ) && termsAccepted;

    const handleChange = (index, field, value) => {
        setStores((prev) =>
            prev.map((store, i) =>
                i === index ? { ...store, [field]: value } : store
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            setStep((prev) => prev + 1);
        }
    };

    return (
        <div className="flex flex-col w-full max-w-[536px] mx-auto mt-10">
            {/* Heading */}
            <div className="mb-7 text-center">
                <h2 className="text-2xl font-semibold mb-2">Multi store</h2>
                <p className="text-gray-600 text-base max-w-[468px] mx-auto">
                    This gives you the ability to set up your store and inventory appropriately.
                </p>
            </div>

            {/* Form */}
            <div className="w-full border border-black-10-percent rounded-3xl p-10.5">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {stores.map((store, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-lg font-semibold">Store {index + 1}</h3>

                            <input
                                type="text"
                                name={`businessName-${index}`}
                                value={store.businessName}
                                onChange={(e) =>
                                    handleChange(index, "businessName", e.target.value)
                                }
                                className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                placeholder="Business name"
                                required
                            />

                            <input
                                type="text"
                                name={`location-${index}`}
                                value={store.location}
                                onChange={(e) =>
                                    handleChange(index, "location", e.target.value)
                                }
                                className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                placeholder="Location"
                                required
                            />

                            <input
                                type="tel"
                                name={`phoneNumber-${index}`}
                                value={store.phoneNumber}
                                onChange={(e) =>
                                    handleChange(index, "phoneNumber", e.target.value)
                                }
                                className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                placeholder="Phone number"
                                required
                            />
                        </div>
                    ))}

                    {/* Agree to Terms Checkbox */}
                    <div className="flex items-center mt-5">
                        <input
                            id="terms"
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2"
                            required
                        />
                        <label htmlFor="terms" className="ml-2 text-gray-700 text-sm">
                            Agree to create store on Raotory
                        </label>
                    </div>

                    {/* Button */}
                    <div className="mb-4 mt-6">
                        <button
                            type="submit"
                            disabled={!isFormValid}
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