"use client";

import Image from "next/image";
import { forwardRef } from "react";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  variant?: "desktop" | "mobile";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      placeholder = "Search transactions, categories...",
      className = "",
      inputClassName = "",
      variant = "desktop",
      value = "",
      onChange,
      onClear,
    },
    ref
  ) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    };

    const handleClear = () => {
      onClear?.();
    };

    const baseInputClasses =
      "pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-muted focus:border-transparent transition-all duration-200";

    const variantClasses = {
      desktop: "w-48 lg:w-64",
      mobile: "w-full",
    };

    const finalInputClassName = `${baseInputClasses} ${variantClasses[variant]} ${inputClassName}`;

    return (
      <form onSubmit={handleSubmit} className={`relative ${className}`}>
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
        />
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={finalInputClassName}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Clear search</title>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </form>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
