export default function InvoiceHeldReceipts({ onBack }) {
    return (
        <div>
            <button
                className="bg-gray-500 text-white px-5 py-2 rounded-md mb-4"
                onClick={onBack} // ✅ Go back to Invoice
            >
                Back
            </button>
            <h2>Held Receipts content</h2>
        </div>
    );
}