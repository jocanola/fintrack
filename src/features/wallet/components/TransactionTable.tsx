"use client";

import React from "react";
import { Transaction } from "../types/dashboard";
import { useTransactionSearch } from "../hooks/useTransactionSearch";
import TransactionTypeIndicator from "./TransactionTypeIndicator";
import AmountDisplay from "./AmountDisplay";
import SortIcon from "./SortIcon";
import { EmptyState } from "./EmptyState";

interface TransactionTableProps {
  transactions: Transaction[];
  searchQuery?: string;
}

type SortField = "date" | "remark" | "amount" | "currency" | "type";

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  searchQuery = "",
}) => {
  const {
    transactions: processedTransactions,
    sortField,
    sortDirection,
    handleSort,
    totalResults,
    isFiltered,
  } = useTransactionSearch({
    data: transactions,
    defaultSortField: "date",
    defaultSortDirection: "desc",
    externalQuery: searchQuery,
  });

  const renderSortIcon = (field: SortField) => (
    <SortIcon
      isActive={sortField === field}
      direction={sortDirection}
      size="md"
    />
  );

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      {/* Mobile card view */}
      <div className="md:hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Recent Transactions</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {processedTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <TransactionTypeIndicator type={transaction.type} />
                  <span className="font-medium text-gray-900 ml-2">
                    {transaction.remark}
                  </span>
                </div>
                <AmountDisplay
                  amount={transaction.amount}
                  className="font-semibold"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{transaction.date}</span>
                <span className="text-gray-600">{transaction.currency}</span>
              </div>
            </div>
          ))}

          {processedTransactions.length === 0 && (
            <EmptyState isFiltered={isFiltered} />
          )}
        </div>
      </div>

      {/* Desktop table view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="">
            <tr>
              <th
                className="w-1/2 px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors select-none"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center border-b border-gray-200 pb-2">
                  Date{" "}
                  {
                    <SortIcon
                      isActive={sortField === "date"}
                      direction={sortDirection}
                      size="md"
                    />
                  }
                </div>
              </th>
              <th
                className="w-1/8 px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors select-none"
                onClick={() => handleSort("remark")}
              >
                <div className="flex items-center border-b border-gray-200 pb-2">
                  Remark {renderSortIcon("remark")}
                </div>
              </th>
              <th
                className="w-1/8 px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors select-none"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center border-b border-gray-200 pb-2">
                  Amount {renderSortIcon("amount")}
                </div>
              </th>
              <th
                className="w-1/8 px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors select-none"
                onClick={() => handleSort("currency")}
              >
                <div className="flex items-center border-b border-gray-200 pb-2">
                  Currency {renderSortIcon("currency")}
                </div>
              </th>
              <th
                className="w-1/8 px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors select-none"
                onClick={() => handleSort("type")}
              >
                <div className="flex items-center border-b border-gray-200 pb-2">
                  Type {renderSortIcon("type")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {processedTransactions.map((transaction, index) => (
              <tr
                key={transaction.id}
                className={`hover:bg-gray-50 transition-colors cursor-pointer ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                }`}
              >
                <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium ">
                  <div className="border-b border-gray-200 pb-2">
                    {transaction.date}
                  </div>
                </td>
                <td className="w-1/8 px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">
                  <div className="border-b border-gray-200 pb-2">
                    {transaction.remark}
                  </div>
                </td>
                <td className="w-1/8 px-6 py-4 whitespace-nowrap">
                  <div className="border-b border-gray-200 pb-2">
                    <AmountDisplay amount={transaction.amount} />
                  </div>
                </td>
                <td className="w-1/8 px-6 py-4 whitespace-nowrap text-sm  ">
                  <div className="border-b border-gray-200 pb-2">
                    {transaction.currency}
                  </div>
                </td>
                <td className="w-1/8 px-6 py-4 whitespace-nowrap text-sm ">
                  <div className="border-b border-gray-200 pb-2">
                    <TransactionTypeIndicator type={transaction.type} />
                  </div>
                </td>
              </tr>
            ))}

           
          </tbody>
        </table>
         {processedTransactions.length === 0 && (
              <EmptyState isFiltered={isFiltered} />
            )}
      </div>
    </div>
  );
};

export default TransactionTable;
