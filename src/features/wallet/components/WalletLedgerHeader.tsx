import Image from "next/image";
import React from "react";

export const WalletLedgerHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
        {/* Title with Dropdown */}
        <div className="flex items-center justify-between md:justify-start">
          <div className="flex items-center">
            <h1 className="text-[24px] md:text-[34px] font-bold leading-[30px] md:leading-[40px] tracking-[-0.68px] text-primary-900">
              Wallet Ledger
            </h1>
            <Image
              src="/assets/icons/caret-down.svg"
              alt="Dropdown"
              width={20}
              height={20}
              className="ml-2 text-primary-900 md:w-6 md:h-6"
            />
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              type="button"
              className="px-3 py-1.5 text-sm bg-neutral rounded-xl text-surface hover:bg-neutral/80 transition-colors font-medium cursor-pointer"
            >
              Share
            </button>
            <button
              type="button"
              className="p-1.5 text-gray-400 rounded-full border-muted/20 border-[1.5px] hover:text-gray-600 cursor-pointer"
            >
              <Image
                src="/assets/icons/dots-vertical.svg"
                alt="More options"
                width={20}
                height={20}
                className="text-primary-900"
              />
            </button>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center space-x-2 bg-subtle/10 border-1.5 border-black/0 rounded-2xl px-3 py-2 w-fit">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          <span className="text-[15px] font-medium leading-[20px] text-primary-900">
            Active
          </span>
        </div>
      </div>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <button
          type="button"
          className="px-4 py-2 text-sm bg-neutral rounded-2xl text-surface hover:bg-neutral/80 transition-colors text-[15px] font-medium leading-[20px] cursor-pointer"
        >
          Share
        </button>
        <button
          type="button"
          className="p-2 text-gray-400 rounded-[16px] border-muted/20 border-[1.5px] hover:text-gray-600 cursor-pointer"
        >
          <Image
            src="/assets/icons/dots-vertical.svg"
            alt="More options"
            width={24}
            height={24}
            className="text-primary-900"
          />
        </button>
      </div>
    </div>
  );
};
