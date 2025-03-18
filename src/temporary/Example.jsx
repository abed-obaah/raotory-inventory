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
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

import { TbHelpSquareRounded } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import RaotoryLogoAndNameBlue from "../../assets/raotory-logo-name-blue.svg";
import OnboardingHome from "./OnboardingHome";

const userNavigation = [
  { name: "Store Name 01", href: "#" },
  { name: "Store Name 02", href: "#" },
  { name: "Store Name 03", href: "#" },
];

const components = {
  "Onboarding": () => <OnboardingHome />,
  "Help Center": () => <div>Help Center coming soon.</div>,
};

export default function DashboardLayoutOnboarding() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Onboarding");
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
                                            { name: "Onboarding", icon: HomeIcon },

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

                                            {/* Products Submenu removed from here*/}

                                            {[  { name: "Help Center", icon: TbHelpSquareRounded }].map(({ name, icon: Icon }) => (
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
                                    <li>
                                        <ul>
                                            {/* Dark mode */}
                                            <li className="px-2 hidden">
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

            {/* Rest of code */}

        </div>
    </>
  );
}