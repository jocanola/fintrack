"use client";

import Image from "next/image";
import React from "react";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeItem,
  onItemClick,
  isOpen,
  onClose,
}) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "transactions", label: "Transactions" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  const handleItemClick = (item: string) => {
    onItemClick(item);
    onClose(); // Close mobile menu after selection
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-black/60 bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:static inset-y-0  md:pl-12 md:pt-5 left-0 z-50 w-64 bg-gray-50  transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* Mobile close button */}
        <div className="md:hidden flex justify-end p-4">
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <Image
              src="/assets/icons/close.svg"
              alt="close"
              width={24}
              height={24}
            />
          </button>
        </div>

        <nav className="">
          <ul className="">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-4.5 py-2 rounded-[16px] text-left transition-colors text-[15px] leading-[20px] font-medium cursor-pointer ${
                    activeItem === item.id
                      ? "bg-subtle/15 text-subtle"
                      : "text-primary-900 hover:bg-gray-100"
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
