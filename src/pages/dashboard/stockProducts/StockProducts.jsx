import { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function StockProducts() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: "",
        quantity: "",
        purchasePrice: "",
        retailPrice: "",
        wholesalePrice: "",
        batchNumber: "",
        expirationDate: ""
    });
    const [editingProduct, setEditingProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    };

    const addProduct = (e) => {
        e.preventDefault();
        if (!newProduct.name || !newProduct.quantity || !newProduct.purchasePrice || !newProduct.expirationDate) return;
        setProducts([...products, newProduct]);
        setNewProduct({ name: "", quantity: "", purchasePrice: "", retailPrice: "", wholesalePrice: "", batchNumber: "", expirationDate: "" });
    };

    const deleteProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index));
    };

    const openEditModal = (index) => {
        setEditingProduct({ ...products[index], index });
        setShowModal(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingProduct((prev) => ({ ...prev, [name]: value }));
    };

    const saveEditedProduct = () => {
        const updatedProducts = [...products];
        updatedProducts[editingProduct.index] = { ...editingProduct };
        delete updatedProducts[editingProduct.index].index;
        setProducts(updatedProducts);
        setShowModal(false);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row gap-y-10 gap-x-5">
                {/* New product */}
                <div className="md:w-[65%]">
                    <form onSubmit={addProduct} className="space-y-3 md:space-y-5">
                        {Object.keys(newProduct).map((key) => (
                            <div key={key}>
                                <label className="block text-sm text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                                <input
                                    type={key === "expirationDate" ? "date" : "text"}
                                    name={key}
                                    value={newProduct[key]}
                                    onChange={handleInputChange}
                                    className="bg-white border border-gray-300 rounded-lg block w-full px-4 py-2 mt-1"
                                    required={key !== "retailPrice" && key !== "wholesalePrice" && key !== "batchNumber"}
                                />
                            </div>
                        ))}
                        <button type="submit" className="bg-blue-500 text-white px-11 py-3 rounded-lg w-full mt-5">Add Product</button>
                    </form>
                </div>
                {/* Selected products */}
                <div className="md:w-[35%]">
                    <div className="overflow-x-auto border border-gray-300 rounded-lg">
                        <table className="w-full text-base text-left">
                            <caption>
                                <div className="text-left p-4">
                                    <h3 className="font-bold">Selected Products</h3>
                                    <p>Selected products displays here</p>
                                </div>
                            </caption>
                            <thead className="text-sm bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2">Product</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="px-4 py-2">
                                            {product.name} <span>x{product.quantity}</span>
                                            <p className="text-xs">Expires: {product.expirationDate}</p>
                                        </td>
                                        <td className="px-4 py-2 flex gap-2">
                                            <button onClick={() => openEditModal(index)} className="bg-blue-100 p-2 rounded">
                                                <FiEdit className="text-blue-500" />
                                            </button>
                                            <button onClick={() => deleteProduct(index)} className="bg-red-100 p-2 rounded">
                                                <RiDeleteBin6Line className="text-red-500" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Button */}
                    <button className="bg-blue-500 text-white px-11 py-3 rounded-lg w-full mt-5">Stock Up</button>
                </div>
            </div>
            {/* Edit product */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-700/70 flex justify-center items-center">
                    <div className="bg-white p-5 rounded-lg w-1/3">
                        <h2 className="text-lg font-bold mb-4">Edit Product</h2>
                        {Object.keys(editingProduct).map((key) => (
                            key !== "index" && (
                                <div key={key}>
                                    <label className="block text-sm text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                                    <input
                                        type={key === "expirationDate" ? "date" : "text"}
                                        name={key}
                                        value={editingProduct[key]}
                                        onChange={handleEditChange}
                                        className="bg-white border border-gray-300 rounded-lg block w-full px-4 py-2 mt-1"
                                    />
                                </div>
                            )
                        ))}
                        {/* Buttons */}
                        <div className="flex justify-end mt-4">
                            <button onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded-lg mr-2">Cancel</button>
                            <button onClick={saveEditedProduct} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}