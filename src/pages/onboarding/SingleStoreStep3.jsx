export default function SingleStoreStep3({ setStep }) {
    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Single Store - Step 3</h2>
            <p className="text-gray-600 mb-4">This is the third step for setting up a single store.</p>
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setStep((prev) => prev + 1)}
            >
                Continue
            </button>
        </div>
    );
}