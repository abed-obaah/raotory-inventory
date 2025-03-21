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
                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-7">

                                    {/* Top sidebar menu - mobile */}
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

                                    {/* Middle sidebar menu - mobile - removed from here*/}
                                    
                                    {/* Bottom sidebar menu - mobile */}
                                    <li className="mt-auto">
                                        <ul className="">
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
                                            <li className="px-2">
                                                <a
                                                    href="#"
                                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-757575 hover:bg-blue-29a8f1 hover:text-white"
                                                >
                                                    <HiLogout
                                                        aria-hidden="true"
                                                        className="size-6 shrink-0 text-gray-757575 group-hover:text-white"
                                                    />
                                                    Logout
                                                </a>
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
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-x border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">

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
                                            className="ml-4 text-sm/6 font-semibold text-gray-900"
                                        >
                                            Store Name 01
                                        </span>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="ml-2 size-5 text-gray-400"
                                        />
                                    </span>
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            <a
                                                href={item.href}
                                                className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                            >
                                                {item.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
                
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