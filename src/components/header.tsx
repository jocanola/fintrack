"use client";

import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement your search logic here
      console.log("Searching for:", searchQuery);
      // You can add navigation or API calls here
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  return (
    <header className="bg-white px-8 md:px-12 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={onMenuClick}
            className="md:hidden -ml-2 hover:bg-gray-100 rounded-lg"
          >
            <Image
              src="/assets/icons/menu.svg"
              alt="Menu"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>

          <div className="flex items-center space-x-1">
            <Image
              src="/assets/icons/logomark.svg"
              alt="FinTrack Logo"
              width={32}
              height={32}
              className="w-6 block h-6 sm:w-8 sm:h-8"
            />
            <h1 className="text-[24px] block leading-[100%]  font-normal leading-trim-both  text-edge-cap font-timmana text-muted mt-3 ">
              FinTrack
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="relative hidden sm:block">
            <Image
              src="/assets/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search transactions, categories..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-muted focus:border-transparent w-48 lg:w-64"
            />
          </form>

          {/* Mobile search button */}
          <button
            type="button"
            onClick={toggleMobileSearch}
            className="sm:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Image
              src="/assets/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>

          <button type="button" className="p-2 hover:bg-gray-100 rounded-lg">
            <Image
              src="/assets/icons/app-grid.svg"
              alt="App Grid"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </button>

          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden">
            <Image
              src="/assets/images/member5.png"
              alt="User Avatar"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="sm:hidden mt-3 pb-3">
          <form onSubmit={handleSearch} className="relative">
            <Image
              src="/assets/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search transactions, categories..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-muted focus:border-transparent"
              // autoFocus={true}
            />
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
