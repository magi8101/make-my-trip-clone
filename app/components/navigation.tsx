"use client";
import { useState } from "react";
import {
  Plane,
  Hotel,
  Home,
  Gift,
  Train,
  Bus,
  Car,
  Banknote,
  Percent,
  MoreHorizontal,
  Menu,
  X,

} from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Plane, label: "Flights" },
    { icon: Hotel, label: "Hotels" },
    { icon: Home, label: "Homestays" },
    { icon: Gift, label: "Holiday Packages" },
    { icon: Train, label: "Trains" },
    { icon: Bus, label: "Buses" },
    { icon: Car, label: "Cabs" },
    { icon: Banknote, label: "Forex" },
    { icon: Percent, label: "Offers" },
    { icon: MoreHorizontal, label: "More" },
  
  ];

  return (
    <nav className="bg-white shadow-md rounded-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
      
        {/* Desktop Menu: Visible on medium devices and up */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center cursor-pointer hover:text-[#008CFF] transition-colors"
            >
              <item.icon className="w-6 h-6 text-gray-500 hover:text-[#008CFF]" />
              <span className="text-xs mt-1">{item.label}</span>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Toggle: Visible on small devices */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <ul className="md:hidden grid grid-cols-3 gap-4 px-8 pb-3 text-gray-700 text-sm font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center cursor-pointer hover:text-[#008CFF] transition-colors"
            >
              <item.icon className="w-6 h-6 text-gray-500 hover:text-[#008CFF]" />
              <span className="text-xs mt-1">{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

