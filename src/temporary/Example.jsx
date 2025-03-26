import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // For logout

import {
  Cog6ToothIcon,
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
import { RiMoneyDollarBoxLine } from "react-icons/ri";

import RaotoryLogoAndNameBlue from "../../assets/raotory-logo-name-blue.svg";
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

export default function DashboardLayout() {
  const [selectedComponent, setSelectedComponent] = useState("Overview");
  const [isProductsOpen, setIsProductsOpen] = useState(false); // State for Products dropdown
  const [isSalesOpen, setIsSalesOpen] = useState(false); // State for Sales dropdown
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State for Settings dropdown
  const [breadcrumb, setBreadcrumb] = useState([{ name: "Dashboard", href: "/" }]);

  const components = {
    //   "Overview": () => <Overview />,
      "Overview": () => <Overview setSelectedComponent={setSelectedComponent} />,  // ✅ Pass the prop
      "Input Order": () => <InputOrder setSelectedComponent={setSelectedComponent} />, // ✅ Pass the prop
      "Stock Products": () => <div><StockProduct /></div>,
      "Returned Products": () => <div><ReturnedProducts /></div>,
      "Inventory": () => <Inventory />,
      "Sales History": () => <div><SalesHistory /></div>,
      "Total Profit": () => <div><TotalProfit /></div>,
      "Invoice": () => <div><Invoice /></div>,
      "Create Customer": () => <div><CreateCustomer /></div>,
      "General": () => <SettingsGeneral />,
      "Users": () => <SettingsUsers />,
      "Role": () => <div><SettingsRole /></div>,
      "Help Center": () => <div>Help Center Content</div>,
    };

  // Update breadcrumb when component changes
  useEffect(() => {
  setBreadcrumb([{ name: "Dashboard", href: "/" }, { name: selectedComponent, href: "#" }]);
  }, [selectedComponent]);

  return (
    <>
        {/* Dashboard wrapper */}
        <div className="max-w-screen-2xl mx-auto">
            
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
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Dashboard main section */}
            <div className="lg:pl-72">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
                    {/* Dashboard notification bar */}
                    <div className="flex flex-1 items-center gap-x-4 self-stretch lg:gap-x-6">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="flex flex-1">
                            <span className="text-xl font-semibold text-dark-primary">
                                {selectedComponent}
                            </span>
                        </nav>
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