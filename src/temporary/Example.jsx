import { useState } from "react";
import InvoiceViewInvoice from "./InvoiceViewInvoice";
import InvoiceHeldReceipts from "./InvoiceHeldReceipts";
import InvoiceHeroImage from '../../assets/invoice-hero.png'

export default function Invoice() {
    const [showViewInvoice, setShowViewInvoice] = useState(false);
    const [showHeldReceipts, setShowHeldReceipts] = useState(false);

    return (
        <>
            {showViewInvoice ? (
                <InvoiceViewInvoice onBack={() => setShowViewInvoice(false)} />
            ) : (
                <div id='invoice-home'>
                    {/* Date */}
                    <p className="text-[10px] text-gray-757575 font-semibold mb-2 text-right">18th March 2024</p>

                    {/* Hero */}
                    <div className='flex flex-col sm:flex-row justify-between bg-blue-0e90da rounded-[10px] min-h-[164px] mb-8'>
                        {/* Left side */}
                        <div className='flex flex-col justify-between p-6'>
                            {/* Top section */}
                            <h2 className='text-white-f8fdff text-2xl mb-4 sm:mb-0'>All Invoices</h2>
                            {/* Lower section */}
                            <div className='flex flex-col sm:flex-row sm:items-center gap-y-4 gap-x-10'>
                                {/* Begin date */}
                                <div>
                                    <p className="text-white-f8fdff text-xs font-semibold mb-1">Begin Date</p>
                                    <input type="date" className="w-full sm:w-auto bg-white-f8fdff rounded-[5px] text-xs text-gray-757575 font-semibold p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300" />
                                </div>
                                {/* End date */}
                                <div>
                                    <p className="text-white-f8fdff text-xs font-semibold mb-1">End Date</p>
                                    <input type="date" className="w-full sm:w-auto bg-white-f8fdff rounded-[5px] text-xs text-gray-757575 font-semibold p-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300" />
                                </div>
                                {/* Status */}
                                <form class="">
                                    <label for="" class="text-white-f8fdff text-xs font-semibold">Status</label>
                                    <select id="" class="bg-white-f8fdff text-gray-757575 text-sm rounded-[5px] block w-full p-2 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                        <option selected>Any</option>
                                        <option value="">Option 2</option>
                                        <option value="">Option 3</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        {/* Right side */}
                        <div className='hidden xl:flex items-end pr-13.5'>
                            <img src={InvoiceHeroImage} alt="Image of an invoice" className='w-full max-w-[300px] h-auto max-h-[145px] object-cover' />
                        </div>
                    </div>

                    {/* Search / View held receipts */}
                    <div className='flex flex-col sm:flex-row sm:items-center gap-y-6 gap-x-13 mb-8'>
                        {/* Search */}
                        <div className="w-full">
                            <form class="flex items-center mx-auto">   
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="text" id="voice-search" class="bg-white border border-black-10-percent text-gray-757575 text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full ps-10 p-2.5 placeholder-gray-b4b4b4  dark:bg-white dark:border-black-10-percent dark:placeholder-gray-b4b4b4 dark:text-gray-757575 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by customer name" />
                                </div>
                            </form>
                        </div>
                        {/* Button */}
                        <div>
                            <button
                                className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full whitespace-nowrap cursor-pointer"
                            >
                                View Held Receipts
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="relative overflow-x-auto mb-10">
                        <table className="text-base w-full">
                            <thead className="text-gray-b4b4b4 font-semibold text-left">
                                <tr className='grid grid-cols-6'>
                                    <th className="col-span-2 px-2.5 py-3">Customer Name</th>
                                    <th className="px-2.5 py-3">Invoice Number</th>
                                    <th className="px-2.5 py-3">Sales Type</th>
                                    <th className="px-2.5 py-3">Status</th>
                                    <th className="px-2.5 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="grid grid-cols-6 bg-white border border-gray-e5e5e5 rounded-[10px] mb-5">
                                    <td className="col-span-2 px-2.5 py-2 text-dark-primary font-semibold">
                                        <div className='flex items-center gap-2'>
                                            <div className='flex justify-center items-center text-white bg-[#8FD7FF] rounded size-7.5'>A</div>
                                            <p>Amos Pharmacy Ltd</p>
                                        </div>
                                    </td>
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        #2022345
                                    </td>
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        Wholesale
                                    </td>
                                    <td className="px-2.5 py-2">
                                        <div className="flex items-center justify-center bg-[#00B5484F] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                            Paid
                                        </div>
                                    </td>
                                    <td className="px-2.5 py-2">
                                        <button 
                                            onClick={() => setShowViewInvoice(true)}
                                            className="bg-blue-primary text-white px-8 py-1 rounded w-max cursor-pointer">
                                            View
                                        </button>
                                    </td>
                                </tr>
                                <tr className="grid grid-cols-6 bg-white border border-gray-e5e5e5 rounded-[10px] mb-5">
                                    <td className="col-span-2 px-2.5 py-2 text-dark-primary font-semibold">
                                        <div className='flex items-center gap-2'>
                                            <div className='flex justify-center items-center text-white bg-[#8FD7FF] rounded size-7.5'>A</div>
                                            <p>Amos Pharmacy Ltd</p>
                                        </div>
                                    </td>
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        #2022345
                                    </td>
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        Wholesale
                                    </td>
                                    <td className="px-2.5 py-2">
                                        <div className="flex items-center justify-center bg-[#CA00001F] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                            Credit
                                        </div>
                                    </td>
                                    <td className="px-2.5 py-2">
                                        <button 
                                            onClick={() => setShowViewInvoice(true)}
                                            className="bg-blue-primary text-white px-8 py-1 rounded w-max cursor-pointer">
                                            View
                                        </button>
                                    </td>
                                </tr>
                                <tr className="grid grid-cols-6 bg-white border border-gray-e5e5e5 rounded-[10px] mb-5">
                                    <td className="col-span-2 px-2.5 py-2 text-dark-primary font-semibold">
                                        <div className='flex items-center gap-2'>
                                            <div className='flex justify-center items-center text-white bg-[#8FD7FF] rounded size-7.5'>A</div>
                                            <p>Amos Pharmacy Ltd</p>
                                        </div>
                                    </td>
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        #2022345
                                    </td>
                                    <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                        Wholesale
                                    </td>
                                    <td className="px-2.5 py-2">
                                        <div className="flex items-center justify-center bg-[#C6CA001F] text-dark-primary font-semibold px-4 py-1 rounded-[37px] w-[128px]">
                                            Part
                                        </div>
                                    </td>
                                    <td className="px-2.5 py-2">
                                        <button 
                                            onClick={() => setShowViewInvoice(true)}
                                            className="bg-blue-primary text-white px-8 py-1 rounded w-max cursor-pointer">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}