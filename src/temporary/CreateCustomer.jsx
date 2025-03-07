import { RiDeleteBin6Line } from "react-icons/ri";

export default function CreateCustomer() {
    return (
        <>
            <div id="create-customer">
                {/* Search customer / create customer */}
                <div className="flex items-center justify-between mb-12.5">
                    {/* Search customer */}
                    <div className="w-full max-w-[340px]">
                        <form class="flex items-center mx-auto">   
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="text" id="voice-search" class="bg-white border border-black-10-percent text-gray-757575 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder-gray-b4b4b4  dark:bg-white dark:border-black-10-percent dark:placeholder-gray-b4b4b4 dark:text-gray-757575 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search customer" />
                            </div>
                        </form>
                    </div>
                    {/* Create customer */}
                    <div className="w-full max-w-[340px]">
                        <button
                            onClick={() => setShowHeldReceipts(true)}
                            className="bg-blue-500 text-white px-11 py-2.5 rounded-[10px] w-full whitespace-nowrap cursor-pointer"
                        >
                            Create customer
                        </button>
                    </div>
                </div>

                {/* Customer table */}
                <div className="relative overflow-x-auto mb-10">
                    <table className="text-base w-full">
                        <thead className="text-gray-b4b4b4 font-semibold text-left">
                            <tr className="grid grid-cols-6">
                                <th className="px-2.5 py-3 col-span-2">Customer Name</th>
                                <th className="px-2.5 py-3">Phone Number</th>
                                <th className="px-2.5 py-3">Gender</th>
                                <th className="px-2.5 py-3">Location</th>
                                <th className="px-2.5 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border border-gray-e5e5e5 mb-5 rounded-[10px] grid grid-cols-6">
                                {/* Customer name */}
                                <td className="px-2.5 py-2 text-dark-primary font-semibold rounded-l-2xl col-span-2">
                                    <div className='flex items-center gap-2'>
                                        <div className='flex justify-center items-center text-white bg-[#8FD7FF] rounded size-7.5'>A</div>
                                        <p>Amos Pharmacy Ltd</p>
                                    </div>
                                </td>
                                {/* Phone number */}
                                <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                    07014514834
                                </td>
                                {/* Gender */}
                                <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                    <div className="flex items-center justify-center bg-[#0074B538] text-dark-primary font-semibold size-9 rounded-full">
                                        M
                                    </div>
                                </td>
                                {/* Location */}
                                <td className="px-2.5 py-2 text-dark-primary font-semibold">
                                    Abraka, Delta State
                                </td>
                                {/* Action */}
                                <td className="px-2.5 py-2 flex items-center gap-2.5">
                                    <button
                                        className="bg-blue-500 text-white text-base px-4 py-1 rounded"
                                    >
                                        Modify
                                    </button>
                                    <button className="p-2 bg-[#CA00001F] rounded-full">
                                        <RiDeleteBin6Line className="text-[#CA0000]" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}