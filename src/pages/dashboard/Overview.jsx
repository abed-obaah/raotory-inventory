import { GoGraph } from "react-icons/go";
import { SlGraph } from "react-icons/sl";
import { BsCalendar3 } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function InputOrder() {
    return (
        <>
            {/* Main wrapper */}
            <div>
                {/* Day selection section */}
                <div className="flex items-center justify-between mb-8">
                    {/* Day dropdown */}
                    <div>
                        <div className="mt-2 grid grid-cols-1">
                            <select
                                id="location"
                                name="location"
                                defaultValue="Today"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option selected>Today</option>
                                    <option>Yesterday</option>
                                    <option>Last week</option>
                                    <option>Last month</option>
                                    <option>Last year</option>
                                    <option>All time</option>
                            </select>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                        </div>
                    </div>
                    {/* Description */}
                    <div>
                        <p>
                            Reports showing for <span className="text-blue-primary">Today</span>
                        </p>
                    </div>
                </div>

                {/* Summary cards section */}
                <div className="flex gap-2 w-full flex-wrap mb-12.5 xl:justify-between">
                    {/* Today's sales */}
                    <div className="border border-black-10-percent rounded-[20px] p-5 w-max shrink-0">
                        <div className="flex items-center justify-center bg-[#E7F8FC] size-15 rounded-full mb-7.5">
                            <GoGraph className="size-4" />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-757575 text-base font-medium">Today's sales</p>
                            <h4 className="text-black text-2xl font-bold">NGN 238,908.00</h4>
                        </div>
                        <div className="flex items-center gap-4.5">
                            <div className="flex items-center">
                                <SlGraph className="size-5 text-green-008c38" />
                                <p className="text-green-008c38 text-sm font-medium">20%</p>
                            </div>
                            <p className="text-gray-757575 text-sm font-medium">Than last month</p>
                        </div>
                    </div>
                    {/* No. of invoices issued */}
                    <div className="border border-black-10-percent rounded-[20px] p-5 w-max shrink-0">
                        <div className="flex items-center justify-center bg-[#F0E8FC] size-15 rounded-full mb-7.5">
                            <BsCalendar3 className="size-4" />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-757575 text-base font-medium">No. of invoices issued</p>
                            <h4 className="text-black text-2xl font-bold">6,728</h4>
                        </div>
                        <div className="flex items-center gap-4.5">
                            <div className="flex items-center">
                                <SlGraph className="size-5 text-green-008c38" />
                                <p className="text-green-008c38 text-sm font-medium">20%</p>
                            </div>
                            <p className="text-gray-757575 text-sm font-medium">Than last month</p>
                        </div>
                    </div>
                    {/* Profit made */}
                    <div className="border border-black-10-percent rounded-[20px] p-5 w-max shrink-0">
                        <div className="flex items-center justify-center bg-[#FCF3EC] size-15 rounded-full mb-7.5">
                            <BiDollar className="size-4" />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-757575 text-base font-medium">Profit made</p>
                            <h4 className="text-black text-2xl font-bold">NGN 238,908.00</h4>
                        </div>
                        <div className="flex items-center gap-4.5">
                            <div className="flex items-center">
                                <SlGraph className="size-5 text-green-008c38" />
                                <p className="text-green-008c38 text-sm font-medium">20%</p>
                            </div>
                            <p className="text-gray-757575 text-sm font-medium">Than last month</p>
                        </div>
                    </div>
                    {/* No. of products sold */}
                    <div className="border border-black-10-percent rounded-[20px] p-5 w-max shrink-0">
                        <div className="flex items-center justify-center bg-[#FCF3EC] size-15 rounded-full mb-7.5">
                            <BsBag className="size-4" />
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-757575 text-base font-medium">No. of products sold</p>
                            <h4 className="text-black text-2xl font-bold">90,000</h4>
                        </div>
                        <div className="flex items-center gap-4.5">
                            <div className="flex items-center">
                                <SlGraph className="size-5 text-green-008c38" />
                                <p className="text-green-008c38 text-sm font-medium">20%</p>
                            </div>
                            <p className="text-gray-757575 text-sm font-medium">Than last month</p>
                        </div>
                    </div>
                </div>

                {/* Invoice section */}
                <div className="flex gap-x-8 xl:justify-between">
                    {/* Left side */}
                    <div className="w-full">
                        {/* Recent invoices */}
                        <div class="relative overflow-x-auto sm:rounded-[20px] border border-black-10-percent">
                            <table class="w-full text-base text-left rtl:text-right text-blue-001b2a dark:text-blue-001b2a">
                                <caption className="text-left text-black text-xl font-medium p-6">Recent Invoices</caption>
                                <thead class="text-sm text-blue-001b2a bg-black-10-percent border-b border-black-10-percent dark:text-blue-001b2a">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Invoice ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Customer
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Sales Date
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Paid Amount
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Sales Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <th scope="row" class="px-6 py-2 font-medium text-blue-001b2a whitespace-nowrap dark:text-blue-001b2a">
                                            #WUAS859
                                        </th>
                                        <td class="px-6 py-2">
                                            Jeremiah Omonefe
                                        </td>
                                        <td class="px-6 py-2">
                                            5/09/2024
                                        </td>
                                        <td class="px-6 py-2">
                                            NGN 30,000
                                        </td>
                                        <td class="px-6 py-2">
                                            <p class="text-sm font-medium text-green-008c38 bg-green-00B5484F py-1 px-3 rounded-[63px] inline-block text-center w-full">Delivered</p>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <th scope="row" class="px-6 py-2 font-medium text-blue-001b2a whitespace-nowrap dark:text-blue-001b2a">
                                            #WUAS859
                                        </th>
                                        <td class="px-6 py-2">
                                            Jeremiah Omonefe
                                        </td>
                                        <td class="px-6 py-2">
                                            5/09/2024
                                        </td>
                                        <td class="px-6 py-2">
                                            NGN 30,000
                                        </td>
                                        <td class="px-6 py-2">
                                            <p class="text-sm font-medium text-blue-001b2a bg-black-10-percent py-1 px-3 rounded-[63px] inline-block text-center w-full">In progress</p>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <th scope="row" class="px-6 py-2 font-medium text-blue-001b2a whitespace-nowrap dark:text-blue-001b2a">
                                            #WUAS859
                                        </th>
                                        <td class="px-6 py-2">
                                            Jeremiah Omonefe
                                        </td>
                                        <td class="px-6 py-2">
                                            5/09/2024
                                        </td>
                                        <td class="px-6 py-2">
                                            NGN 30,000
                                        </td>
                                        <td class="px-6 py-2">
                                            <p class="text-sm font-medium text-red-ca0000 bg-red-ca00001f py-1 px-3 rounded-[63px] inline-block text-center w-full">Returned</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="flex flex-col gap-y-8">
                        {/* Customers pie chart */}
                        <div className="sm:rounded-[20px] border border-black-10-percent p-6">Pie chart goes here</div>
                        {/* Stock alert */}
                        <div class="relative overflow-x-auto sm:rounded-[20px] border border-black-10-percent">
                            <table class="w-full text-base text-left rtl:text-right text-blue-001b2a dark:text-blue-001b2a">
                                <caption className="text-left text-black text-xl font-medium p-6">
                                    Stock Alert
                                </caption>
                                <thead class="text-sm text-blue-001b2a bg-black-10-percent border-b border-black-10-percent dark:text-blue-001b2a">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Product
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Quantity
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <td class="px-6 py-2">
                                            Sardine
                                        </td>
                                        <td class="px-6 py-2">
                                            300
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <td class="px-6 py-2">
                                            Fish
                                        </td>
                                        <td class="px-6 py-2">
                                            250
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}