import { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

    export default function StockProducts() {
        const [showDropdown, setShowDropdown] = useState(false);

        return (
            <>
                {/* Stock products - main */}
                <div className="flex gap-x-5">
                    {/* Left section */}
                    <div className="w-[65%]">
                        <form action="#" method="" className="space-y-5" id="new-product">
                            {/* Product Name */}
                            <div>
                                <label className="block text-sm text-gray-757575">Product Name</label>
                                <input
                                    type="text"
                                    className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full px-4 py-3 mt-1"
                                />
                            </div>           
                            {/* Quantity */}
                            <div>
                                <label className="block text-sm text-gray-757575">Quantity</label>
                                <input
                                    type="number"
                                    className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full px-4 py-3 mt-1"
                                />
                            </div>           
                            {/* Purchase price per item */}
                            <div>
                                <label className="block text-sm text-gray-757575">Purchase price per item</label>
                                <input
                                    type="number"
                                    className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full px-4 py-3 mt-1"
                                />
                            </div>           
                            {/* Retail price / Wholesale price */}
                            <div className="flex gap-5">
                                {/* Retail price */}
                                <div className="flex-1">
                                    <label className="block text-sm text-gray-757575">Retail price</label>
                                    <input
                                        type="number"
                                        className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full px-4 py-3 mt-1"
                                    />
                                </div>   
                                {/* Wholesale price */}
                                <div className="flex-1">
                                    <label className="block text-sm text-gray-757575">Wholesale price</label>
                                    <input
                                        type="number"
                                        className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full px-4 py-3 mt-1"
                                    />
                                </div>
                            </div>
                            {/* Batch number */}
                            <div className="flex-1">
                                <label className="block text-sm text-gray-757575">Batch number</label>
                                <input
                                    type="text"
                                    className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full px-4 py-3 mt-1"
                                />
                            </div>  
                            {/* Expiration date */}
                            <div className="flex-1">
                                <label className="block text-sm text-gray-757575">Expiration date</label>
                                <input
                                    type="date"
                                    className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full px-4 py-3 mt-1"
                                />
                            </div>  

                            {/* Button */}
                            <button className="bg-blue-0e90da text-white px-11 py-3 rounded-[10px] w-full mt-10">
                                Add Product
                            </button>
                        </form>
                    </div>
                    {/* Right section */}
                    <div className="w-[35%]">
                        <div class="relative overflow-x-auto sm:rounded-[20px] border border-black-10-percent">
                            <table id="selected-products" class="w-full text-base text-left rtl:text-right text-blue-001b2a dark:text-blue-001b2a">
                                <caption>
                                    <div className="text-left p-4">
                                        <h3 className="font-bold">Selected Products</h3>
                                        <p>Selected products displays here</p>
                                    </div>
                                </caption>
                                <thead class="hidden text-sm text-blue-001b2a bg-black-10-percent border-b border-black-10-percent dark:text-blue-001b2a">
                                    <tr>
                                        <th scope="col" class="px-6 py-3"></th>
                                        <th scope="col" class="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="flex justify-between border-b border-black-10-percent relative">
                                        <td className="px-4 py-2">
                                            <div>
                                                <p>Sardine <span>x2000</span></p>
                                                <p className="text-xs">Expires: <span>11 Sept, 2027</span></p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-right">
                                            <div className="flex items-center justify-end relative">
                                                <p>NGN <span>20,000</span></p>
                                                <IoMdMore
                                                    className="text-xl cursor-pointer ml-2"
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                />
                                                
                                                {showDropdown && (
                                                    <div className="flex gap-1.5 absolute top-5.5 right-0 bg-white-f8fdff p-2.5 shadow-md rounded-lg">
                                                        <button className="flex items-center justify-center bg-[#0E90DA1C] size-4.5 rounded-full">
                                                            <FiEdit className="size-2.5 text-blue-0e90da" />
                                                        </button>
                                                        <button className="flex items-center justify-center bg-[#CA00001F] size-4.5 rounded-full">
                                                            <RiDeleteBin6Line className="size-2.5 text-red-ca0000" />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Button */}
                            <div className="px-3 py-6">
                                <button className="bg-blue-0e90da text-white px-11 py-3 rounded-[10px] w-full mt-10">
                                    Stock up
                                </button>
                            </div>                   
                        </div>
                    </div>
                </div>

                {/* Stock products - modify */}
                <div></div>
            </>

        );
    }