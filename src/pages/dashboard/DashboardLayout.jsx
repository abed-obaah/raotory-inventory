import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // For logout
import { logout } from "../../redux/authSlice"; // For logout

import { 
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";

import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineShoppingCart, HiLogout } from "react-icons/hi";
import { CgList } from "react-icons/cg";
import { PiScroll } from "react-icons/pi";
import { LuCircleUserRound } from "react-icons/lu";
import { TbHelpSquareRounded } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

import RaotoryLogoAndNameBlue from "../../assets/raotory-logo-name-blue.svg";
import InputOrder from "./inputOrder/InputOrder";
import Inventory from "./inventory/Inventory";
import Overview from "./overview/Overview";
import StockProducts from "./stockProducts/StockProducts";
import ReturnedProducts from "./returnedProducts/ReturnedProducts";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Overview");
  const [isProductsOpen, setIsProductsOpen] = useState(false); // State for Products dropdown
  const [isSalesOpen, setIsSalesOpen] = useState(false); // State for Sales dropdown
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State for Settings dropdown
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
      "Overview": () => <Overview setSelectedComponent={setSelectedComponent} />,  // ✅ Pass the prop
      "Input Order": () => <InputOrder setSelectedComponent={setSelectedComponent} />, // ✅ Pass the prop
      "Stock Products": () => <div><StockProducts /></div>,
      "Returned Products": () => <div><ReturnedProducts /></div>,
      "Inventory": () => <Inventory />,
      "Sales History": () => <div><SalesHistory /></div>,
      "Total Profit": () => <div><TotalProfit /></div>,
      "Invoice": () => <div><Invoice /></div>,
      "Create Customer": () => <div><CreateCustomer /></div>,
      "General": () => <SettingsGeneral />,
      "Users": () => <SettingsUsers />,
      "Role": () => <div><SettingsRole /></div>,
      "Help Center": () => <div>Help Center coming soon</div>,
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
            
            {/* Static sidebar for mobile */}
            <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />
                <div className="fixed inset-0 flex">
                    <DialogPanel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                    >
                        <TransitionChild>
                            <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                            <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                <span className="sr-only">Close sidebar</span>
                                <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                            </button>
                            </div>
                        </TransitionChild>

                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                            
                            {/* Company logo */}
                            <div className="flex h-16 shrink-0 items-center px-2">
                                <a href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Raotory</span>
                                    <img
                                    alt="Raotory logo"
                                    src={RaotoryLogoAndNameBlue}
                                    className="h-5 w-auto"
                                    />
                                </a>
                            </div>

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
                                                    onClick={() => {
                                                        setSelectedComponent(name)
                                                        setSidebarOpen(false); // Close sidebar
                                                    }}
                                                    className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left ${
                                                        selectedComponent === name
                                                        ? "bg-blue-500 text-white"
                                                        : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                                    }`}
                                                >
                                                <Icon className="size-6" /> {name}
                                                </button>
                                            </li>
                                            ))}

                                            {/* Products */}
                                            <li>
                                                <button
                                                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                                                    className="flex items-center justify-between w-full p-2 text-sm font-semibold rounded-md text-left text-gray-700 hover:bg-blue-500 hover:text-white"
                                                >
                                                    <span className="flex items-center gap-x-3">
                                                    <CgList className="size-6" /> Products
                                                    </span>
                                                    <ChevronDownIcon className={`size-5 transition-transform ${isProductsOpen ? "rotate-180" : "rotate-0"}`} />
                                                </button>
                                                {isProductsOpen && (
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                    {["Stock Products", "Returned Products", "Inventory"].map((subItem) => (
                                                        <li key={subItem}>
                                                        <button
                                                            onClick={() => {
                                                                setSelectedComponent(subItem)
                                                                setSidebarOpen(false); // Close sidebar
                                                            }}
                                                            className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left ${
                                                            selectedComponent === subItem
                                                                ? "bg-blue-500 text-white"
                                                                : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                                            }`}
                                                        >
                                                            {subItem}
                                                        </button>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                )}
                                            </li>

                                            {/* Sales */}
                                            <li>
                                                <button
                                                    onClick={() => setIsSalesOpen(!isSalesOpen)}
                                                    className="flex items-center justify-between w-full p-2 text-sm font-semibold rounded-md text-left text-gray-700 hover:bg-blue-500 hover:text-white"
                                                >
                                                    <span className="flex items-center gap-x-3">
                                                    <CgList className="size-6" /> Sales
                                                    </span>
                                                    <ChevronDownIcon className={`size-5 transition-transform ${isSalesOpen ? "rotate-180" : "rotate-0"}`} />
                                                </button>
                                                {isSalesOpen && (
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                    {["Sales History", "Total Profit"].map((subItem) => (
                                                        <li key={subItem}>
                                                        <button
                                                            onClick={() => {
                                                                setSelectedComponent(subItem)
                                                                setSidebarOpen(false); // Close sidebar
                                                            }}
                                                            className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left ${
                                                            selectedComponent === subItem
                                                                ? "bg-blue-500 text-white"
                                                                : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                                            }`}
                                                        >
                                                            {subItem}
                                                        </button>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                )}
                                            </li>
                                            
                                            {/* Invoice, Create Customer */}
                                            {[{ name: "Invoice", icon: PiScroll },
                                                { name: "Create Customer", icon: LuCircleUserRound }].map(({ name, icon: Icon }) => (
                                                <li key={name}>
                                                    <button
                                                    onClick={() => {
                                                        setSelectedComponent(name)
                                                        setSidebarOpen(false); // Close sidebar
                                                    }}
                                                    className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left ${
                                                        selectedComponent === name
                                                        ? "bg-blue-500 text-white"
                                                        : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                                    }`}
                                                    >
                                                    <Icon className="size-6" /> {name}
                                                    </button>
                                                </li>
                                            ))}

                                            {/* Settings */}
                                            <li>
                                                <button
                                                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                                                    className="flex items-center justify-between w-full p-2 text-sm font-semibold rounded-md text-left text-gray-700 hover:bg-blue-500 hover:text-white"
                                                >
                                                    <span className="flex items-center gap-x-3">
                                                        <Cog6ToothIcon className="size-6" /> Settings
                                                    </span>
                                                    <ChevronDownIcon className={`size-5 transition-transform ${isSettingsOpen ? "rotate-180" : "rotate-0"}`} />
                                                </button>
                                                {isSettingsOpen && (
                                                    <ul className="ml-4 mt-1 space-y-1">
                                                        {["General", "Users", "Role"].map((subItem) => (
                                                            <li key={subItem}>
                                                                <button
                                                                    onClick={() => {
                                                                        setSelectedComponent(subItem)
                                                                        setSidebarOpen(false); // Close sidebar
                                                                    }}
                                                                    className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left ${
                                                                        selectedComponent === subItem
                                                                            ? "bg-blue-500 text-white"
                                                                            : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                                                    }`}
                                                                >
                                                                    {subItem}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>

                                            {/* Help Center */}
                                            {[{ name: "Help Center", icon: TbHelpSquareRounded }].map(({ name, icon: Icon }) => (
                                                <li key={name}>
                                                    <button
                                                        onClick={() => {
                                                            setSelectedComponent(name)
                                                            setSidebarOpen(false); // Close sidebar
                                                        }}
                                                        className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left ${
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

                                    {/* Middle sidebar menu items removed from here */}

                                    {/* Bottom sidebar menu items */}
                                    <li>
                                        <ul>

                                            {/* Dark mode */}
                                            <li className="hidden px-2">
                                                <a
                                                    href="#"
                                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-757575 hover:bg-blue-29a8f1 hover:text-white"
                                                >
                                                    <MdDarkMode
                                                        aria-hidden="true"
                                                        className="size-6 shrink-0 text-gray-757575 group-hover:text-white"
                                                    />
                                                    Dark Mode
                                                </a>
                                            </li>

                                            {/* Logout */}
                                            <li className="px-2">
                                                <button
                                                    onClick={() => dispatch(logout())}
                                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-757575 cursor-pointer hover:bg-blue-29a8f1 hover:text-white"
                                                >
                                                    <HiLogout
                                                        aria-hidden="true"
                                                        className="size-6 shrink-0 text-gray-757575 group-hover:text-white"
                                                    />
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">

                    {/* Company logo */}
                    <div className="flex h-16 shrink-0 items-center px-2">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Raotory</span>
                            <img
                            alt="Raotory logo"
                            src={RaotoryLogoAndNameBlue}
                            className="h-5 w-auto"
                            />
                        </a>
                    </div>
                   
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

                                    {/* Products */}
                                    <li>
                                        <button
                                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                                            className="flex items-center justify-between w-full p-2 text-sm font-semibold rounded-md text-left text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
                                        >
                                            <span className="flex items-center gap-x-3">
                                            <CgList className="size-6" /> Products
                                            </span>
                                            <ChevronDownIcon className={`size-5 transition-transform ${isProductsOpen ? "rotate-180" : "rotate-0"}`} />
                                        </button>
                                        {isProductsOpen && (
                                            <ul className="ml-4 mt-1 space-y-1">
                                            {["Stock Products", "Returned Products", "Inventory"].map((subItem) => (
                                                <li key={subItem}>
                                                <button
                                                    onClick={() => setSelectedComponent(subItem)}
                                                    className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left cursor-pointer ${
                                                    selectedComponent === subItem
                                                        ? "bg-blue-500 text-white"
                                                        : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                                    }`}
                                                >
                                                    {subItem}
                                                </button>
                                                </li>
                                            ))}
                                            </ul>
                                        )}
                                    </li>

                                    {/* Sales */}
                                    <li>
                                        <button
                                            onClick={() => setIsSalesOpen(!isSalesOpen)}
                                            className="flex items-center justify-between w-full p-2 text-sm font-semibold rounded-md text-left text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
                                        >
                                            <span className="flex items-center gap-x-3">
                                            <RiMoneyDollarBoxLine className="size-6" /> Sales
                                            </span>
                                            <ChevronDownIcon className={`size-5 transition-transform ${isSalesOpen ? "rotate-180" : "rotate-0"}`} />
                                        </button>
                                        {isSalesOpen && (
                                            <ul className="ml-4 mt-1 space-y-1">
                                            {["Sales History", "Total Profit"].map((subItem) => (
                                                <li key={subItem}>
                                                <button
                                                    onClick={() => setSelectedComponent(subItem)}
                                                    className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left cursor-pointer ${
                                                    selectedComponent === subItem
                                                        ? "bg-blue-500 text-white"
                                                        : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                                    }`}
                                                >
                                                    {subItem}
                                                </button>
                                                </li>
                                            ))}
                                            </ul>
                                        )}
                                    </li>
                                    
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

                                    {/* Settings */}
                                    <li>
                                        <button
                                            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                                            className="flex items-center justify-between w-full p-2 text-sm font-semibold rounded-md text-left text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
                                        >
                                            <span className="flex items-center gap-x-3">
                                                <Cog6ToothIcon className="size-6" /> Settings
                                            </span>
                                            <ChevronDownIcon className={`size-5 transition-transform ${isSettingsOpen ? "rotate-180" : "rotate-0"}`} />
                                        </button>
                                        {isSettingsOpen && (
                                            <ul className="ml-4 mt-1 space-y-1">
                                                {["General", "Users", "Role"].map((subItem) => (
                                                    <li key={subItem}>
                                                        <button
                                                            onClick={() => setSelectedComponent(subItem)}
                                                            className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left cursor-pointer ${
                                                                selectedComponent === subItem
                                                                    ? "bg-blue-500 text-white"
                                                                    : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                                            }`}
                                                        >
                                                            {subItem}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>

                                    {/* Help Center */}
                                    {[{ name: "Help Center", icon: TbHelpSquareRounded }].map(({ name, icon: Icon }) => (
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

                            {/* Middle sidebar menu items removed from here */}

                            {/* Bottom sidebar menu items */}
                            <li>
                                <ul>

                                    {/* Dark mode */}
                                    <li className="hidden px-2">
                                        <a
                                            href="#"
                                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-757575 hover:bg-blue-29a8f1 hover:text-white"
                                        >
                                            <MdDarkMode
                                                aria-hidden="true"
                                                className="size-6 shrink-0 text-gray-757575 group-hover:text-white"
                                            />
                                            Dark Mode
                                        </a>
                                    </li>

                                    {/* Logout */}
                                    <li className="px-2">
                                        <button
                                            onClick={() => dispatch(logout())}
                                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-757575 cursor-pointer hover:bg-blue-29a8f1 hover:text-white"
                                        >
                                            <HiLogout
                                                aria-hidden="true"
                                                className="size-6 shrink-0 text-gray-757575 group-hover:text-white"
                                            />
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Dashboard main section */}
            <div className="lg:pl-72">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
                    
                    {/* Hamburger button (for mobile) */}
                    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Separator (for mobile) */}
                    <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

                    {/* Dashboard notification bar */}
                    <div className="flex flex-1 items-center gap-x-4 self-stretch lg:gap-x-6">
                        
                        {/* Search removed from here, replaced with breadcrumb */}

                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="flex flex-1">
                            <span className="text-xl font-semibold text-dark-primary">
                                {selectedComponent}
                            </span>
                        </nav>

                        {/* Notification icon and profile dropdown */}
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            
                            {/* Notification icon */}
                            <button
                                type="button"
                                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="size-6" />
                            </button>

                            {/* Separator */}
                            <div
                                aria-hidden="true"
                                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                            />

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-center p-1.5">
                <span className="sr-only">Open user menu</span>
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full bg-gray-50"
                />
                <span className="hidden lg:flex lg:items-center">
                    <span
                        aria-hidden="true"
                        className="ml-4 text-sm font-semibold text-gray-900"
                    >
                        {storeName}
                    </span>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="ml-2 size-5 text-gray-400"
                    />
                </span>
            </MenuButton>
            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                {userNavigation.map((item, index) => (
                    <MenuItem key={index} onClick={() => handleStoreSelection(item)}>
                        <button
                            className="w-full text-left px-3 py-1 text-sm text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                            {item.name}
                        </button>
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
                        </div>
                    </div>
                </div>
                
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