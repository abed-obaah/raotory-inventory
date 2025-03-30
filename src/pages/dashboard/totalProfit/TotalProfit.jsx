import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function TotalProfit() {
  // Dummy data for profit records
  const dummyData = [
    {
      id: 1,
      productName: "Paracetamol",
      totalCost: 200000,
      quantityStocked: 67973,
      quantitySold: 45884,
      amountSold: 145000,
      profitMade: 54000,
      date: "2023-05-15"
    },
    {
      id: 2,
      productName: "Ibuprofen",
      totalCost: 180000,
      quantityStocked: 54321,
      quantitySold: 38976,
      amountSold: 135000,
      profitMade: 48000,
      date: "2023-05-16"
    },
    {
      id: 3,
      productName: "Amoxicillin",
      totalCost: 250000,
      quantityStocked: 78901,
      quantitySold: 52345,
      amountSold: 175000,
      profitMade: 65000,
      date: "2023-05-17"
    },
    {
      id: 4,
      productName: "Vitamin C",
      totalCost: 120000,
      quantityStocked: 45678,
      quantitySold: 34567,
      amountSold: 110000,
      profitMade: 42000,
      date: "2023-05-18"
    },
    {
      id: 5,
      productName: "Aspirin",
      totalCost: 150000,
      quantityStocked: 56789,
      quantitySold: 43210,
      amountSold: 125000,
      profitMade: 50000,
      date: "2023-05-19"
    },
    {
      id: 6,
      productName: "Omeprazole",
      totalCost: 220000,
      quantityStocked: 65432,
      quantitySold: 49876,
      amountSold: 165000,
      profitMade: 60000,
      date: "2023-05-20"
    },
    {
      id: 7,
      productName: "Cetirizine",
      totalCost: 90000,
      quantityStocked: 34567,
      quantitySold: 28765,
      amountSold: 95000,
      profitMade: 38000,
      date: "2023-05-21"
    },
    {
      id: 8,
      productName: "Metformin",
      totalCost: 190000,
      quantityStocked: 56789,
      quantitySold: 45678,
      amountSold: 155000,
      profitMade: 55000,
      date: "2023-05-22"
    },
    {
      id: 9,
      productName: "Loratadine",
      totalCost: 110000,
      quantityStocked: 43210,
      quantitySold: 32109,
      amountSold: 105000,
      profitMade: 40000,
      date: "2023-05-23"
    },
    {
      id: 10,
      productName: "Simvastatin",
      totalCost: 210000,
      quantityStocked: 67890,
      quantitySold: 54321,
      amountSold: 185000,
      profitMade: 62000,
      date: "2023-05-24"
    },
    {
      id: 11,
      productName: "Atorvastatin",
      totalCost: 230000,
      quantityStocked: 76543,
      quantitySold: 65432,
      amountSold: 205000,
      profitMade: 70000,
      date: "2023-05-25"
    },
    {
      id: 12,
      productName: "Losartan",
      totalCost: 170000,
      quantityStocked: 54321,
      quantitySold: 43210,
      amountSold: 145000,
      profitMade: 52000,
      date: "2023-05-26"
    }
  ];

  // State variables
  const [products, setProducts] = useState(dummyData);
  const [filteredProducts, setFilteredProducts] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState("");
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Calculate total profit
  const totalProfit = filteredProducts.reduce((sum, product) => sum + product.profitMade, 0);

  // Format amount as NGN currency
  const formatAmount = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  // Handle search and date filter
  useEffect(() => {
    let results = [...products];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (product) =>
          product.productName.toLowerCase().includes(term)
      );
    }
    
    // Apply date filter
    if (beginDate || endDate) {
      const startDate = beginDate ? new Date(beginDate) : null;
      const endDateObj = endDate ? new Date(endDate) : null;
      
      results = results.filter((product) => {
        const productDate = new Date(product.date);
        return (
          (!startDate || productDate >= startDate) &&
          (!endDateObj || productDate <= endDateObj)
        );
      });
    }
    
    setFilteredProducts(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, beginDate, endDate, products]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <div className="flex flex-col">
        {/* Upper section */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-y-6 gap-x-8 mb-13">
          {/* Total */}
          <div className="whitespace-nowrap">
            <p className="text-gray-757575 text-base font-medium">Total Profit Made</p>
            <h4 className="text-gray-757575 text-2xl font-bold">
              {formatAmount(totalProfit)}
            </h4>
          </div>
          {/* Search */}
          <div className="flex-1">
            <form className="flex items-center mx-auto">   
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input 
                  type="text" 
                  id="voice-search" 
                  className="bg-white border border-black-10-percent text-gray-757575 text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full ps-10 p-2.5 placeholder-gray-b4b4b4 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-b4b4b4 dark:text-gray-757575 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Search product" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>
          {/* Begin date / end date */}
          <div className="flex gap-4">
            {/* Begin date */}
            <div>
              <p className="text-xs font-semibold mb-1">Begin Date</p>
              <input 
                style={{ colorScheme: "dark" }} 
                type="date" 
                className="bg-dark-primary rounded-[5px] text-xs text-white-f8fdff font-semibold p-2.5" 
                value={beginDate}
                onChange={(e) => setBeginDate(e.target.value)}
              />
            </div>
            {/* End date */}
            <div>
              <p className="text-xs font-semibold mb-1">End Date</p>
              <input 
                style={{ colorScheme: "dark" }} 
                type="date" 
                className="bg-dark-primary rounded-[5px] text-xs text-white-f8fdff font-semibold p-2.5" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Lower section */}
        <div>
          {/* Items per page selector */}
          <div className="flex justify-end mb-2">
            <select 
              className="bg-white border border-black-10-percent text-gray-757575 text-sm rounded-lg p-2"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={5}>5 per page</option>
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </select>
          </div>
          
          {/* Products table */}
          <div className="relative overflow-x-auto border border-black-10-percent mb-10">
            <table className="w-full text-base text-left">
              <thead className="text-sm text-white bg-blue-001b2a">
                <tr>
                  <th className="px-2.5 py-3 border-r">S/N</th>
                  <th className="px-2.5 py-3 border-r">Product Name</th>
                  <th className="px-2.5 py-3 border-r">Total Cost</th>
                  <th className="px-2.5 py-3 border-r">Quantity Stocked</th>
                  <th className="px-2.5 py-3 border-r">Quantity Sold</th>
                  <th className="px-2.5 py-3 border-r">Amount Sold</th>
                  <th className="px-2.5 py-3">Profit Made</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((product, index) => (
                    <tr key={product.id} className="bg-white hover:bg-gray-100">
                      {/* Serial number */}
                      <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                        {indexOfFirstItem + index + 1}
                      </td>
                      {/* Product name */}
                      <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">
                        {product.productName}
                      </td>
                      {/* Total cost */}
                      <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                        {formatAmount(product.totalCost)}
                      </td>
                      {/* Quantity stocked */}
                      <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                        {formatNumber(product.quantityStocked)}
                      </td>
                      {/* Quantity sold */}
                      <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                        {formatNumber(product.quantitySold)}
                      </td>
                      {/* Amount sold */}
                      <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                        {formatAmount(product.amountSold)}
                      </td>
                      {/* Profit made */}
                      <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">
                        {formatAmount(product.profitMade)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="bg-white">
                    <td colSpan="7" className="px-2.5 py-4 text-center text-gray-757575">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-gray-757575 text-sm">
                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredProducts.length)} of {filteredProducts.length} entries
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                className={`flex items-center justify-center size-7.5 rounded ${currentPage === 1 ? 'bg-gray-e5e5e5 cursor-not-allowed' : 'bg-blue-001b2a cursor-pointer'}`}
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <IoIosArrowBack className={`size-5 ${currentPage === 1 ? 'text-gray-757575' : 'text-white'}`} />
              </button>
              
              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  className={`flex items-center justify-center size-7.5 rounded text-sm ${currentPage === number ? 'bg-blue-001b2a text-white' : 'bg-gray-e5e5e5 text-gray-757575'}`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              ))}
              
              <button
                className={`flex items-center justify-center size-7.5 rounded ${currentPage === totalPages ? 'bg-gray-e5e5e5 cursor-not-allowed' : 'bg-blue-001b2a cursor-pointer'}`}
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <IoIosArrowForward className={`size-5 ${currentPage === totalPages || totalPages === 0 ? 'text-gray-757575' : 'text-white'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}