import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, BarChart2, ShoppingCart, Shield } from "lucide-react";

const menuItems = [
  { name: "Home", to: "/dashboard", icon: <Home size={18} /> },
  { name: "Admin", to: "/dashboard/admin", icon: <Shield size={18} /> },
  { name: "Users", to: "/dashboard/user", icon: <Users size={18} /> },
  { name: "Orders", to: "/dashboard/orders", icon: <ShoppingCart size={18} /> },
  {
    name: "Statistics",
    to: "/dashboard/statistics",
    icon: <BarChart2 size={18} />,
  },
];

const SideBar = () => {
  return (
    <aside className="w-64 h-screen bg-white shadow-md fixed lg:static flex flex-col">
      <div className="p-6 font-bold text-xl text-blue-600 border-b">
        Dashboard
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
                isActive ? "bg-blue-200 font-semibold" : "text-gray-700"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
