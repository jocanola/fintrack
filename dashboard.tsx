"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./src/components/Header";
import Sidebar from "./src/components/Sidebar";
import SummaryCards from "./src/components/SummaryCards";
import TransactionTable from "./src/components/TransactionTable";
import UserAvatars from "./src/components/UserAvatars";
import {
  sampleTransactions,
  dashboardSummary,
  users,
} from "./src/data/sampleData";
import { WalletLedgerHeader } from "src/components/WalletLedgerHeader";
import { TabNavigation } from "src/components/TabNavigation";

const Dashboard: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-public-sans">
      <Header onMenuClick={handleMenuClick} />

      <div className="flex md:space-x-6 md:pl-0">
        <Sidebar
          activeItem={activeMenuItem}
          onItemClick={setActiveMenuItem}
          isOpen={sidebarOpen}
          onClose={handleSidebarClose}
        />

        <main className="flex-1  pt-5 pl-8 md:pl-0 pr-8 md:pr-12 ">
          <div className="flex flex-col max-w-7xl space-y-[28px] mx-auto">
            {/* Wallet Ledger Header */}
            <WalletLedgerHeader />
            {/* User Avatars */}
            <UserAvatars users={users} />

            {/* Tab Navigation */}
            <TabNavigation />

            {/* Summary Section */}
            <div className="">
              <h2 className="text-base sm:text-lg font-semibold text-primary-900 mb-4 sm:mb-6">
                Summary
              </h2>
              <SummaryCards summary={dashboardSummary} />

              {/* Transaction Table */}
              <TransactionTable transactions={sampleTransactions} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
