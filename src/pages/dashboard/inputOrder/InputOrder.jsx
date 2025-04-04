import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdThumbsUp, IoIosCloseCircleOutline } from "react-icons/io";
import { createPortal } from "react-dom";

export default function InputOrder({ setSelectedComponent }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [customerSearchQuery, setCustomerSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [priceType, setPriceType] = useState('retail');
    const [paymentType, setPaymentType] = useState('');
    
    const products = [
        { id: 1, name: 'Paracetamol', cost: 10000, retail: 15000, wholesale: 12000, quantity: 1 },
        { id: 2, name: 'Ibuprofen', cost: 12000, retail: 18000, wholesale: 15000, quantity: 1 },
        { id: 3, name: 'Amoxicillin', cost: 9000, retail: 14000, wholesale: 11000, quantity: 1 },
        { id: 4, name: 'Vitamin C', cost: 8000, retail: 12000, wholesale: 10000, quantity: 1 },
        { id: 5, name: 'Multivitamin', cost: 15000, retail: 22000, wholesale: 18000, quantity: 1 }
    ];

    const customers = [
        { id: 1, name: 'John Doe', phone: '08012345678', gender: 'Male', location: 'Lagos' },
        { id: 2, name: 'Jane Smith', phone: '08023456789', gender: 'Female', location: 'Abuja' },
        { id: 3, name: 'Michael Johnson', phone: '08034567890', gender: 'Male', location: 'Port Harcourt' },
        { id: 4, name: 'Sarah Williams', phone: '08045678901', gender: 'Female', location: 'Kano' },
        { id: 5, name: 'David Brown', phone: '08056789012', gender: 'Male', location: 'Ibadan' },
        { id: 6, name: 'Emily Davis', phone: '08067890123', gender: 'Female', location: 'Enugu' },
        { id: 7, name: 'Robert Wilson', phone: '08078901234', gender: 'Male', location: 'Benin' }
    ];

    const handleCustomerSearch = (e) => {
        const query = e.target.value;
        setCustomerSearchQuery(query);
        if (query) {
            const filtered = customers.filter(customer => 
                customer.name.toLowerCase().includes(query.toLowerCase()) ||
                customer.phone.includes(query)
            );
            setFilteredCustomers(filtered);
        } else {
            setFilteredCustomers([]);
        }
    };

    const selectCustomer = (customer) => {
        setSelectedCustomer(customer);
        setCustomerSearchQuery(`${customer.name} - ${customer.phone}`);
        setFilteredCustomers([]);
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query) {
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    const addProductToTable = (product) => {
        const newProduct = { 
            ...product, 
            currentPrice: priceType === 'wholesale' ? product.wholesale : product.retail 
        };
        setSelectedProducts(prev => [...prev, newProduct]);
        setSearchQuery('');
        setFilteredProducts([]);
    };

    const updateProduct = (index, key, value) => {
        const updatedProducts = [...selectedProducts];
        updatedProducts[index][key] = value;
        if (key === 'quantity' || key === 'currentPrice') {
            updatedProducts[index].total = updatedProducts[index].quantity * updatedProducts[index].currentPrice;
        }
        setSelectedProducts(updatedProducts);
    };

    const handlePriceTypeChange = (type) => {
        setPriceType(type);
        setSelectedProducts(prev => prev.map(product => ({
            ...product,
            currentPrice: type === 'wholesale' ? product.wholesale : product.retail,
            total: product.quantity * (type === 'wholesale' ? product.wholesale : product.retail)
        })));
    };

    const deleteProduct = (index) => {
        setSelectedProducts(prev => prev.filter((_, i) => i !== index));
    };

    const totalCost = selectedProducts.reduce((sum, p) => sum + (p.total || (p.currentPrice * p.quantity)), 0);

    // Check if Save & Issue Receipt button should be active
    const isSaveButtonActive = selectedCustomer && selectedProducts.length > 0 && paymentType;
    
    // Check if Place On Hold button should be active
    const isPlaceOnHoldActive = selectedCustomer && selectedProducts.length > 0;

    return (
        <>
            {/* Main container */}
            <div>

                {/* Select customer / Create customer */}
                <form id="customer-search" className='mb-6.5'>
                    <div className="relative">
                        <input 
                            type="text" 
                            value={customerSearchQuery}
                            onChange={handleCustomerSearch}
                            className="block w-full p-4 ps-4 text-base text-blue-001b2a border border-black-10-percent rounded-[10px] bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575" 
                            placeholder="Select customer" 
                        />
                        {filteredCustomers.length > 0 && (
                            <ul className='absolute w-full bg-white border border-black-10-percent p-3 mt-3 z-10 rounded-[15px] max-w-[596px]'>
                                {filteredCustomers.map((customer) => (
                                    <li key={customer.id} 
                                        onClick={() => selectCustomer(customer)} 
                                        className='cursor-pointer p-2 hover:bg-[#E5E5E5] rounded'>
                                        <span>{customer.name} - {customer.phone}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button 
                            type='button' 
                            onClick={() => setSelectedComponent("Create Customer")}
                            className="text-white absolute end-4 bottom-2.5 bg-blue-primary hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-[10px] text-sm sm:text-base px-2 sm:px-5 py-2 dark:bg-blue-primary dark:hover:bg-blue-0e90da cursor-pointer">
                            Create customer
                        </button>
                    </div>
                </form>

                {/* Product search / Price type */}
                <div className='flex flex-col sm:flex-row gap-x-6.5 mb-10'>
                    {/* Product Search */}
                    <div id='product-search' className='relative mb-4 sm:w-[70%]'>
                        <input 
                            type='text' 
                            value={searchQuery} 
                            onChange={handleSearch} 
                            placeholder='Select Product' 
                            className='block w-full p-4 ps-4 text-base text-blue-001b2a border border-black-10-percent rounded-[10px] bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575'
                        />
                        {filteredProducts.length > 0 && (
                            <ul className='absolute w-full bg-white border border-black-10-percent p-3 mt-3 z-1 rounded-[15px] max-w-[596px]'>
                                {filteredProducts.map((product) => (
                                    <li key={product.id} 
                                        onClick={() => addProductToTable(product)} 
                                        className='cursor-pointer p-2 hover:bg-[#E5E5E5] rounded flex justify-between'>
                                        <span>{product.name}</span>
                                        <span className='border-l border-black-10-percent pl-2'>NGN {priceType === 'wholesale' ? product.wholesale : product.retail}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {/* Price type */}
                    <div className="grid grid-cols-1 sm:w-[30%] h-max">
                        <select
                            id="price-type"
                            name="price-type"
                            value={priceType}
                            onChange={(e) => handlePriceTypeChange(e.target.value)}
                            className="col-start-1 row-start-1 w-full appearance-none rounded-[10px] bg-white p-4 pr-10 pl-4 text-base text-gray-757575 outline-1 -outline-offset-1 outline-gray-300"
                        >
                            <option value="retail">Retail</option>
                            <option value="wholesale">Wholesale</option>
                        </select>
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-4 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </div>
                </div>

                {/* Product table */}
                <div id='product-table' className="relative overflow-x-auto border border-black-10-percent mb-6 max-h-[300px]">
                    <table id="products-table" className="w-full text-base text-left rtl:text-right text-blue-001b2a dark:text-blue-001b2a border-collapse bg-amber-200">
                        <caption className="hidden text-left text-black text-xl font-medium p-6"></caption>
                        <thead className="text-sm text-white bg-dark-text-primary border-b border-black-10-percent dark:text-blue-001b2a">
                            <tr>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>S/N</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575 min-w-[240px]'>Product Name</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>Cost Price</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>Selling Price</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>Quantity</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>Total</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedProducts.map((product, index) => (
                                <tr key={index} className='bg-white text-gray-757575 text-base'>
                                    {/* Serial number */}
                                    <td className='px-2.5 py-2 border-r border-b border-black-10-percent'>{index + 1}</td>
                                    {/* Product name */}
                                    <td className='px-2.5 py-2 border-r border-b border-black-10-percent'>{product.name}</td>
                                    {/* Cost price */}
                                    <td className='px-2.5 py-2 border-r border-b border-black-10-percent'>NGN {product.cost}</td>
                                    {/* Selling price */}
                                    <td className='px-2.5 py-2 border-r border-b border-black-10-percent text-blue-001b2a'>
                                        <input 
                                            type='number' 
                                            value={product.currentPrice} 
                                            onChange={(e) => updateProduct(index, 'currentPrice', parseFloat(e.target.value) || 0)}
                                            className='p-1 w-20'
                                        />
                                    </td>
                                    {/* Quantity */}
                                    <td className='border-r border-b border-black-10-percent p-2'>
                                        <input 
                                            type='number' 
                                            value={product.quantity} 
                                            onChange={(e) => updateProduct(index, 'quantity', parseInt(e.target.value) || 1)}
                                            className='p-1 w-20'
                                        />
                                    </td>
                                    {/* Total */}
                                    <td className='border-r border-b border-black-10-percent p-2'>NGN {product.total || product.currentPrice * product.quantity}</td>
                                    {/* Action */}
                                    <td className='border-r border-b border-black-10-percent p-2'>
                                        <button onClick={() => deleteProduct(index)} className='bg-[#CA00001F] p-2 rounded-full'>
                                            <RiDeleteBin6Line size={20} className='size-4 text-red-ca0000' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Payment type / total cost */}
                <div className='flex flex-col sm:flex-row gap-y-6 items-end justify-between mb-9'>
                    {/* Payment type */}
                    <div className="grid grid-cols-1 w-full sm:w-[30%] h-max">
                        <select
                            id="payment-type"
                            name="payment-type"
                            value={paymentType}
                            onChange={(e) => setPaymentType(e.target.value)}
                            className="col-start-1 row-start-1 w-full appearance-none rounded-[10px] bg-white p-4 pr-10 pl-4 text-base text-gray-757575 outline-1 -outline-offset-1 outline-gray-300"
                            required
                        >
                            <option value="">Payment Type</option>
                            <option value="cash">Cash</option>
                            <option value="transfer">Transfer</option>
                            <option value="pos">POS</option>
                        </select>
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-4 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </div>
                    {/* Total cost */}
                    <div className='flex flex-col bg-blue-001b2a p-2.5 w-max'>
                        <p className='text-[#E5E5E5] text-base font-medium'>Total Cost</p>
                        <h4 id='total-cost' className='text-[#E5E5E5] text-2xl font-bold'>
                            NGN {totalCost}
                        </h4>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row items-center gap-6'>
                    <button 
                        type="button" 
                        className={`w-full sm:w-[30%] text-white rounded-[10px] text-base font-semibold px-5 py-3.5 ${
                            isPlaceOnHoldActive 
                                ? 'bg-blue-primary hover:bg-blue-0e90da focus:ring-4 focus:ring-blue-300' 
                                : 'bg-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!isPlaceOnHoldActive}
                    >
                        Place On Hold
                    </button>
                    <button 
                        onClick={() => isSaveButtonActive && setShowModal(true)} 
                        className={`w-full sm:w-[70%] text-white rounded-[10px] text-base font-semibold px-5 py-3.5 ${
                            isSaveButtonActive 
                                ? 'bg-blue-primary hover:bg-blue-0e90da focus:ring-4 focus:ring-blue-300' 
                                : 'bg-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!isSaveButtonActive}
                    >
                        Save & Issue Receipt
                    </button>
                </div>

                {/* Success modal */}
                {showModal &&
                    createPortal(
                        <div className="fixed inset-0 w-screen h-screen bg-gray-700/70 flex justify-center items-center z-50">
                            <div className="flex flex-col items-center bg-white p-3 rounded-xl shadow-lg sm:min-w-[400px]">
                                <IoIosCloseCircleOutline onClick={() => setShowModal(false)} className="size-6 self-end cursor-pointer" />
                                <div className="bg-blue-200 size-20 rounded-full flex items-center justify-center mb-8">
                                    <IoMdThumbsUp className="size-12 text-blue-0e90da" />
                                </div>
                                <h2 className="text-xl text-gray-757575 font-bold mb-8">Saved Successfully</h2>
                                <div className="flex gap-6 mb-6">
                                    <button className="text-gray-757575 hover:text-white bg-white border border-black-10-percent hover:border-blue-0e90da hover:bg-blue-0e90da rounded-[10px] text-base font-semibold px-5 py-2">
                                        View Invoice
                                    </button>
                                    <button className="text-white bg-blue-primary hover:bg-blue-0e90da rounded-[10px] text-base font-semibold px-5 py-2">
                                        Print Receipt
                                    </button>
                                </div>
                            </div>
                        </div>,
                        document.body
                    )
                }
            </div>
        </>
    )
}