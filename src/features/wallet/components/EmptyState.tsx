import React from "react";

export const EmptyState = ({ isFiltered }: { isFiltered: boolean }) => (
  <div className="flex mx-auto flex-col items-center justify-center p-12 text-center">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
      <svg
        className="w-8 h-8 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">
      {isFiltered ? "No transactions found" : "No transactions yet"}
    </h3>
    <p className="text-gray-500 max-w-sm">
      {isFiltered
        ? "Try adjusting your search terms or filters to find what you're looking for."
        : "When you make transactions, they'll appear here."}
    </p>
  </div>
);
