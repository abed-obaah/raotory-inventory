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
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgList } from "react-icons/cg";
import { PiScroll } from "react-icons/pi";
import { TbHistory } from "react-icons/tb";
import { LuCircleUserRound } from "react-icons/lu";
import { TbHelpSquareRounded } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { HiLogout } from "react-icons/hi";

import RaotoryLogoAndNameBlue from "../../assets/raotory-logo-name-blue.svg";
import InputOrder from "./InputOrder";
import Inventory from "./Inventory";
import Overview from "./Overview";
import StockProduct from "./StockProduct";
import ReturnedProducts from "./ReturnedProducts";
import Invoice from "./Invoice";
import SalesHistory from "./SalesHistory";
import CreateCustomer from "./CreateCustomer";

const userNavigation = [
  { name: "Store Name 01", href: "#" },
  { name: "Store Name 02", href: "#" },
  { name: "Store Name 03", href: "#" },
];

const components = {
  "Overview": () => <Overview />,
  "Input Order": () => <InputOrder />,
  "Stock Products": () => <div><StockProduct /></div>,
  "Returned Products": () => <div><ReturnedProducts /></div>,
  "Inventory": () => <Inventory />,
  "Invoice": () => <div><Invoice /></div>,
  "Sales History": () => <div><SalesHistory /></div>,
  "Create Customer": () => <div><CreateCustomer /></div>,
  "Settings": () => <div>Settings Content</div>,
  "Help Center": () => <div>Help Center Content</div>,
};

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Overview");
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const [breadcrumb, setBreadcrumb] = useState([{ name: "Dashboard", href: "/" }]);

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

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:z-50 lg:flex lg:w-72 lg:flex-col">
                
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
                                    {[
                                    { name: "Overview", icon: BiSolidDashboard },
                                    { name: "Input Order", icon: HiOutlineShoppingCart },

                                    ].map(({ name, icon: Icon }) => (
                                    <li key={name}>
                                        <button
                                        onClick={() => setSelectedComponent(name)}
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

                                    {/* Products Submenu */}
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
                                                    onClick={() => setSelectedComponent(subItem)}
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

                                    {[{ name: "Invoice", icon: PiScroll },
                                        { name: "Sales History", icon: TbHistory },
                                        { name: "Create Customer", icon: LuCircleUserRound },
                                        { name: "Settings", icon: Cog6ToothIcon },
                                        { name: "Help Center", icon: TbHelpSquareRounded }].map(({ name, icon: Icon }) => (
                                        <li key={name}>
                                            <button
                                            onClick={() => setSelectedComponent(name)}
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
                                    <li className="px-2">
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
                
                {/* Main content area */}
                <main className="p-8 border-x border-black-10-percent">
                    <div id="main-content-area">
                        {components[selectedComponent] ? components[selectedComponent]() : <div>Not Found</div>}
                    </div>
                </main>
            </div>
        </div>
    </>
  );
}