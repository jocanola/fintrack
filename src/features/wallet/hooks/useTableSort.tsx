import { useState, useMemo } from "react";

type SortDirection = "asc" | "desc";

interface UseSortableTableProps<T> {
  data: T[];
  defaultSortField: keyof T;
  defaultSortDirection?: SortDirection;
}

export function useTableSort<T>({
  data,
  defaultSortField,
  defaultSortDirection = "desc",
}: UseSortableTableProps<T>) {
  const [sortField, setSortField] = useState<keyof T>(defaultSortField);
  const [sortDirection, setSortDirection] =
    useState<SortDirection>(defaultSortDirection);

  const handleSort = (field: keyof T) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      // Handle different data types
      const getValue = (value: unknown, field: keyof T) => {
        if (field === "amount") {
          return Math.abs(Number(value));
        }
        if (field === "date") {
          return new Date(String(value)).getTime();
        }
        return String(value).toLowerCase();
      };

      const aProcessed = getValue(aValue, sortField);
      const bProcessed = getValue(bValue, sortField);

      if (aProcessed < bProcessed) return sortDirection === "asc" ? -1 : 1;
      if (aProcessed > bProcessed) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortField, sortDirection]);

  return {
    sortedData,
    sortField,
    sortDirection,
    handleSort,
  };
}
