import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SalesHistory() {
    return (
        <>
            <div className="flex flex-col">
                {/* Upper section */}
                <div className="flex items-end gap-x-8 mb-13">
                    {/* Total */}
                    <div className="whitespace-nowrap">
                        <p className="text-gray-757575 text-base font-medium">Total Amount</p>
                        <h4 className="text-gray-757575 text-2xl font-bold">
                            000,000,000
                        </h4>
                    </div>
                    {/* Search */}
                    <div className="flex-1">
                        <form class="flex items-center mx-auto">   
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="text" id="voice-search" class="bg-white border border-black-10-percent text-gray-757575 text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full ps-10 p-2.5 placeholder-gray-b4b4b4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-b4b4b4 dark:text-gray-757575 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search product, cashier" />
                            </div>
                        </form>
                    </div>
                    {/* Begin date / end date */}
                    <div className="flex gap-4">
                        {/* Begin date */}
                        <div>
                            <p className="text-xs font-semibold mb-1">Begin Date</p>
                            <input style={{ colorScheme: "dark" }} type="date" className="bg-dark-primary rounded-[5px] text-xs text-white-f8fdff font-semibold p-2.5" />
                        </div>
                        {/* End date */}
                        <div>
                            <p className="text-xs font-semibold mb-1">End Date</p>
                            <input style={{ colorScheme: "dark" }} type="date" className="bg-dark-primary rounded-[5px] text-xs text-white-f8fdff font-semibold p-2.5" />
                        </div>
                    </div>
                </div>
                {/* Lower section */}
                <div>
                    {/* Products table */}
                    <div className="relative overflow-x-auto border border-black-10-percent mb-10">
                        <table className="w-full text-base text-left">
                            <thead className="text-sm text-white bg-blue-001b2a">
                                <tr>
                                    <th className="px-2.5 py-3 border-r">S/N</th>
                                    <th className="px-2.5 py-3 border-r">Product Name</th>
                                    <th className="px-2.5 py-3 border-r">Cashier</th>
                                    <th className="px-2.5 py-3 border-r">Quantity</th>
                                    <th className="px-2.5 py-3 border-r">Invoice No.</th>
                                    <th className="px-2.5 py-3 border-r">Amount</th>
                                    <th className="px-2.5 py-3">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white hover:bg-gray-100">
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                                        01
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                                        Paracetamol
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        Nurse Stella
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        2
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        ABZ-08645
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        NGN 1,500
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        1:05 PM
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-100">
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                                        01
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                                        Paracetamol
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        Nurse Stella
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        2
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        ABZ-08645
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        NGN 1,500
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        1:05 PM
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-100">
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                                        01
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                                        Paracetamol
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        Nurse Stella
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        2
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        ABZ-08645
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        NGN 1,500
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                                        1:05 PM
                                    </td>
                                </tr>
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
            </div>
        </>
    );
}