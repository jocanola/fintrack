import React, { useState } from "react";

export const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div className="flex md:space-x-6 space-x-8   border-b border-gray-200 overflow-x-auto">
      {["Overview", "Transactions"].map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setActiveTab(item)}
          className={`px-6 py-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === item
              ? "border-muted text-muted"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
