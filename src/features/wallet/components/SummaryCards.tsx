"use client";

import React from "react";
import { DashboardSummary } from "../types/dashboard";
import Image from "next/image";

interface SummaryCardsProps {
  summary: DashboardSummary;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ summary }) => {
  const cards = [
    {
      title: "Total Balance",
      value: `$${summary.totalBalance.toLocaleString()}`,
      change: `+${summary.balanceChange}%`,
      isPositive: summary.balanceChange > 0,
    },
    {
      title: "Total Credits",
      value: `$${summary.totalCredits.toLocaleString()}`,
      change: `+${summary.creditsChange}%`,
      isPositive: summary.creditsChange > 0,
    },
    {
      title: "Total Debits",
      value: `$${summary.totalDebits.toLocaleString()}`,
      change: `${summary.debitsChange}%`,
      isPositive: summary.debitsChange > 0,
    },
    {
      title: "Transactions",
      value: summary.transactionCount.toString(),
      change: `+${summary.transactionChange}%`,
      isPositive: summary.transactionChange > 0,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4 sm:gap-6 mb-4 md:mb-[18px]">
      {cards.map((card, index) => (
        <div
          key={`${card.title}-${index}`}
          className="bg-subtle/10 rounded-lg p-[28px] relative"
        >
          <div className="flex items-center justify-between md:mb-3 mb-4">
            <h3 className="text-[17px] font-bold leading-6 tracking-[-0.085px] text-primary-900">
              {card.title}
            </h3>
            <button type="button" className="text-gray-400 hover:text-gray-600 cursor-pointer">
              <Image
                src="/assets/icons/dots-horizontal.svg"
                alt="More options"
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[34px] font-bold leading-[40px] tracking-[-0.68px] text-primary-900">
                {card.value}
              </p>
              <p
                className={`text-xs sm:text-sm font-medium ${
                  card.isPositive ? "text-success" : "text-accent-600"
                }`}
              >
                {card.change}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
