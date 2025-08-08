import React from "react";
import Image from "next/image";

export type SortDirection = "asc" | "desc";

interface SortIconProps {
  isActive: boolean;
  direction?: SortDirection;
  size?: "sm" | "md" | "lg";
}

const SortIcon: React.FC<SortIconProps> = ({
  isActive,
  direction = "asc",
  size = "md",
}) => {
  const sizeConfig = {
    sm: {
      active: { width: 10, height: 10 },
      inactive: { width: 8, height: 5 },
    },
    md: {
      active: { width: 12, height: 12 },
      inactive: { width: 10, height: 6 },
    },
    lg: {
      active: { width: 14, height: 14 },
      inactive: { width: 12, height: 7 },
    },
  };

  const { active, inactive } = sizeConfig[size];

  if (isActive) {
    return (
      <Image
        src={`/assets/icons/caret-${direction === "asc" ? "up" : "down"}.svg`}
        alt={`Sort ${direction === "asc" ? "ascending" : "descending"}`}
        width={active.width}
        height={active.height}
        className="ml-1 inline-block opacity-60"
      />
    );
  }

  return (
    <div className="ml-1 inline-flex flex-col">
      <Image
        src="/assets/icons/caret-up.svg"
        alt="Sort ascending"
        width={inactive.width}
        height={inactive.height}
        className="opacity-30"
      />
      <Image
        src="/assets/icons/caret-down.svg"
        alt="Sort descending"
        width={inactive.width}
        height={inactive.height}
        className="opacity-30 -mt-1"
      />
    </div>
  );
};

export default SortIcon;
