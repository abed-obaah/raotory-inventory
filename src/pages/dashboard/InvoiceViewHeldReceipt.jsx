import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { BsPrinter } from "react-icons/bs";

export default function InvoiceViewHeldReceipt({ onBack }) {
    return (
        <div id='invoice-view-invoice'>

            {/* Back Button */}
            <button 
                onClick={onBack} 
                className="flex items-center text-dark-primary font-semibold cursor-pointer mb-4"
            >
                <IoIosArrowBack className="text-dark-primary text-xl" /> 
                Back to <span className="font-bold">&nbsp;All Invoices</span>
            </button>

            {/* Date */}
            <p className="text-[10px] text-gray-757575 font-semibold mb-2 text-right">18th March 2024</p>

            {/* Hero */}
            <div className="flex flex-col md:flex-row justify-between md:items-center bg-blue-0e90da rounded-[10px] md:min-h-[164px] mb-8">
                {/* Column 01 */}
                <div className="flex-[1.2] p-4 md:p-7.5">
                    <div className="flex items-center justify-center bg-[#FFE26F] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px] mb-3">
                        Held Receipt
                    </div>
                    <h3 className="text-2xl text-white-f8fdff font-semibold">Jeremiah Omonefe</h3>
                    <p className="text-white-f8fdff text-[13px] font-medium">INVOICE NUMBER: #<span>234650</span></p>
                    <p className="text-white-f8fdff text-[13px] font-medium">Abraka, Delta State</p>
                </div>

                {/* Divider 01 */}
                <div className="hidden md:block h-32 border-l border-white-f8fdff opacity-50"></div>

                {/* Column 02 */}
                <div className="flex-1 p-4 md:p-7.5">
                    <p className="text-white-f8fdff text-[13px] font-medium">Grand Total</p>
                    <h3 className="text-2xl text-white-f8fdff font-semibold">NGN <span>1,000,000</span></h3>
                </div>

                {/* Divider 02 */}
                <div className="hidden md:block h-32 border-l border-white-f8fdff opacity-50"></div>

                {/* Column 03 */}
                <div className="flex-1 p-4 md:p-7.5">
                    <p className="text-white-f8fdff text-[13px] font-medium">Paid</p>
                    <h3 className="text-2xl text-white-f8fdff font-semibold">NGN <span>500,000</span></h3>
                </div>

                {/* Divider 03 */}
                <div className="hidden md:block h-32 border-l border-white-f8fdff opacity-50"></div>

                {/* Column 04 */}
                <div className="flex-1 p-4 md:p-7.5">
                    <p className="text-white-f8fdff text-[13px] font-medium">Outstanding</p>
                    <h3 className="text-2xl text-white-f8fdff font-semibold mb-1.5">-NGN <span>500,000</span></h3>
                    <button className="flex items-center  gap-2 bg-white-f8fdff text-blue-0e90da text-[10px] font-medium rounded px-4 py-1.5 cursor-pointer">
                        <HiOutlineInboxArrowDown />
                        Confirm Payment
                    </button>
                </div>
            </div>

            {/* Products table */}
            <div className="relative overflow-x-auto mb-8">
                <table className="w-full text-base text-left border-collapse border border-gray-757575">
                    <thead className="text-sm text-gray-757575 bg-gray-e5e5e5">
                        <tr>
                            <th className="px-2.5 py-3 border border-black-10-percent">S/N</th>
                            <th className="px-2.5 py-3 border border-black-10-percent">Cost Price</th>
                            <th className="px-2.5 py-3 border border-black-10-percent">Selling Price</th>
                            <th className="px-2.5 py-3 border border-black-10-percent">Quantity</th>
                            <th className="px-2.5 py-3 border border-black-10-percent">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white hover:bg-gray-100">
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                01
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                Paracetamol
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                NGN<span>15,000</span>
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                120
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                NGN<span>250,000</span>
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-100">
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                01
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                Paracetamol
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                NGN<span>15,000</span>
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                120
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                NGN<span>250,000</span>
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-100">
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                01
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                Paracetamol
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                NGN<span>15,000</span>
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                120
                            </td>
                            <td className="px-2.5 py-2 border border-black-10-percent text-gray-757575">
                                NGN<span>250,000</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
                {/* Confirm payment button */}
                <button className="flex items-center gap-2 bg-blue-primary text-off-white text-base font-semibold rounded-[10px] px-6 md:px-20 py-2.5 cursor-pointer">
                    <HiOutlineInboxArrowDown className="text-off-white" />
                    Confirm Payment
                </button>
                {/* Print button */}
                <div className="bg-[#0E90DA33] p-2.5 rounded-full cursor-pointer">
                    <BsPrinter className="size-6" />
                </div>
            </div>
        </div>
    );
}
