import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // For logout

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

  // For logout button
  const dispatch = useDispatch();

  return (
    <>
        {/* Dashboard wrapper */}
        <div className="max-w-screen-2xl mx-auto">
            



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