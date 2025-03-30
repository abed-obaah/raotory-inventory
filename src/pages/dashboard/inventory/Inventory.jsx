import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbFilter } from "react-icons/tb";

const dummyProducts = [
  { id: 1, name: "Premium Coffee Beans", quantityStocked: 1500, quantitySold: 850, expiringDate: "15/10/2025", totalCostPrice: "NGN45000.00", totalRevenue: "NGN127500.00" },
  { id: 2, name: "Organic Green Tea", quantityStocked: 2000, quantitySold: 1200, expiringDate: "20/12/2024", totalCostPrice: "NGN30000.00", totalRevenue: "NGN96000.00" },
  { id: 3, name: "Chocolate Cookies", quantityStocked: 3500, quantitySold: 2800, expiringDate: "05/05/2024", totalCostPrice: "NGN52500.00", totalRevenue: "NGN154000.00" },
  { id: 4, name: "Mineral Water", quantityStocked: 5000, quantitySold: 4500, expiringDate: "30/09/2026", totalCostPrice: "NGN25000.00", totalRevenue: "NGN112500.00" },
  { id: 5, name: "Energy Drink", quantityStocked: 1800, quantitySold: 1500, expiringDate: "15/03/2025", totalCostPrice: "NGN54000.00", totalRevenue: "NGN135000.00" },
  { id: 6, name: "Protein Bars", quantityStocked: 2500, quantitySold: 2000, expiringDate: "10/11/2024", totalCostPrice: "NGN62500.00", totalRevenue: "NGN180000.00" },
  { id: 7, name: "Vitamin C Supplements", quantityStocked: 1200, quantitySold: 950, expiringDate: "28/02/2025", totalCostPrice: "NGN48000.00", totalRevenue: "NGN114000.00" },
  { id: 8, name: "Hand Sanitizer", quantityStocked: 3000, quantitySold: 2700, expiringDate: "31/12/2024", totalCostPrice: "NGN45000.00", totalRevenue: "NGN108000.00" },
  { id: 9, name: "Face Masks", quantityStocked: 4000, quantitySold: 3800, expiringDate: "30/06/2025", totalCostPrice: "NGN40000.00", totalRevenue: "NGN152000.00" },
  { id: 10, name: "Multivitamins", quantityStocked: 1500, quantitySold: 1200, expiringDate: "15/09/2025", totalCostPrice: "NGN60000.00", totalRevenue: "NGN144000.00" },
];

export default function Inventory() {
  const [products, setProducts] = useState(dummyProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const openEditModal = (product) => setEditingProduct({...product});
  const closeEditModal = () => setEditingProduct(null);

  const handleSaveProduct = () => {
    setProducts(products.map(product => 
      product.id === editingProduct.id ? editingProduct : product
    ));
    closeEditModal();
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
    // Reset to first page if the current page becomes empty
    if (paginatedProducts.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="">
      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed top-0 left-0 right-0 z-100 w-full h-full bg-gray-700/70 flex justify-center items-center">
          <div className="bg-[#F8FDFF] p-8 w-full max-w-[548px] rounded-lg max-h-[90vh] overflow-y-auto lg:ml-65">
            <div className="flex items-center gap-2">
              <IoIosArrowBack className="text-blue-001b2a text-xl cursor-pointer" onClick={closeEditModal} />
              <h2 className="text-blue-001b2a text-xl font-semibold">Edit Product</h2>
            </div>
            {/* Product Name */}
            <div className="mt-4">
              <label className="block text-sm text-gray-757575">Product Name</label>
              <input
                type="text"
                value={editingProduct.name}
                onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                className="w-full px-4 py-3 border border-black-10-percent rounded-[10px] mt-1 bg-white text-blue-001b2a text-sm"
              />
            </div>

            {/* Quantity Stocked */}
            <div className="mt-4">
              <label className="block text-sm text-gray-757575">Quantity Stocked</label>
              <input
                type="number"
                value={editingProduct.quantityStocked}
                onChange={(e) => setEditingProduct({...editingProduct, quantityStocked: parseInt(e.target.value) || 0})}
                className="w-full px-4 py-3 border border-black-10-percent rounded-[10px] mt-1 bg-white text-blue-001b2a text-sm"
              />
            </div>

            {/* Quantity Sold */}
            <div className="mt-4">
              <label className="block text-sm text-gray-757575">Quantity Sold</label>
              <input
                type="number"
                value={editingProduct.quantitySold}
                onChange={(e) => setEditingProduct({...editingProduct, quantitySold: parseInt(e.target.value) || 0})}
                className="w-full px-4 py-3 border border-black-10-percent rounded-[10px] mt-1 bg-white text-blue-001b2a text-sm"
              />
            </div>

            {/* Expiring Date */}
            <div className="mt-4">
              <label className="block text-sm text-gray-757575">Expiring Date</label>
              <input
                type="text"
                value={editingProduct.expiringDate}
                onChange={(e) => setEditingProduct({...editingProduct, expiringDate: e.target.value})}
                className="w-full px-4 py-3 border border-black-10-percent rounded-[10px] mt-1 bg-white text-blue-001b2a text-sm"
                placeholder="DD/MM/YYYY"
              />
            </div>

            {/* Total Cost Price */}
            <div className="mt-4">
              <label className="block text-sm text-gray-757575">Total Cost Price</label>
              <input
                type="text"
                value={editingProduct.totalCostPrice}
                onChange={(e) => setEditingProduct({...editingProduct, totalCostPrice: e.target.value})}
                className="w-full px-4 py-3 border border-black-10-percent rounded-[10px] mt-1 bg-white text-blue-001b2a text-sm"
              />
            </div>

            {/* Total Revenue */}
            <div className="mt-4">
              <label className="block text-sm text-gray-757575">Total Revenue</label>
              <input
                type="text"
                value={editingProduct.totalRevenue}
                onChange={(e) => setEditingProduct({...editingProduct, totalRevenue: e.target.value})}
                className="w-full px-4 py-3 border border-black-10-percent rounded-[10px] mt-1 bg-white text-blue-001b2a text-sm"
              />
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-between">
              <button 
                className="bg-blue-primary hover:bg-blue-0e90da text-white px-11 py-1.5 rounded"
                onClick={handleSaveProduct}
              >
                Save
              </button>
              <button className="bg-red-ca00001f hover:bg-red-ca0000 text-red-ca0000 hover:text-white px-11 py-1.5 rounded" onClick={closeEditModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Total products and search section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-20 mb-10">
        <div className="whitespace-nowrap">
          <p className="text-gray-757575 text-sm font-medium">Total Products</p>
          <h4 id="total-products" className="text-gray-757575 text-4xl font-semibold">
            {filteredProducts.length}
          </h4>
        </div>
        <div className="w-full">
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
                className="bg-white border border-black-10-percent text-gray-757575 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder-gray-b4b4b4  dark:bg-white dark:border-black-10-percent dark:placeholder-gray-b4b4b4 dark:text-gray-757575 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Search by product" 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page when searching
                }}
              />
              <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                <TbFilter className="text-dark-primary" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Products per page selector */}
      <div className="mb-4 flex items-center">
        <label htmlFor="itemsPerPage" className="mr-2 text-sm text-gray-757575">
          Items per page:
        </label>
        <select
          id="itemsPerPage"
          value={productsPerPage}
          onChange={handleProductsPerPageChange}
          className="border border-black-10-percent rounded px-2 py-1 text-sm"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      {/* Products table */}
      <div className="relative overflow-x-auto border border-black-10-percent mb-10">
        <table id="products-table" className="w-full text-base text-left">
          <thead className="text-sm text-white bg-blue-001b2a">
            <tr>
              <th className="px-2.5 py-3 border-r">S/N</th>
              <th className="px-2.5 py-3 border-r">Product Name</th>
              <th className="px-2.5 py-3 border-r">Quantity Stocked</th>
              <th className="px-2.5 py-3 border-r">Quantity Sold</th>
              <th className="px-2.5 py-3 border-r">Expiring Date</th>
              <th className="px-2.5 py-3 border-r">Total Cost Price</th>
              <th className="px-2.5 py-3">Total Revenue</th>
              <th className="px-2.5 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product, index) => (
                <tr key={product.id} className="bg-white hover:bg-gray-100">
                  <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 text-right">{startIndex + index + 1}</td>
                  <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575 whitespace-nowrap">{product.name}</td>
                  <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">{product.quantityStocked}</td>
                  <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">{product.quantitySold}</td>
                  <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">{product.expiringDate}</td>
                  <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">{product.totalCostPrice}</td>
                  <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575"><p>{product.totalRevenue}</p></td>
                  <td className="px-2.5 py-2 flex gap-x-6">
                    <button
                      className="bg-blue-500 text-white text-base px-4 py-1 rounded"
                      onClick={() => openEditModal(product)}
                    >
                      Modify
                    </button>
                    <button 
                      className="p-2 bg-red-100 rounded-full hover:bg-red-200"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-757575">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center gap-4 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="flex items-center justify-center size-7.5 bg-gray-200 rounded disabled:opacity-50"
        >
          <IoIosArrowBack />
        </button>
        
        <div className="flex items-center gap-4">
          <span className="text-gray-757575 text-base font-medium">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        
        <button
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="flex items-center justify-center size-7.5 bg-gray-200 rounded disabled:opacity-50"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}