import React from "react";

interface TransactionTypeIndicatorProps {
  type: "Credit" | "Debit";
  className?: string;
}

const TransactionTypeIndicator: React.FC<TransactionTypeIndicatorProps> = ({
  type,
  className = "",
}) => {
  const isCredit = type === "Credit";

  return (
    <div
      className={`flex items-center  space-x-2 bg-subtle/10 border-1.5 rounded-2xl px-3 py-2 ${className}`}
    >
      <div
        className={`w-2 h-2 rounded-full mr-2 ${
          isCredit ? "bg-success" : "bg-accent-600"
        }`}
      />
      <span className={isCredit ? "text-success" : "text-accent-600"}>
        {type}
      </span>
    </div>
  );
};

export default TransactionTypeIndicator;
