import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // For logout

import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineShoppingCart, HiLogout } from "react-icons/hi";
import { PiScroll } from "react-icons/pi";
import { LuCircleUserRound } from "react-icons/lu";

import InputOrder from "./InputOrder";
import Inventory from "./Inventory";
import Overview from "./Overview";
import StockProduct from "./StockProduct";
import ReturnedProducts from "./ReturnedProducts";
import Invoice from "./Invoice";
import SalesHistory from "./SalesHistory";
import CreateCustomer from "./CreateCustomer";
import SettingsGeneral from "./SettingsGeneral";
import SettingsUsers from "./SettingsUsers";
import SettingsRole from "./SettingsRole";
import TotalProfit from "./TotalProfit";
import axios from "axios";

const userNavigation = [
  { name: "Store Name 01", href: "#" },
  { name: "Store Name 02", href: "#" },
  { name: "Store Name 03", href: "#" },
];

export default function DashboardLayout() {
  const [selectedComponent, setSelectedComponent] = useState("Overview");
  const [breadcrumb, setBreadcrumb] = useState([{ name: "Dashboard", href: "/" }]);
  const [storeName, setStoreName] = useState("Loading...");
  const [userNavigation, setUserNavigation] = useState([]);

  useEffect(() => {
    const fetchUserStores = async () => {
        try {
            const response = await axios.post(
                "https://raotory.com/apis/getUserStores.php",
                { email: "ubahobaah@gmail.com" }
            );

            if (response.data.success) {
                const { singleStore, multiStores } = response.data;

                const stores = [];

                // Add single store to the list
                if (typeof singleStore === "string") {
                    // No single store created
                    stores.push({
                        name: "No single store found",
                        isMulti: false,
                    });
                } else {
                    // Add single store
                    stores.push({
                        name: singleStore.store_name,
                        isMulti: false,
                    });
                    setStoreName(singleStore.store_name); // Set initial store
                }

                // Add multi-stores with "(multistore)" prefix
                if (Array.isArray(multiStores) && multiStores.length > 0) {
                    const multiStoreList = multiStores.map((store) => ({
                        name: `(multistore) ${store.business_name}`,
                        isMulti: true,
                    }));
                    stores.push(...multiStoreList);
                }

                setUserNavigation(stores);
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching stores:", error);
        }
    };

    fetchUserStores();
}, []);

// Handle store selection to update storeName
const handleStoreSelection = (store) => {
    setStoreName(store.name);
};


  const components = {
    //   "Overview": () => <Overview />,
      "Overview": () => <Overview setSelectedComponent={setSelectedComponent} />,  // ✅ Pass the prop
      "Input Order": () => <InputOrder setSelectedComponent={setSelectedComponent} />, // ✅ Pass the prop
      "Invoice": () => <div><Invoice /></div>,
    };

  // Update breadcrumb when component changes
  useEffect(() => {
  setBreadcrumb([{ name: "Dashboard", href: "/" }, { name: selectedComponent, href: "#" }]);
  }, [selectedComponent]);

  // For logout button
  const dispatch = useDispatch();

  return (
    <>
        {/* Dashboard wrapper */}
        <div className="max-w-screen-2xl mx-auto">
            
            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                   
                    {/* Sidebar menu */}
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7 justify-between">
                            
                            {/* Top sidebar menu items */}
                            <li className="flex flex-1 flex-col">
                                <ul className="space-y-1">

                                    {/* Overview, Input Order */}
                                    {[
                                    { name: "Overview", icon: BiSolidDashboard },
                                    { name: "Input Order", icon: HiOutlineShoppingCart },
                                    ].map(({ name, icon: Icon }) => (
                                    <li key={name}>
                                        <button
                                        onClick={() => setSelectedComponent(name)}
                                        className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left cursor-pointer ${
                                            selectedComponent === name
                                            ? "bg-blue-500 text-white"
                                            : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                        }`}
                                        >
                                        <Icon className="size-6" /> {name}
                                        </button>
                                    </li>
                                    ))}
                                    
                                    {/* Invoice, Create Customer */}
                                    {[{ name: "Invoice", icon: PiScroll },
                                        { name: "Create Customer", icon: LuCircleUserRound }].map(({ name, icon: Icon }) => (
                                        <li key={name}>
                                            <button
                                            onClick={() => setSelectedComponent(name)}
                                            className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left cursor-pointer ${
                                                selectedComponent === name
                                                ? "bg-blue-500 text-white"
                                                : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                            }`}
                                            >
                                            <Icon className="size-6" /> {name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Dashboard main section */}
            <div className="lg:pl-72">
                {/* Main content area */}
                <main className="p-8">
                    <div id="main-content-area">
                        {components[selectedComponent] ? components[selectedComponent]() : <div>Not Found</div>}
                    </div>
                </main>
            </div>
        </div>
    </>
  );
}