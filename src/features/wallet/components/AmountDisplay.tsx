import React from "react";

interface AmountDisplayProps {
  amount: number;
  currency?: string;
  className?: string;
}

const AmountDisplay: React.FC<AmountDisplayProps> = ({
  amount,
  currency = "USD",
  className = "",
}) => {
  const isPositive = amount > 0;
  const formattedAmount = Math.abs(amount).toLocaleString();

  return (
    <span
      className={`font-medium ${
        isPositive ? "text-success" : "text-gray-900"
      } ${className}`}
    >
      {isPositive ? "$" : "-$"}
      {formattedAmount}
    </span>
  );
};

export default AmountDisplay;
